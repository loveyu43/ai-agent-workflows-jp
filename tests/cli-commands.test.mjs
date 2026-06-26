import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cliBin = path.join(projectRoot, "bin", "ai-agent-workflows-jp.mjs");

function runCli(args, options = {}) {
  return execFileSync(process.execPath, [cliBin, ...args], {
    cwd: projectRoot,
    encoding: "utf8",
    ...options
  });
}

describe("CLI validate:dataset sub-command", () => {
  it("validates the default dataset file", () => {
    const output = runCli(["validate:dataset"]);
    assert.match(output, /Validated \d+ records/);
  });

  it("validates a dataset file given as an explicit path", () => {
    const output = runCli([
      "validate:dataset",
      "datasets/japanese-agent-evaluation-samples.jsonl"
    ]);
    assert.match(output, /Validated \d+ records/);
  });

  it("validates a dataset file given as an absolute path", () => {
    const absolutePath = path.join(
      projectRoot,
      "datasets",
      "japanese-agent-evaluation-samples.jsonl"
    );
    const output = runCli(["validate:dataset", absolutePath]);
    assert.match(output, /Validated \d+ records/);
  });
});

describe("CLI validate:providers sub-command", () => {
  it("validates the default provider catalog", () => {
    const output = runCli(["validate:providers"]);
    assert.match(output, /Validated \d+ provider records/);
  });

  it("validates a provider catalog given as an explicit path", () => {
    const output = runCli([
      "validate:providers",
      "data/japan-agent-providers.jsonl"
    ]);
    assert.match(output, /Validated \d+ provider records/);
  });
});

describe("CLI validate sub-command", () => {
  it("runs both dataset and provider validation", () => {
    const output = runCli(["validate"]);
    assert.match(output, /Validated \d+ records/);
    assert.match(output, /Validated \d+ provider records/);
  });

  it("defaults to validate when no sub-command is given", () => {
    const output = runCli([]);
    assert.match(output, /Validated \d+ records/);
    assert.match(output, /Validated \d+ provider records/);
  });
});

describe("CLI error handling", () => {
  it("prints usage and exits 1 for an unknown command", () => {
    assert.throws(
      () => runCli(["unknown-command"], { stdio: "pipe" }),
      (error) => {
        assert.match(error.stderr, /Usage:/);
        assert.notEqual(error.status, 0);
        return true;
      }
    );
  });

  it("exits 1 when dataset validation finds errors", () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "cli-test-"));
    const badFile = path.join(tmpDir, "bad.jsonl");
    fs.writeFileSync(badFile, '{"id":"x"}\n');

    try {
      assert.throws(
        () => runCli(["validate:dataset", badFile], { stdio: "pipe" }),
        (error) => {
          assert.notEqual(error.status, 0);
          return true;
        }
      );
    } finally {
      fs.rmSync(tmpDir, { recursive: true });
    }
  });

  it("exits 1 when provider validation finds errors", () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "cli-test-"));
    const badFile = path.join(tmpDir, "bad-providers.jsonl");
    fs.writeFileSync(badFile, '{"id":"x"}\n');

    try {
      assert.throws(
        () => runCli(["validate:providers", badFile], { stdio: "pipe" }),
        (error) => {
          assert.notEqual(error.status, 0);
          return true;
        }
      );
    } finally {
      fs.rmSync(tmpDir, { recursive: true });
    }
  });
});
