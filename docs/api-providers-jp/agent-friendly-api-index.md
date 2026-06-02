# AIエージェントと相性が良い日本企業API一覧

最終確認日: 2026-06-02

MCPではなくても、公式APIがあるサービスはAIエージェント業務テンプレに向いています。ポイントは、AIに直接「実行」させるのではなく、読み取り、下書き、差分提案、実行前確認、監査ログの流れに分けることです。

## 使い分け

- `読み取り中心`: 検索、棚卸し、要約、レポートに向く。
- `下書き中心`: コメント、記事、返信、議事録、社内文書に向く。
- `承認付き実行`: 登録、更新、送信、公開、削除、予約、請求に向く。

## API候補

| API | 会社 | 業務テンプレ例 | 推奨モード | 公式情報 |
| --- | --- | --- | --- | --- |
| ラッコキーワード API / MCP | ラッコ株式会社 | SEOキーワード調査、検索意図分類、記事構成案 | 読み取り + 下書き | [MCPリリース](https://prtimes.jp/main/html/rd/p/000000066.000040858.html), [API接続案内](https://rakkokeyword.com/knowledge/10006/) |
| freee API | フリー株式会社 | 月次締め、請求書下書き、取引レビュー | 承認付き実行 | [freee Developers](https://developer.freee.co.jp/) |
| マネーフォワード クラウド API | 株式会社マネーフォワード | 仕訳確認、台帳検索、試算表レポート | 承認付き実行 | [開発者サイト](https://developers.biz.moneyforward.com/) |
| kintone REST API | サイボウズ株式会社 | 案件更新案、顧客DB検索、承認フロー整理 | 承認付き実行 | [kintone REST API](https://cybozu.dev/ja/kintone/docs/rest-api/) |
| Garoon REST API / JavaScript API | サイボウズ株式会社 | 空き時間確認、会議前ブリーフ、ポータル下書き | 下書き + 承認付き実行 | [Garoon API](https://cybozu.dev/ja/garoon/) |
| SmartHR API | 株式会社SmartHR | 入社手続きチェック、従業員情報同期、労務棚卸し | 承認付き実行 | [SmartHR for developers](https://developer.smarthr.jp/) |
| Chatwork API | 株式会社kubell | 問い合わせ一次分類、社内通知、タスク作成 | 下書き + 承認付き実行 | [Chatwork API](https://developer.chatwork.com/) |
| Mackerel API | 株式会社はてな | 障害一次切り分け、監視棚卸し、週次レポート | 読み取り中心 | [Mackerel API](https://mackerel.io/ja/api-docs/) |
| esa API v1 | 合同会社esa | 議事録、リリースノート、ナレッジ更新 | 下書き中心 | [esa API](https://docs.esa.io/posts/102) |
| Backlog API | 株式会社ヌーラボ | 課題整理、コメント下書き、Wiki更新 | 下書き + 承認付き実行 | [Backlog API](https://developer.nulab.com/ja/docs/backlog/) |
| LINE Messaging API | LINEヤフー株式会社 | 顧客対応、予約通知、公式アカウントbot | 承認付き実行 | [LINE Messaging API](https://developers.line.biz/ja/services/messaging-api/) |
| BASE API | BASE株式会社 | 受注確認、商品情報同期、EC問い合わせ | 承認付き実行 | [BASE API](https://docs.thebase.in/api/) |
| Qiita API v2 | Qiita株式会社 | 技術記事検索、Qiita Team文書、DevRel下書き | 読み取り + 下書き | [Qiita API v2](https://qiita.com/api/v2/docs) |
| AgentClick MCP API | AgentClick | 案件検索、提携候補整理、リンク生成、成果レポート | 下書き + 承認付き実行 | [AgentClick](https://agentclick.ai/) |

## OSSに入れると便利な派生物

- `provider`ごとの最小権限チェックリスト。
- 「読み取りだけ」「下書きまで」「実行まで」の3段階プロンプト。
- OpenAPIやAPIドキュメントをAIに読ませる前の確認テンプレ。
- 外部送信前のレビュー用テンプレ。
- 失敗時のロールバック確認テンプレ。

## APIをMCP化する場合の注意

- MCP化しても、元APIの権限・課金・レート制限・利用規約は変わらない。
- エージェントには管理者トークンではなく、用途別の最小権限トークンを渡す。
- 書き込み系ツールは、実行前に差分、対象ID、件数、送信先を表示させる。
- 個人情報、会計、契約、インフラ、外部送信は「自動実行禁止」から始める。
