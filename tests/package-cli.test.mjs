import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, "package.json"), "utf8"));

describe("package CLI", () => {
  it("exposes an installable ai-agent-workflows-jp command", () => {
    assert.equal(packageJson.bin?.["ai-agent-workflows-jp"], "bin/ai-agent-workflows-jp.mjs");
  });

  it("runs all repository validators through the package CLI", () => {
    const output = execFileSync(
      process.execPath,
      ["bin/ai-agent-workflows-jp.mjs", "validate"],
      { cwd: projectRoot, encoding: "utf8" }
    );

    assert.match(output, /Validated 30 records/);
    assert.match(output, /Validated 50 provider records/);
  });
});
