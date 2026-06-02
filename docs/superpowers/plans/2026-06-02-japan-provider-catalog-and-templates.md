# Japan Provider Catalog And Templates Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a source-backed Japanese MCP/API provider catalog and practical Japanese AI-agent business templates.

**Architecture:** Keep human-readable guidance in `docs/`, machine-readable provider records in `data/`, reusable prompts in `templates/business-ja/`, and validation logic in `scripts/` with `node:test` coverage. Provider records separate official MCP support from API/CLI surfaces that are useful for agent workflows.

**Tech Stack:** Markdown, JSONL, Node.js 20+, `node:test`.

---

### Task 1: Provider Catalog

**Files:**
- Create: `data/japan-agent-providers.jsonl`
- Create: `docs/catalog/japan-ai-agent-workflow-index.md`
- Create: `docs/api-providers-jp/agent-friendly-api-index.md`

- [ ] **Step 1: Add machine-readable provider records**

Create JSONL records with these fields:

```json
{
  "id": "rakko-keyword",
  "company": "ラッコ株式会社",
  "service": "ラッコキーワード",
  "country": "JP",
  "integration_type": "mcp",
  "agent_fit": ["seo_research", "content_planning"],
  "risk_level": "medium",
  "human_approval_required": ["keyword export", "paid API usage", "public post"],
  "official_urls": ["https://related-keywords.com/"],
  "last_checked": "2026-06-02"
}
```

- [ ] **Step 2: Add readable workflow index**

Create a table that separates `official_mcp`, `agent_friendly_api`, and `ai_agent_platform` entries, with workflow examples and approval notes.

- [ ] **Step 3: Add API-only index**

Document API providers that are not necessarily MCP-native but are useful for AI-agent workflows, including Rakko Keyword, SmartHR, Chatwork, Mackerel, esa, Backlog, LINE Developers, BASE, Qiita, and Cybozu APIs.

### Task 2: Templates And Safety

**Files:**
- Create: `templates/business-ja/accounting-monthly-close-agent.md`
- Create: `templates/business-ja/hr-onboarding-agent.md`
- Create: `templates/business-ja/kintone-sales-followup-agent.md`
- Create: `templates/business-ja/rakko-keyword-content-plan-agent.md`
- Create: `templates/business-ja/contract-review-precheck-agent.md`
- Create: `templates/business-ja/chatwork-support-triage-agent.md`
- Create: `templates/business-ja/wordpress-incident-report-agent.md`
- Create: `templates/business-ja/meeting-minutes-to-tasks-agent.md`
- Create: `docs/safety/approval-boundary-matrix.md`

- [ ] **Step 1: Add templates**

Each template must include purpose, permitted actions, required inputs, prompt text, and approval checkpoints.

- [ ] **Step 2: Add approval matrix**

Define read-only, draft, write, external-send, payment/legal/HR, and infrastructure boundaries.

### Task 3: Validation And Docs Wiring

**Files:**
- Create: `scripts/validate-provider-catalog.mjs`
- Create: `tests/validate-provider-catalog.test.mjs`
- Modify: `package.json`
- Modify: `README.md`
- Modify: `CHANGELOG.md`

- [ ] **Step 1: Add validator**

Validate JSONL syntax, required fields, duplicate ids, JP country code, integration type, risk level, non-empty URL arrays, and ISO-like `last_checked`.

- [ ] **Step 2: Add tests**

Cover valid records, duplicate ids, invalid integration types, empty URLs, and missing approval lists.

- [ ] **Step 3: Wire scripts and README**

Add `validate:providers`, update `test` expectations, and add repository map entries for `data/`, `docs/catalog/`, `docs/api-providers-jp/`, and `templates/business-ja/`.

- [ ] **Step 4: Verify**

Run:

```bash
node --test tests/*.test.mjs
node scripts/validate-dataset.mjs datasets/japanese-agent-evaluation-samples.jsonl
node scripts/validate-provider-catalog.mjs data/japan-agent-providers.jsonl
```

Expected output: all tests pass, dataset validates, provider catalog validates.
