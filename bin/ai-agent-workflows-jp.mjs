#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseJsonl,
  summarizeRecords,
  validateRecords
} from "../scripts/validate-dataset.mjs";
import {
  parseProviderJsonl,
  summarizeProviderRecords,
  validateProviderRecords
} from "../scripts/validate-provider-catalog.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const defaultDatasetPath = "datasets/japanese-agent-evaluation-samples.jsonl";
const defaultProviderPath = "data/japan-agent-providers.jsonl";

function formatCounts(counts) {
  return Object.entries(counts)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");
}

function resolveProjectPath(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.join(projectRoot, filePath);
}

function printErrors(errors) {
  for (const error of errors) {
    console.error(`- ${error}`);
  }
}

function validateDataset(filePath = defaultDatasetPath) {
  const text = fs.readFileSync(resolveProjectPath(filePath), "utf8");
  const records = parseJsonl(text);
  const errors = validateRecords(records);

  if (errors.length > 0) {
    printErrors(errors);
    return 1;
  }

  const summary = summarizeRecords(records);
  console.log(
    `Validated ${summary.total} records (low: ${summary.low}, medium: ${summary.medium}, high: ${summary.high})`
  );
  return 0;
}

function validateProviders(filePath = defaultProviderPath) {
  const text = fs.readFileSync(resolveProjectPath(filePath), "utf8");
  const records = parseProviderJsonl(text);
  const errors = validateProviderRecords(records);

  if (errors.length > 0) {
    printErrors(errors);
    return 1;
  }

  const summary = summarizeProviderRecords(records);
  console.log(
    `Validated ${summary.total} provider records (${formatCounts(summary.byIntegrationType)}; ${formatCounts(summary.byRiskLevel)})`
  );
  return 0;
}

function printUsage() {
  console.error("Usage: ai-agent-workflows-jp <validate|validate:dataset|validate:providers> [path]");
}

function run(argv) {
  const command = argv[2] ?? "validate";
  const targetPath = argv[3];

  if (command === "validate") {
    const datasetStatus = validateDataset();
    const providerStatus = validateProviders();
    return datasetStatus === 0 && providerStatus === 0 ? 0 : 1;
  }

  if (command === "validate:dataset") {
    return validateDataset(targetPath);
  }

  if (command === "validate:providers") {
    return validateProviders(targetPath);
  }

  printUsage();
  return 1;
}

process.exitCode = run(process.argv);
