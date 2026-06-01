# AI Agent Workflows JP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a public-ready Japanese OSS template repository for safe AI agent workflows.

**Architecture:** Documentation and templates are the main artifact. A JSONL dataset plus a small Node validator gives the repository executable quality checks.

**Tech Stack:** Markdown, JSONL, Node.js built-in `node:test`, ESM JavaScript.

---

### Task 1: Project Skeleton

**Files:**
- Create: `README.md`
- Create: `LICENSE`
- Create: `CONTRIBUTING.md`
- Create: `SECURITY.md`
- Create: `CODE_OF_CONDUCT.md`
- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Create: `package.json`
- Create: `.gitignore`

- [x] Add project identity, license, contribution guidance, security policy, agent instructions, and test scripts.

### Task 2: Documentation And Templates

**Files:**
- Create: `docs/beginner/*.md`
- Create: `docs/mcp-providers-jp/*.md`
- Create: `docs/usecases/*.md`
- Create: `templates/**/*.md`

- [x] Add beginner docs, XServer/freee provider notes, use cases, and copy-paste safe prompts.

### Task 3: Dataset And Validator

**Files:**
- Create: `datasets/japanese-agent-evaluation-samples.jsonl`
- Create: `tests/validate-dataset.test.mjs`
- Create: `scripts/validate-dataset.mjs`

- [x] Write failing tests for dataset validation behavior.
- [x] Implement validator.
- [x] Run `npm test`.
- [x] Run `npm run validate:dataset`.

### Task 4: Git Packaging

**Files:**
- Modify: local repository metadata only.

- [x] Initialize git.
- [x] Commit the first release.
- [ ] Publish to a new public GitHub repository when repository creation access is available.

