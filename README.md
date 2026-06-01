# AI Agent Workflows JP

日本語圏の個人事業主、中小企業、非エンジニアの担当者が、Codex、Claude Code、MCP対応サービスを安全に業務へ取り入れるためのテンプレート集です。

This project collects Japanese-first workflow templates, safety checklists, provider notes, and evaluation samples for AI coding agents and MCP-enabled business tools.

## Why This Exists

AIエージェントは、サーバー操作、WordPress保守、会計、請求、SNS運用、問い合わせ対応などの業務を補助できるようになっています。一方で、APIキー、DNS、SSL、データベース、請求書、個人情報などを扱う場面では、非エンジニアにも分かる安全な指示書が必要です。

このリポジトリは、ニュースのまとめではなく、以下を再利用できる形で整備します。

- AIに渡す日本語プロンプトテンプレート
- MCP対応サービスの導入判断メモ
- 本番作業前の安全チェックリスト
- 研修や導入支援で使える説明資料
- Codex、Claude Code、Cursorなどの比較評価に使える日本語タスクデータ

## Current Coverage

- XServer MCP Server / XServer CLI
- freee-mcp
- MCP初心者向け解説
- Codex、Claude Code、Cursor、Claude Desktopの使い分け
- WordPress保守、バックオフィス、SNS運用の安全テンプレート
- 日本語AIエージェント評価データ 10件

## Repository Map

```text
docs/
  beginner/                  初心者向け解説
  mcp-providers-jp/           日本企業・日本語利用者向けMCP情報
  usecases/                   業務ユースケース
  oss-programs/               OSS申請向けの整理
templates/
  codex/                      Codex向け作業指示テンプレート
  claude-code/                Claude Code向け作業指示テンプレート
  security/                   安全確認チェックリスト
datasets/
  japanese-agent-evaluation-samples.jsonl
scripts/
  validate-dataset.mjs
tests/
  validate-dataset.test.mjs
```

## Quick Start

```bash
npm test
npm run validate:dataset
```

If `npm` is not available but Node.js is installed:

```bash
node --test tests/*.test.mjs
node scripts/validate-dataset.mjs datasets/japanese-agent-evaluation-samples.jsonl
```

## For Maintainers Applying To OSS Programs

This project is designed to be a real public OSS artifact, not a placeholder repository. It contains reusable docs, templates, a dataset, validation scripts, tests, contribution guidance, and a maintenance roadmap.

Current public program notes are summarized in [docs/oss-programs/codex-and-claude-oss-notes.md](docs/oss-programs/codex-and-claude-oss-notes.md).

Important: no repository can guarantee approval. OpenAI says it reviews active OSS projects for usage, ecosystem importance, and maintenance evidence. Anthropic's Claude for Open Source page currently names a much higher bar for maintainers, including 5,000 GitHub stars or 1M monthly npm downloads, while also allowing applicants to explain ecosystem importance.

## License

MIT. See [LICENSE](LICENSE).

