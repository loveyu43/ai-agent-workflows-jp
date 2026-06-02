# Chatwork Support Triage Example

## Scenario

A small business receives customer and internal support messages in Chatwork. The operator wants Codex or Claude Code to classify messages and draft replies without sending anything automatically.

## Input

```text
対象期間: 2026-06-01 09:00-18:00
対象ルーム: カスタマーサポート
分類: 緊急、不具合、請求、契約、一般質問
送信権限: なし。返信は下書きのみ。
```

## Agent Instruction

```text
Chatwork APIは読み取り専用で使ってください。
対象期間の投稿を分類し、返信が必要なものだけを一覧にしてください。
返信案は作成してよいですが、Chatworkへの投稿、タスク作成、担当者変更は実行しないでください。

出力:
- 緊急度
- 問い合わせ分類
- 要約
- 返信下書き
- 人間が承認すべき操作
```

## Expected Output Shape

```text
緊急:
- [未送信] #1234 決済エラーの問い合わせ
  - 理由: 支払いに関係し、顧客影響がある
  - 返信下書き: ...
  - 承認が必要な操作: 顧客への返信送信

一般質問:
- [未送信] #1235 営業時間の確認
  - 返信下書き: ...
```

## Human Approval Boundary

- Chatwork投稿: approval required
- 顧客への返信: approval required
- 読み取りと分類: allowed

