# OSS Application Strengthening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the repository look less like a static document collection and more like a maintainable OSS tool with CLI usage, CI, richer templates, examples, and application-ready wording.

**Architecture:** Keep the existing JSONL validators as the source of truth, add a small package CLI that runs both validators, and add repository-structure tests that enforce useful public signals. Documentation and templates remain plain Markdown so non-engineers can reuse them directly.

**Tech Stack:** Node.js 20+, `node:test`, Markdown, GitHub Actions.

---

### Task 1: CLI and Package Entry Point

**Files:**
- Create: `bin/ai-agent-workflows-jp.mjs`
- Modify: `package.json`
- Test: `tests/package-cli.test.mjs`

- [ ] Add a failing test that asserts `package.json` exposes a `bin` command and that the CLI can run `validate`.
- [ ] Implement the CLI with `validate`, `validate:dataset`, and `validate:providers` commands.
- [ ] Add package scripts that call the CLI.

### Task 2: Public Repository Structure Signals

**Files:**
- Create: `tests/repository-structure.test.mjs`
- Create: `examples/README.md`
- Create: `examples/*.md`
- Create: `.github/workflows/ci.yml`

- [ ] Add failing tests that require at least 20 Japanese business templates, three example files, and GitHub Actions CI.
- [ ] Add the missing templates and examples.
- [ ] Add CI that runs tests and validation on Node 20.

### Task 3: OSS Application Copy

**Files:**
- Modify: `README.md`

- [ ] Add npm/npx usage examples.
- [ ] Add a concise application narrative explaining maintainer role, project importance, and API-credit use.
- [ ] Update coverage counts from 8 to 20 templates.

### Task 4: Verification and Publication

**Files:**
- All touched files

- [ ] Run `node --test tests/*.test.mjs`.
- [ ] Run the CLI validation command.
- [ ] Commit and push to `main`.
- [ ] Verify the public GitHub repository reflects the new commit.
