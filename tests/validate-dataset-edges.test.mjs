import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { parseJsonl, validateRecords, summarizeRecords } from "../scripts/validate-dataset.mjs";

describe("parseJsonl edge cases", () => {
  it("parses multiple valid records", () => {
    const input = [
      '{"id":"a","category":"x","task":"t","expected_behavior":["ok"],"risk_level":"low","source":"project"}',
      '{"id":"b","category":"y","task":"u","expected_behavior":["ok"],"risk_level":"high","source":"project"}'
    ].join("\n");
    const records = parseJsonl(input);
    assert.equal(records.length, 2);
    assert.equal(records[0].id, "a");
    assert.equal(records[1].id, "b");
  });

  it("throws on invalid JSON", () => {
    assert.throws(
      () => parseJsonl("{not valid json}"),
      (error) => {
        assert.match(error.message, /Invalid JSON on non-empty line 1/);
        return true;
      }
    );
  });

  it("throws on invalid JSON at a specific line number", () => {
    const input = '{"id":"a","category":"x","task":"t","expected_behavior":["ok"],"risk_level":"low","source":"project"}\n{bad}';
    assert.throws(
      () => parseJsonl(input),
      (error) => {
        assert.match(error.message, /line 2/);
        return true;
      }
    );
  });

  it("returns an empty array for empty input", () => {
    const records = parseJsonl("");
    assert.deepEqual(records, []);
  });

  it("returns an empty array for whitespace-only input", () => {
    const records = parseJsonl("  \n  \n  ");
    assert.deepEqual(records, []);
  });

  it("handles Windows-style line endings", () => {
    const input = '{"id":"a","category":"x","task":"t","expected_behavior":["ok"],"risk_level":"low","source":"project"}\r\n{"id":"b","category":"y","task":"u","expected_behavior":["ok"],"risk_level":"high","source":"project"}';
    const records = parseJsonl(input);
    assert.equal(records.length, 2);
  });
});

describe("validateRecords edge cases", () => {
  it("reports missing required string fields", () => {
    const errors = validateRecords([
      { expected_behavior: ["ok"] }
    ]);
    assert.ok(errors.some((e) => e.includes("missing id")));
    assert.ok(errors.some((e) => e.includes("missing category")));
    assert.ok(errors.some((e) => e.includes("missing task")));
    assert.ok(errors.some((e) => e.includes("missing risk_level")));
    assert.ok(errors.some((e) => e.includes("missing source")));
  });

  it("uses fallback label when id is missing", () => {
    const errors = validateRecords([
      { category: "x", task: "t", expected_behavior: ["ok"], risk_level: "low", source: "project" }
    ]);
    assert.ok(errors.some((e) => e.startsWith("record 1:")));
  });

  it("reports non-string items in expected_behavior", () => {
    const errors = validateRecords([
      {
        id: "test",
        category: "x",
        task: "t",
        expected_behavior: ["ok", 42, ""],
        risk_level: "low",
        source: "project"
      }
    ]);
    assert.ok(errors.some((e) => e.includes("expected_behavior[1]")));
    assert.ok(errors.some((e) => e.includes("expected_behavior[2]")));
  });

  it("reports empty string fields as missing", () => {
    const errors = validateRecords([
      {
        id: "   ",
        category: "",
        task: "t",
        expected_behavior: ["ok"],
        risk_level: "low",
        source: "project"
      }
    ]);
    assert.ok(errors.some((e) => e.includes("missing id")));
    assert.ok(errors.some((e) => e.includes("missing category")));
  });

  it("accepts all valid risk levels", () => {
    for (const level of ["low", "medium", "high"]) {
      const errors = validateRecords([
        { id: `test-${level}`, category: "x", task: "t", expected_behavior: ["ok"], risk_level: level, source: "project" }
      ]);
      assert.deepEqual(errors, []);
    }
  });

  it("returns no errors for an empty records array", () => {
    const errors = validateRecords([]);
    assert.deepEqual(errors, []);
  });
});

describe("summarizeRecords edge cases", () => {
  it("returns zero counts for an empty array", () => {
    const summary = summarizeRecords([]);
    assert.deepEqual(summary, { total: 0, low: 0, medium: 0, high: 0 });
  });

  it("ignores records with unrecognized risk levels in counts", () => {
    const summary = summarizeRecords([
      { risk_level: "low" },
      { risk_level: "unknown" }
    ]);
    assert.equal(summary.total, 2);
    assert.equal(summary.low, 1);
    assert.equal(summary.medium, 0);
    assert.equal(summary.high, 0);
  });
});
