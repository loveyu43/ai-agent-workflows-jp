# Maintenance

This project is maintained as a Japanese-first OSS knowledge base for safe AI agent workflows.

## Target Public Location

https://github.com/bw-bit/ai-agent-workflows-jp

## Maintainer Duties

- Keep provider notes tied to official sources.
- Review templates for unsafe automation wording.
- Keep dataset records valid with `npm run validate:dataset`.
- Prefer practical workflows over news-only summaries.
- Keep the project in the dedicated `bw-bit/ai-agent-workflows-jp` repository, not as a subdirectory of an unrelated fork.

## Planned Issues

### Expand Provider Notes

Add provider notes for additional Japanese MCP or AI-agent-adjacent services beyond XServer and freee.

Done when:
- At least 3 provider notes are added.
- Each note has official links and a last-checked date.
- High-risk operations require human approval.

### Grow Evaluation Dataset

Expand `datasets/japanese-agent-evaluation-samples.jsonl` from 10 to 30 practical Japanese tasks.

Done when:
- Dataset has 30 unique IDs.
- Each task has expected behavior and risk level.
- `npm run validate:dataset` passes.

### Prepare Dedicated Repository Release

Prepare the project for a dedicated `bw-bit/ai-agent-workflows-jp` repository.

Done when:
- Release checklist exists.
- Repository creation and first push steps are documented.
- v0.1.0 tag/release guidance is clear.
