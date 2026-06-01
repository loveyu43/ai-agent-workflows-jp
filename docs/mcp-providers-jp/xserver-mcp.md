# XServer MCP Server / XServer CLI

Last checked: 2026-06-02 JST

Official URL: https://www.xserver.co.jp/news/news-article.php?id=139

## これは何か

XServer MCP Serverは、AIアシスタントからエックスサーバーやXServerビジネスのサーバー操作を行うためのMCP対応インターフェースです。XServer CLIはターミナルやスクリプトから操作するための公式CLIです。

公式発表では、2026-05-12に提供開始され、XServer APIを基盤にした操作手段として紹介されています。

## できること

- サーバー情報の取得
- ドメイン、サブドメイン、DNS、SSLの設定
- メールアカウント設定
- WordPress簡単インストール、設定変更、アンインストール
- MySQL、FTP、SSH鍵、Cron、PHPバージョン設定
- アクセスログ、エラーログ取得

## 向いている人

- WordPressを複数運用する個人や中小企業
- サーバーパネル操作をAIに補助させたい人
- Codex CLIやClaude CodeとCLI操作を組み合わせたい人
- 制作会社や保守担当者

## 危険度が高い操作

- ドメイン削除
- DNS変更
- SSL設定変更
- WordPressアンインストール
- MySQL削除
- メールアカウント削除
- SSH鍵やCronの変更

## 安全な使い方

最初は確認だけに限定します。変更や削除は、対象ドメイン、現在値、変更後の値、影響範囲、戻し方をAIに説明させ、人間が承認してから実行します。

## Codex / Claude Codeに渡す指示例

```text
あなたはXServerのWordPress保守補助者です。
まず状態確認だけを行ってください。

実行してよいこと:
1. サーバー情報の取得
2. 対象ドメインのSSL状態確認
3. WordPressインストール状況の確認
4. PHPバージョンの確認
5. エラーログの有無の確認

実行してはいけないこと:
- ドメイン、DNS、SSL、WordPress、MySQL、メール、SSH鍵、Cronの変更
- 削除、上書き、アンインストール
- APIキーや認証情報の出力

問題が見つかった場合は、実行せずに改善案だけ出してください。
```

