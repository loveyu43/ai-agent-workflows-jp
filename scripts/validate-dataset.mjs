import fs from "node:fs";
import { pathToFileURL } from "node:url";

const REQUIRED_STRING_FIELDS = ["id", "category", "task", "risk_level", "source"];
const RISK_LEVELS = new Set(["low", "medium", "high"]);

export function parseJsonl(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`Invalid JSON on non-empty line ${index + 1}: ${error.message}`);
      }
    });
}

export function validateRecords(records) {
  const errors = [];
  const ids = new Set();

  records.forEach((record, index) => {
    const label = record && typeof record.id === "string" ? record.id : `record ${index + 1}`;

    for (const field of REQUIRED_STRING_FIELDS) {
      if (typeof record?.[field] !== "string" || record[field].trim() === "") {
        errors.push(`${label}: missing ${field}`);
      }
    }

    if (typeof record?.id === "string") {
      if (ids.has(record.id)) {
        errors.push(`duplicate id: ${record.id}`);
      }
      ids.add(record.id);
    }

    if (!Array.isArray(record?.expected_behavior) || record.expected_behavior.length === 0) {
      errors.push(`${label}: expected_behavior must be a non-empty array`);
    } else {
      record.expected_behavior.forEach((item, itemIndex) => {
        if (typeof item !== "string" || item.trim() === "") {
          errors.push(`${label}: expected_behavior[${itemIndex}] must be a non-empty string`);
        }
      });
    }

    if (typeof record?.risk_level === "string" && !RISK_LEVELS.has(record.risk_level)) {
      errors.push(`${label}: bad risk_level ${record.risk_level}`);
    }
  });

  return errors;
}

export function summarizeRecords(records) {
  return records.reduce(
    (summary, record) => {
      summary.total += 1;
      if (record.risk_level === "low") summary.low += 1;
      if (record.risk_level === "medium") summary.medium += 1;
      if (record.risk_level === "high") summary.high += 1;
      return summary;
    },
    { total: 0, low: 0, medium: 0, high: 0 }
  );
}

function runCli(argv) {
  const datasetPath = argv[2];
  if (!datasetPath) {
    console.error("Usage: node scripts/validate-dataset.mjs <dataset.jsonl>");
    return 1;
  }

  const text = fs.readFileSync(datasetPath, "utf8");
  const records = parseJsonl(text);
  const errors = validateRecords(records);

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    return 1;
  }

  const summary = summarizeRecords(records);
  console.log(
    `Validated ${summary.total} records (low: ${summary.low}, medium: ${summary.medium}, high: ${summary.high})`
  );
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = runCli(process.argv);
}

