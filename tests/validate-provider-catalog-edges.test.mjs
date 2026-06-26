import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  parseProviderJsonl,
  validateProviderRecords,
  summarizeProviderRecords
} from "../scripts/validate-provider-catalog.mjs";

function validProvider(overrides = {}) {
  return {
    id: "test-provider",
    company: "テスト会社",
    service: "テストサービス",
    country: "JP",
    integration_type: "api",
    agent_fit: ["docs"],
    risk_level: "low",
    human_approval_required: ["publish"],
    official_urls: ["https://example.com"],
    last_checked: "2026-06-02",
    ...overrides
  };
}

describe("parseProviderJsonl edge cases", () => {
  it("parses multiple valid records", () => {
    const lines = [
      JSON.stringify(validProvider({ id: "a" })),
      JSON.stringify(validProvider({ id: "b" }))
    ].join("\n");
    const records = parseProviderJsonl(lines);
    assert.equal(records.length, 2);
    assert.equal(records[0].id, "a");
    assert.equal(records[1].id, "b");
  });

  it("throws on invalid JSON", () => {
    assert.throws(
      () => parseProviderJsonl("{not valid}"),
      (error) => {
        assert.match(error.message, /Invalid JSON on non-empty line 1/);
        return true;
      }
    );
  });

  it("throws on invalid JSON at a specific line", () => {
    const input = JSON.stringify(validProvider()) + "\n{bad}";
    assert.throws(
      () => parseProviderJsonl(input),
      (error) => {
        assert.match(error.message, /line 2/);
        return true;
      }
    );
  });

  it("returns an empty array for empty input", () => {
    assert.deepEqual(parseProviderJsonl(""), []);
  });

  it("returns an empty array for whitespace-only input", () => {
    assert.deepEqual(parseProviderJsonl("  \n  \n  "), []);
  });

  it("handles Windows-style line endings", () => {
    const input = [
      JSON.stringify(validProvider({ id: "a" })),
      JSON.stringify(validProvider({ id: "b" }))
    ].join("\r\n");
    const records = parseProviderJsonl(input);
    assert.equal(records.length, 2);
  });
});

describe("validateProviderRecords edge cases", () => {
  it("reports all missing required string fields", () => {
    const errors = validateProviderRecords([
      { agent_fit: ["docs"], human_approval_required: ["publish"], official_urls: ["https://example.com"] }
    ]);
    assert.ok(errors.some((e) => e.includes("missing id")));
    assert.ok(errors.some((e) => e.includes("missing company")));
    assert.ok(errors.some((e) => e.includes("missing service")));
    assert.ok(errors.some((e) => e.includes("missing country")));
    assert.ok(errors.some((e) => e.includes("missing integration_type")));
    assert.ok(errors.some((e) => e.includes("missing risk_level")));
    assert.ok(errors.some((e) => e.includes("missing last_checked")));
  });

  it("uses fallback label when id is missing", () => {
    const errors = validateProviderRecords([
      { company: "会社", service: "サービス", country: "JP", integration_type: "api", agent_fit: ["docs"], risk_level: "low", human_approval_required: ["publish"], official_urls: ["https://example.com"], last_checked: "2026-06-02" }
    ]);
    assert.ok(errors.some((e) => e.startsWith("record 1:")));
  });

  it("reports non-string items in agent_fit", () => {
    const errors = validateProviderRecords([
      validProvider({ agent_fit: ["ok", 42, ""] })
    ]);
    assert.ok(errors.some((e) => e.includes("agent_fit[1]")));
    assert.ok(errors.some((e) => e.includes("agent_fit[2]")));
  });

  it("reports non-string items in human_approval_required", () => {
    const errors = validateProviderRecords([
      validProvider({ human_approval_required: [null] })
    ]);
    assert.ok(errors.some((e) => e.includes("human_approval_required[0]")));
  });

  it("reports non-string items in official_urls", () => {
    const errors = validateProviderRecords([
      validProvider({ official_urls: [123] })
    ]);
    assert.ok(errors.some((e) => e.includes("official_urls[0]")));
  });

  it("reports empty string fields as missing", () => {
    const errors = validateProviderRecords([
      validProvider({ id: "   ", company: "" })
    ]);
    assert.ok(errors.some((e) => e.includes("missing id")));
    assert.ok(errors.some((e) => e.includes("missing company")));
  });

  it("accepts all valid integration types", () => {
    const validTypes = ["mcp", "remote_mcp", "local_mcp", "mcp_api", "api", "ai_agent_platform"];
    for (const type of validTypes) {
      const errors = validateProviderRecords([
        validProvider({ id: `test-${type}`, integration_type: type })
      ]);
      assert.deepEqual(errors, [], `integration_type '${type}' should be valid`);
    }
  });

  it("accepts all valid risk levels", () => {
    for (const level of ["low", "medium", "high"]) {
      const errors = validateProviderRecords([
        validProvider({ id: `test-${level}`, risk_level: level })
      ]);
      assert.deepEqual(errors, [], `risk_level '${level}' should be valid`);
    }
  });

  it("accepts valid YYYY-MM-DD date formats", () => {
    const errors = validateProviderRecords([
      validProvider({ last_checked: "2025-01-15" })
    ]);
    assert.deepEqual(errors, []);
  });

  it("rejects non-YYYY-MM-DD date formats", () => {
    const badDates = ["2026/06/02", "06-02-2026", "2026-6-2", "not-a-date"];
    for (const date of badDates) {
      const errors = validateProviderRecords([
        validProvider({ id: `test-${date}`, last_checked: date })
      ]);
      assert.ok(
        errors.some((e) => e.includes("last_checked")),
        `date '${date}' should be rejected`
      );
    }
  });

  it("rejects http URLs in official_urls", () => {
    const errors = validateProviderRecords([
      validProvider({ official_urls: ["http://example.com"] })
    ]);
    assert.ok(errors.some((e) => e.includes("official_urls[0]") && e.includes("https")));
  });

  it("accepts https URLs in official_urls", () => {
    const errors = validateProviderRecords([
      validProvider({ official_urls: ["https://example.com"] })
    ]);
    assert.deepEqual(errors, []);
  });

  it("returns no errors for an empty records array", () => {
    assert.deepEqual(validateProviderRecords([]), []);
  });
});

describe("summarizeProviderRecords edge cases", () => {
  it("returns zero counts for an empty array", () => {
    const summary = summarizeProviderRecords([]);
    assert.deepEqual(summary, { total: 0, byIntegrationType: {}, byRiskLevel: {} });
  });

  it("counts multiple integration types correctly", () => {
    const summary = summarizeProviderRecords([
      { integration_type: "mcp", risk_level: "low" },
      { integration_type: "api", risk_level: "low" },
      { integration_type: "mcp", risk_level: "high" },
      { integration_type: "remote_mcp", risk_level: "medium" }
    ]);
    assert.equal(summary.total, 4);
    assert.equal(summary.byIntegrationType.mcp, 2);
    assert.equal(summary.byIntegrationType.api, 1);
    assert.equal(summary.byIntegrationType.remote_mcp, 1);
    assert.equal(summary.byRiskLevel.low, 2);
    assert.equal(summary.byRiskLevel.high, 1);
    assert.equal(summary.byRiskLevel.medium, 1);
  });
});
