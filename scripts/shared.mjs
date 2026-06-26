/**
 * Shared utilities for JSONL validation scripts.
 */

import fs from "node:fs";

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

export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

export function validateStringArray(record, label, field, errors) {
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

export function validateRequiredStrings(record, label, fields, errors) {
  for (const field of fields) {
    if (!isNonEmptyString(record?.[field])) {
      errors.push(`${label}: missing ${field}`);
    }
  }
}

export function collectDuplicateIdErrors(record, label, ids, errors) {
  if (isNonEmptyString(record?.id)) {
    if (ids.has(record.id)) {
      errors.push(`duplicate id: ${record.id}`);
    }
    ids.add(record.id);
  }
}

export function validateRiskLevel(record, label, errors) {
  if (isNonEmptyString(record?.risk_level) && !RISK_LEVELS.has(record.risk_level)) {
    errors.push(`${label}: bad risk_level ${record.risk_level}`);
  }
}

export function recordLabel(record, index) {
  return isNonEmptyString(record?.id) ? record.id : `record ${index + 1}`;
}

export function formatCounts(counts) {
  return Object.entries(counts)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}

export function printErrors(errors) {
  for (const error of errors) {
    console.error(`- ${error}`);
  }
}

export function runValidationCli(argv, usageMessage, parseFn, validateFn, summarizeFn, formatSummaryFn) {
  const filePath = argv[2];
  if (!filePath) {
    console.error(usageMessage);
    return 1;
  }

  const text = fs.readFileSync(filePath, "utf8");
  const records = parseFn(text);
  const errors = validateFn(records);

  if (errors.length > 0) {
    printErrors(errors);
    return 1;
  }

  const summary = summarizeFn(records);
  console.log(formatSummaryFn(summary));
  return 0;
}
