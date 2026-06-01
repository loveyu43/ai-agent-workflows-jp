# AI Agent Workflows JP Design

## Goal

Create a public-ready OSS project that helps Japanese-speaking non-engineers and small teams use Codex, Claude Code, MCP services, and AI agents through safe reusable workflow templates.

## Scope

The first release focuses on documentation, prompt templates, safety checklists, and a small JSONL evaluation dataset. It does not attempt to build an MCP server or automate production systems directly.

## Architecture

- `docs/` contains explainers, provider notes, OSS application notes, and use cases.
- `templates/` contains copy-paste ready task instructions for Codex, Claude Code, and security review.
- `datasets/` contains Japanese agent evaluation samples.
- `scripts/validate-dataset.mjs` validates dataset shape, duplicate IDs, risk levels, and required fields.
- `tests/` covers validator behavior with Node's built-in test runner.

## Safety Model

Templates separate read-only checks from operations that change production state. High-risk actions such as DNS changes, database deletion, invoice issuance, customer data access, and server settings changes must require human approval.

## OSS Program Fit

The project is structured to show real maintenance responsibility: clear scope, license, contribution rules, security policy, testable dataset quality, and a roadmap. It cannot guarantee acceptance into any program; the repository still needs public usage, issues, releases, and external adoption signals over time.

