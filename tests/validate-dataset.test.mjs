import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseJsonl, validateRecords, summarizeRecords } from "../scripts/validate-dataset.mjs";

describe("parseJsonl", () => {
  it("parses non-empty JSONL records and ignores blank lines", () => {
    const records = parseJsonl('{"id":"a","category":"x","task":"t","expected_behavior":["ok"],"risk_level":"low","source":"project"}\n\n');
    assert.equal(records.length, 1);
    assert.equal(records[0].id, "a");
  });
});

describe("validateRecords", () => {
  it("accepts records with required fields, expected behavior array, risk level, and source", () => {
    const errors = validateRecords([
      {
        id: "sample_001",
        category: "server_ops",
        task: "確認だけを行う手順を作ってください。",
        expected_behavior: ["実行前確認を入れる"],
        risk_level: "medium",
        source: "project"
      }
    ]);
    assert.deepEqual(errors, []);
  });

  it("reports duplicate IDs", () => {
    const errors = validateRecords([
      { id: "dup", category: "x", task: "a", expected_behavior: ["a"], risk_level: "low", source: "project" },
      { id: "dup", category: "x", task: "b", expected_behavior: ["b"], risk_level: "low", source: "project" }
    ]);
    assert.ok(errors.some((error) => error.includes("duplicate id: dup")));
  });

  it("reports invalid risk levels and empty expected behavior", () => {
    const errors = validateRecords([
      { id: "bad", category: "x", task: "a", expected_behavior: [], risk_level: "critical", source: "project" }
    ]);
    assert.ok(errors.some((error) => error.includes("bad risk_level")));
    assert.ok(errors.some((error) => error.includes("expected_behavior")));
  });
});

describe("summarizeRecords", () => {
  it("counts records by risk level", () => {
    const summary = summarizeRecords([
      { risk_level: "low" },
      { risk_level: "medium" },
      { risk_level: "high" },
      { risk_level: "high" }
    ]);
    assert.deepEqual(summary, { total: 4, low: 1, medium: 1, high: 2 });
  });
});

