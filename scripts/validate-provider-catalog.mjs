import { pathToFileURL } from "node:url";
import {
  parseJsonl,
  isNonEmptyString,
  validateStringArray,
  validateRequiredStrings,
  collectDuplicateIdErrors,
  validateRiskLevel,
  recordLabel,
  formatCounts,
  runValidationCli
} from "./shared.mjs";

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
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export { parseJsonl as parseProviderJsonl };

export function validateProviderRecords(records) {
  const errors = [];
  const ids = new Set();

  records.forEach((record, index) => {
    const label = recordLabel(record, index);

    validateRequiredStrings(record, label, REQUIRED_STRING_FIELDS, errors);

    for (const field of REQUIRED_ARRAY_FIELDS) {
      validateStringArray(record, label, field, errors);
    }

    collectDuplicateIdErrors(record, label, ids, errors);

    if (isNonEmptyString(record?.country) && record.country !== "JP") {
      errors.push(`${label}: country must be JP`);
    }

    if (isNonEmptyString(record?.integration_type) && !INTEGRATION_TYPES.has(record.integration_type)) {
      errors.push(`${label}: bad integration_type ${record.integration_type}`);
    }

    validateRiskLevel(record, label, errors);

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

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exitCode = runValidationCli(
    process.argv,
    "Usage: node scripts/validate-provider-catalog.mjs <catalog.jsonl>",
    parseJsonl,
    validateProviderRecords,
    summarizeProviderRecords,
    (summary) =>
      `Validated ${summary.total} provider records (${formatCounts(summary.byIntegrationType)}; ${formatCounts(summary.byRiskLevel)})`
  );
}
