# Codex And Claude OSS Program Notes

Last checked: 2026-06-03 JST

## OpenAI Codex For Open Source

Official page: https://openai.com/form/codex-for-oss/

The current OpenAI form asks for a public GitHub username, public GitHub repository URL, maintainer role, why the repository qualifies, and how API credits would be used.

The page says maintainers of active open-source projects can apply and that reviewers look for usage, ecosystem importance, and evidence of active maintenance such as pull request review, issue triage, release management, and similar responsibilities.

## Anthropic Claude For Open Source

Official page: https://claude.com/contact-sales/claude-for-oss

The current Anthropic page says maintainers should be primary maintainers or core team members of a public repo with 5,000+ GitHub stars or 1M+ monthly npm downloads, with commits, releases, or PR reviews in the last 3 months. It also says applicants who do not fit the criteria can still apply if the ecosystem quietly depends on the project.

## Honest Positioning For This Repository

This repository should not claim automatic eligibility. It should claim:

- It is a real OSS project with reusable artifacts.
- It targets Japanese AI agent adoption and safety, which is under-served.
- It has maintainable structure, a package CLI, GitHub Actions CI, tests, contribution rules, examples, and a public roadmap.
- It has a public v0.1.0 release and issue-driven maintenance plan.
- It needs public usage, issues, external contributions, and releases to become stronger for strict programs.

## Current Evidence To Cite

- Public repository: https://github.com/loveyu43/ai-agent-workflows-jp
- Release: https://github.com/loveyu43/ai-agent-workflows-jp/releases/tag/v0.1.0
- Business templates: 23 Japanese workflow templates under `templates/business-ja/`
- Provider catalog: 50 Japanese MCP/API provider records under `data/japan-agent-providers.jsonl`
- Evaluation dataset: 30 Japanese AI-agent task records under `datasets/japanese-agent-evaluation-samples.jsonl`
- Validation: `npm test` and `npm run validate`
- CI: `.github/workflows/ci.yml`
- Examples: `examples/`

## Suggested 500-Character OpenAI Answer

Primary maintainer of AI Agent Workflows JP, a Japanese OSS template and validation project for safe AI-agent business workflows. It helps non-engineers and small businesses use Codex, Claude Code, MCP tools, and Japanese APIs with human approval checkpoints. The repo includes 23 templates, 50 provider records, 30 evaluation records, examples, safety docs, CLI validation, CI, release, and roadmap issues.

## Suggested API Credits Answer

Use API credits to maintain and test Japanese AI-agent workflow templates: review provider changes, generate and check draft templates, validate unsafe-action wording, compare agent behavior on JSONL evaluation tasks, triage issues, test Codex/Claude Code examples, and draft release notes while preserving human review for high-risk workflows.
