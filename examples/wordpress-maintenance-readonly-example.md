# WordPress Maintenance Read-Only Example

## Scenario

An operator wants an AI agent to inspect a WordPress site hosted on XServer and produce a maintenance report without changing production state.

## Input

```text
対象サイト: example.jp
対象作業: WordPress本体、テーマ、プラグイン、SSL、ディスク使用量の確認
許可: 読み取りのみ
禁止: 更新、削除、再起動、DNS変更、DB変更
```

## Agent Instruction

```text
XServer MCP ServerまたはXServer CLIは読み取り専用で使ってください。
WordPress本体、テーマ、プラグイン、SSL、ディスク使用量を確認し、更新や変更は実行しないでください。

出力:
- 現在の状態
- 更新候補
- リスク
- 実行前に人間が承認すべき操作
- 作業手順案
```

## Expected Output Shape

```text
現在の状態:
- WordPress core: 6.x
- SSL: 有効
- ディスク使用量: ...

更新候補:
- plugin-a: 更新あり

承認が必要な操作:
- プラグイン更新
- バックアップ取得後の本番反映
- DNS/SSL設定変更
```

## Human Approval Boundary

- Read-only inspection: allowed
- Plugin/theme/core update: approval required
- DNS/SSL/database operation: approval required
- Customer-facing outage notice: approval required
