import { pathToFileURL } from "node:url";
import {
  parseJsonl,
  validateStringArray,
  validateRequiredStrings,
  collectDuplicateIdErrors,
  validateRiskLevel,
  recordLabel,
  runValidationCli
} from "./shared.mjs";

const REQUIRED_STRING_FIELDS = ["id", "category", "task", "risk_level", "source"];

export { parseJsonl };

export function validateRecords(records) {
  const errors = [];
  const ids = new Set();

  records.forEach((record, index) => {
    const label = recordLabel(record, index);

    validateRequiredStrings(record, label, REQUIRED_STRING_FIELDS, errors);
    collectDuplicateIdErrors(record, label, ids, errors);
    validateStringArray(record, label, "expected_behavior", errors);
    validateRiskLevel(record, label, errors);
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

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = runValidationCli(
    process.argv,
    "Usage: node scripts/validate-dataset.mjs <dataset.jsonl>",
    parseJsonl,
    validateRecords,
    summarizeRecords,
    (summary) =>
      `Validated ${summary.total} records (low: ${summary.low}, medium: ${summary.medium}, high: ${summary.high})`
  );
}
