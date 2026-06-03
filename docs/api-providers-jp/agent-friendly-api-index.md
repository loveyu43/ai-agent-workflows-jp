# AIエージェントと相性が良い日本企業API一覧

最終確認日: 2026-06-03

MCPではなくても、公式APIがあるサービスはAIエージェント業務テンプレに向いています。ポイントは、AIに直接「実行」させるのではなく、読み取り、下書き、差分提案、実行前確認、監査ログの流れに分けることです。

## 使い分け

- `読み取り中心`: 検索、棚卸し、要約、レポートに向く。
- `下書き中心`: コメント、記事、返信、議事録、社内文書に向く。
- `承認付き実行`: 登録、更新、送信、公開、削除、予約、請求に向く。

## API候補

機械可読カタログは `data/japan-agent-providers.jsonl` に50件あります。このページでは、AIエージェント業務テンプレ化しやすい代表例と追加候補を一覧化します。

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

## 追加API候補

| API | 会社 | 業務テンプレ例 | 推奨モード | 公式情報 |
| --- | --- | --- | --- | --- |
| 弥生 API | 弥生株式会社 | 請求・会計データ棚卸し、月次確認 | 承認付き実行 | [弥生 Developer](https://developer.yayoi-kk.co.jp/) |
| MakeLeaps API | メイクリープス株式会社 | 見積・請求書下書き、取引先確認 | 承認付き実行 | [MakeLeaps Developers](https://developers.makeleaps.jp/) |
| クラウドサイン Web API | 弁護士ドットコム株式会社 | 契約期限確認、署名状況棚卸し | 承認付き実行 | [クラウドサイン Developers](https://developers.cloudsign.jp/) |
| 電子印鑑GMOサイン API | GMOグローバルサイン・ホールディングス株式会社 | 契約送信前チェック、署名状況確認 | 承認付き実行 | [GMOサイン Developers](https://developers.gmosign.com/) |
| PayPay API | PayPay株式会社 | 決済状況確認、返金候補レビュー | 承認付き実行 | [PayPay for Developers](https://developer.paypay.ne.jp/) |
| PAY.JP API | PAY株式会社 | 課金・サブスク確認、決済レポート | 承認付き実行 | [PAY.JP API](https://pay.jp/docs/api/) |
| KOMOJU API | 株式会社DEGICA | 決済方法別レポート、EC決済確認 | 承認付き実行 | [KOMOJU Docs](https://docs.komoju.com/) |
| STORES API | STORES株式会社 | 商品・注文確認、在庫補充候補 | 承認付き実行 | [STORES API](https://api.st.inc/doc/) |
| カラーミーショップ API | GMOペパボ株式会社 | 商品同期、注文確認、問い合わせ下書き | 承認付き実行 | [カラーミーショップ API](https://developer.shop-pro.jp/) |
| Yahoo!ショッピング API | LINEヤフー株式会社 | 商品掲載確認、ストア運用レポート | 承認付き実行 | [Yahoo!ショッピング API](https://developer.yahoo.co.jp/webapi/shopping/) |
| Yahoo!広告 API | LINEヤフー株式会社 | 広告レポート要約、改善案作成 | 承認付き実行 | [Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/) |
| ValueCommerce API | バリューコマース株式会社 | アフィリエイト案件調査、成果レポート | 下書き + 承認付き実行 | [ValueCommerce API](https://www.valuecommerce.ne.jp/api/) |
| さくらのクラウド API | さくらインターネット株式会社 | サーバー棚卸し、費用確認、運用レポート | 読み取り中心 | [さくらのクラウド API](https://manual.sakura.ad.jp/cloud/api/) |
| ConoHa API | GMOインターネットグループ株式会社 | VPS棚卸し、保守チェック | 読み取り中心 | [ConoHa API](https://doc.conoha.jp/api-vps3/) |
| NIFCLOUD API | 富士通クラウドテクノロジーズ株式会社 | クラウド資産棚卸し、設定確認 | 読み取り中心 | [NIFCLOUD API](https://pfs.nifcloud.com/api/) |
| SORACOM API | 株式会社ソラコム | IoT SIM利用量監視、異常候補抽出 | 読み取り中心 | [SORACOM API](https://developers.soracom.io/en/api/) |
| KING OF TIME Web API | 株式会社ヒューマンテクノロジーズ | 勤怠確認、締め前チェック | 承認付き実行 | [KING OF TIME API](https://developer.kingtime.jp/) |
| ジョブカン API | 株式会社DONUTS | 勤怠・労務確認、承認前レビュー | 承認付き実行 | [ジョブカン API](https://ssl.jobcan.jp/docs/api/) |
| HERP API | 株式会社HERP | 採用候補者整理、面接前ブリーフ | 下書き中心 | [HERP Developers](https://developers.herp.cloud/) |
| Mazrica API | 株式会社マツリカ | 商談整理、次アクション案、CRMレビュー | 下書き + 承認付き実行 | [Mazrica API](https://developer.mazrica.com/) |
| KARTE API | 株式会社プレイド | 施策候補、顧客体験分析、セグメント確認 | 下書き + 承認付き実行 | [KARTE Developers](https://developers.karte.io/) |
| スマレジ API | 株式会社スマレジ | POS売上確認、在庫・店舗運用レポート | 承認付き実行 | [スマレジ Developers](https://developers.smaregi.dev/) |
| Zaim API | 株式会社Zaim | 家計・支出レポート、予算レビュー | 読み取り + 下書き | [Zaim Developers](https://dev.zaim.net/) |
| J-Quants API | 株式会社JPX総研 | 上場企業データ調査、非助言リサーチメモ | 読み取り中心 | [J-Quants](https://jpx-jquants.com/) |
| DocBase API | 株式会社クレイ | ナレッジ検索、重複記事整理、社内文書下書き | 読み取り + 下書き | [DocBase API](https://help.docbase.io/posts/45703) |
| ChatPlus API | チャットプラス株式会社 | 問い合わせ一次分類、返信案、FAQ改善 | 下書き + 承認付き実行 | [ChatPlus API](https://chatplus.jp/support/api/) |
| オープンロジ API | 株式会社オープンロジ | 出荷確認、遅延候補抽出、顧客連絡下書き | 承認付き実行 | [オープンロジ API](https://docs.openlogi.com/) |

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
