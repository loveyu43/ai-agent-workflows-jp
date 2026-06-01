# Publishing To GitHub

Target repository name:

```text
bw-bit/ai-agent-workflows-jp
```

## Option A: GitHub CLI

Use this when `gh` is installed and authenticated.

```bash
gh repo create bw-bit/ai-agent-workflows-jp \
  --public \
  --description "Japanese workflow templates, safety checklists, and evaluation samples for AI agents and MCP-enabled business tools." \
  --source . \
  --remote origin \
  --push
```

## Option B: GitHub Web

1. Open https://github.com/new
2. Repository name: `ai-agent-workflows-jp`
3. Visibility: Public
4. Do not initialize with README, license, or gitignore
5. Create repository
6. Run:

```bash
git remote add origin https://github.com/bw-bit/ai-agent-workflows-jp.git
git push -u origin main
```

## Application Link

After publishing, use:

```text
https://github.com/bw-bit/ai-agent-workflows-jp
```

## Before Applying

- Confirm the repository is public.
- Confirm README renders clearly.
- Create a `v0.1.0` release or tag.
- Add 1-3 GitHub Issues that show the maintenance roadmap.
- Keep future commits active and scoped.

