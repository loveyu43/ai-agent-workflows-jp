import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  parseProviderJsonl,
  summarizeProviderRecords,
  validateProviderRecords
} from "../scripts/validate-provider-catalog.mjs";

describe("parseProviderJsonl", () => {
  it("parses non-empty JSONL provider records and ignores blank lines", () => {
    const records = parseProviderJsonl(
      '{"id":"sample","company":"会社","service":"サービス","country":"JP","integration_type":"api","agent_fit":["docs"],"risk_level":"low","human_approval_required":["publish"],"official_urls":["https://example.com"],"last_checked":"2026-06-02"}\n\n'
    );
    assert.equal(records.length, 1);
    assert.equal(records[0].id, "sample");
  });
});

describe("validateProviderRecords", () => {
  it("accepts valid Japanese provider records", () => {
    const errors = validateProviderRecords([
      {
        id: "rakko-keyword",
        company: "ラッコ株式会社",
        service: "ラッコキーワード",
        country: "JP",
        integration_type: "mcp_api",
        agent_fit: ["seo_research"],
        risk_level: "medium",
        human_approval_required: ["public post"],
        official_urls: ["https://related-keywords.com/"],
        last_checked: "2026-06-02"
      }
    ]);
    assert.deepEqual(errors, []);
  });

  it("reports duplicate IDs", () => {
    const base = {
      id: "dup",
      company: "会社",
      service: "サービス",
      country: "JP",
      integration_type: "api",
      agent_fit: ["docs"],
      risk_level: "low",
      human_approval_required: ["publish"],
      official_urls: ["https://example.com"],
      last_checked: "2026-06-02"
    };
    const errors = validateProviderRecords([base, { ...base }]);
    assert.ok(errors.some((error) => error.includes("duplicate id: dup")));
  });

  it("reports invalid integration types, risk levels, and dates", () => {
    const errors = validateProviderRecords([
      {
        id: "bad",
        company: "会社",
        service: "サービス",
        country: "US",
        integration_type: "plugin",
        agent_fit: ["docs"],
        risk_level: "critical",
        human_approval_required: ["publish"],
        official_urls: ["http://example.com"],
        last_checked: "2026/06/02"
      }
    ]);
    assert.ok(errors.some((error) => error.includes("country must be JP")));
    assert.ok(errors.some((error) => error.includes("bad integration_type")));
    assert.ok(errors.some((error) => error.includes("bad risk_level")));
    assert.ok(errors.some((error) => error.includes("last_checked")));
    assert.ok(errors.some((error) => error.includes("official_urls[0]")));
  });

  it("reports missing approval lists and URL lists", () => {
    const errors = validateProviderRecords([
      {
        id: "missing-arrays",
        company: "会社",
        service: "サービス",
        country: "JP",
        integration_type: "api",
        agent_fit: [],
        risk_level: "low",
        human_approval_required: [],
        official_urls: [],
        last_checked: "2026-06-02"
      }
    ]);
    assert.ok(errors.some((error) => error.includes("agent_fit must be a non-empty array")));
    assert.ok(errors.some((error) => error.includes("human_approval_required must be a non-empty array")));
    assert.ok(errors.some((error) => error.includes("official_urls must be a non-empty array")));
  });
});

describe("summarizeProviderRecords", () => {
  it("counts providers by integration type and risk level", () => {
    const summary = summarizeProviderRecords([
      { integration_type: "api", risk_level: "low" },
      { integration_type: "mcp", risk_level: "high" },
      { integration_type: "mcp", risk_level: "high" }
    ]);
    assert.deepEqual(summary, {
      total: 3,
      byIntegrationType: { api: 1, mcp: 2 },
      byRiskLevel: { low: 1, high: 2 }
    });
  });
});
