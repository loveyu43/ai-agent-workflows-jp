# Contributing

AI Agent Workflows JP welcomes practical templates, provider notes, safety checklists, and evaluation tasks.

## Good Contributions

- 日本語利用者がそのまま使える業務テンプレート
- 公式情報へのリンクがあるMCPプロバイダーメモ
- 本番操作、個人情報、APIキー、請求、DNS、DB削除などのリスクを明記したチェックリスト
- Codex、Claude Code、Cursorなどで比較できる評価タスク

## Contribution Rules

- 公式情報または一次情報を優先してください。
- APIキー、パスワード、個人情報、顧客情報は絶対に含めないでください。
- 自動実行テンプレートには、人間確認が必要な操作を明記してください。
- セキュリティ監査のように断定せず、基本チェックリストとして表現してください。
- 追加したJSONLデータは `npm run validate:dataset` で検証してください。

## Adding A Provider Note

1. Copy `docs/mcp-providers-jp/provider-template.md`.
2. Add the provider file under `docs/mcp-providers-jp/`.
3. Include official URL, last checked date, supported tools, risky operations, and safe prompt examples.
4. Add a related evaluation task to `datasets/japanese-agent-evaluation-samples.jsonl` when useful.

