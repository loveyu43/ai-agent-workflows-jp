# MCP Provider Catalog Validation Example

## Scenario

A maintainer adds a new Japanese MCP/API provider to `data/japan-agent-providers.jsonl` and wants to check the record before opening a pull request.

## Command

```bash
npx ai-agent-workflows-jp validate:providers data/japan-agent-providers.jsonl
```

Local checkout alternative:

```bash
node bin/ai-agent-workflows-jp.mjs validate:providers data/japan-agent-providers.jsonl
```

## Expected Successful Output

```text
Validated 23 provider records (ai_agent_platform: 1, api: 12, local_mcp: 2, mcp: 4, mcp_api: 2, remote_mcp: 2; high: 14, medium: 9)
```

## Required Record Shape

```json
{
  "id": "provider-id",
  "company": "Example株式会社",
  "service": "Example API",
  "country": "JP",
  "integration_type": "api",
  "agent_fit": ["support_triage"],
  "risk_level": "medium",
  "human_approval_required": ["external_send"],
  "official_urls": ["https://example.com/developer"],
  "last_checked": "2026-06-02"
}
```

## Human Approval Boundary

- Catalog edits: review required before merge
- Provider API calls: follow provider-specific approval rules
- Official URL freshness: maintainer must verify before release

