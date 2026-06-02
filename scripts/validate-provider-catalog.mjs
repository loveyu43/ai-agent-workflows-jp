import fs from "node:fs";
import { pathToFileURL } from "node:url";

const REQUIRED_STRING_FIELDS = [
  "id",
  "company",
  "service",
  "country",
  "integration_type",
  "risk_level",
  "last_checked"
];

const REQUIRED_ARRAY_FIELDS = ["agent_fit", "human_approval_required", "official_urls"];
const INTEGRATION_TYPES = new Set(["mcp", "remote_mcp", "local_mcp", "mcp_api", "api", "ai_agent_platform"]);
const RISK_LEVELS = new Set(["low", "medium", "high"]);
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function parseProviderJsonl(text) {
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

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

function validateStringArray(record, label, field, errors) {
  if (!Array.isArray(record?.[field]) || record[field].length === 0) {
    errors.push(`${label}: ${field} must be a non-empty array`);
    return;
  }

  record[field].forEach((item, index) => {
    if (!isNonEmptyString(item)) {
      errors.push(`${label}: ${field}[${index}] must be a non-empty string`);
    }
  });
}

export function validateProviderRecords(records) {
  const errors = [];
  const ids = new Set();

  records.forEach((record, index) => {
    const label = isNonEmptyString(record?.id) ? record.id : `record ${index + 1}`;

    for (const field of REQUIRED_STRING_FIELDS) {
      if (!isNonEmptyString(record?.[field])) {
        errors.push(`${label}: missing ${field}`);
      }
    }

    for (const field of REQUIRED_ARRAY_FIELDS) {
      validateStringArray(record, label, field, errors);
    }

    if (isNonEmptyString(record?.id)) {
      if (ids.has(record.id)) {
        errors.push(`duplicate id: ${record.id}`);
      }
      ids.add(record.id);
    }

    if (isNonEmptyString(record?.country) && record.country !== "JP") {
      errors.push(`${label}: country must be JP`);
    }

    if (isNonEmptyString(record?.integration_type) && !INTEGRATION_TYPES.has(record.integration_type)) {
      errors.push(`${label}: bad integration_type ${record.integration_type}`);
    }

    if (isNonEmptyString(record?.risk_level) && !RISK_LEVELS.has(record.risk_level)) {
      errors.push(`${label}: bad risk_level ${record.risk_level}`);
    }

    if (isNonEmptyString(record?.last_checked) && !DATE_PATTERN.test(record.last_checked)) {
      errors.push(`${label}: last_checked must use YYYY-MM-DD`);
    }

    if (Array.isArray(record?.official_urls)) {
      record.official_urls.forEach((url, urlIndex) => {
        if (isNonEmptyString(url) && !/^https:\/\//.test(url)) {
          errors.push(`${label}: official_urls[${urlIndex}] must be an https URL`);
        }
      });
    }
  });

  return errors;
}

export function summarizeProviderRecords(records) {
  return records.reduce(
    (summary, record) => {
      summary.total += 1;
      summary.byIntegrationType[record.integration_type] = (summary.byIntegrationType[record.integration_type] ?? 0) + 1;
      summary.byRiskLevel[record.risk_level] = (summary.byRiskLevel[record.risk_level] ?? 0) + 1;
      return summary;
    },
    { total: 0, byIntegrationType: {}, byRiskLevel: {} }
  );
}

function formatCounts(counts) {
  return Object.entries(counts)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}

function runCli(argv) {
  const catalogPath = argv[2];
  if (!catalogPath) {
    console.error("Usage: node scripts/validate-provider-catalog.mjs <catalog.jsonl>");
    return 1;
  }

  const text = fs.readFileSync(catalogPath, "utf8");
  const records = parseProviderJsonl(text);
  const errors = validateProviderRecords(records);

  if (errors.length > 0) {
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    return 1;
  }

  const summary = summarizeProviderRecords(records);
  console.log(
    `Validated ${summary.total} provider records (${formatCounts(summary.byIntegrationType)}; ${formatCounts(summary.byRiskLevel)})`
  );
  return 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = runCli(process.argv);
}
