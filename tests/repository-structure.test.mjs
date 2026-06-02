import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function listMarkdownFiles(directory) {
  return fs
    .readdirSync(path.join(projectRoot, directory))
    .filter((fileName) => fileName.endsWith(".md"))
    .sort();
}

describe("public repository structure", () => {
  it("contains at least 20 Japanese business workflow templates", () => {
    const templates = listMarkdownFiles("templates/business-ja");

    assert.ok(
      templates.length >= 20,
      `expected at least 20 business templates, found ${templates.length}`
    );
  });

  it("contains runnable example documents for common operator workflows", () => {
    const examples = listMarkdownFiles("examples");
    const requiredExamples = [
      "chatwork-support-triage-example.md",
      "mcp-provider-catalog-validation-example.md",
      "wordpress-maintenance-readonly-example.md"
    ];

    for (const example of requiredExamples) {
      assert.ok(examples.includes(example), `missing examples/${example}`);
    }
  });

  it("runs repository checks in GitHub Actions", () => {
    const workflowPath = path.join(projectRoot, ".github", "workflows", "ci.yml");
    const workflow = fs.readFileSync(workflowPath, "utf8");

    assert.match(workflow, /npm test/);
    assert.match(workflow, /npm run validate/);
  });
});
