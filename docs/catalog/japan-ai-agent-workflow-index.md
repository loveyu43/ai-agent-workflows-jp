# 日本企業 AIエージェント / MCP ワークフロー索引

最終確認日: 2026-07-04

この索引は、日本企業が提供するMCP、AIエージェント基盤、またはAIエージェントから業務利用しやすいAPIを、業務テンプレートへ落とし込むための入口です。公式ページで確認できた情報を優先し、MCPではないAPIは「APIでエージェント化可能」として分けています。

機械可読カタログは `data/japan-agent-providers.jsonl` に87件あります。

## 分類

- `公式MCP`: 事業者がMCPサーバーまたはMCP接続を公式に提供しているもの。
- `MCP/API`: MCP接続とAPI利用の両方が案内されているもの。
- `APIでエージェント化可能`: 公式APIがあり、Codex、Claude Code、n8n、自作MCPラッパーなどで業務エージェント化しやすいもの。
- `AIエージェント基盤`: MCPやRAGを含むAIエージェント運用基盤として案内されているもの。

## 公式MCP / MCP API

| 会社 | サービス | 分類 | 主なワークフロー | 人間承認が必要な操作 | 公式情報 |
| --- | --- | --- | --- | --- | --- |
| フリー株式会社 | freee-mcp | 公式MCP | 会計、請求、人事労務、工数、販売管理 | 取引登録、請求書送信、人事労務データ更新 | [freeeニュース](https://corp.freee.co.jp/news/20260327freee_mcp.html), [GitHub](https://github.com/freee/freee-mcp) |
| 株式会社マネーフォワード | マネーフォワード クラウド会計 MCPサーバー | 公式MCP | 仕訳入力、台帳検索、残高確認、月次レポート | 仕訳登録、会計データ出力、認証範囲変更 | [開発者サイト](https://developers.biz.moneyforward.com/mcp), [ニュース](https://corp.moneyforward.com/en/news/release/service/20260326-mf-press-1/) |
| エックスサーバー株式会社 | XServer MCP Server / XServer CLI | 公式MCP | WordPress保守、サーバー操作、DNS/SSL確認 | 本番変更、削除、DNS/SSL/DB操作 | [ニュース](https://www.xserver.ne.jp/news_detail.php?view_id=18397), [マニュアル](https://www.xserver.ne.jp/manual/man_tool_mcp.php) |
| サイボウズ株式会社 | kintone MCP Server | 公式MCP | CRM更新、業務アプリ確認、レコード操作、案件管理 | レコード更新、ファイル取得、アプリ設定変更 | [cybozu.dev](https://cybozu.dev/ja/kintone/ai/kintone-mcp-server/), [GitHub](https://github.com/kintone/mcp-server) |
| サイボウズ株式会社 | Garoon MCP Server | 公式MCP | 予定取得、予定登録、空き時間検索、施設確認 | 予定登録・変更、施設予約確定 | [cybozu.dev](https://cybozu.dev/ja/garoon/ai/garoon-mcp-server/), [GitHub](https://github.com/garoon/garoon-mcp-server) |
| Sansan株式会社 | Sansan AIエージェント / Sansan MCPサーバー | 公式MCP | 商談準備、接点検索、営業提案補助 | 名刺・接点情報の外部利用、営業文面送信 | [Sansanニュース](https://jp.corp-sansan.com/news/2025/1121_01.html) |
| Sansan株式会社 | Contract One MCPサーバー | 公式MCP | 契約DB検索、契約レビュー前処理、社内基準ドラフト | 契約条件判断、取引先送付文面、法務完了扱い | [Sansanニュース](https://jp.corp-sansan.com/news/2026/0420.html) |
| ラッコ株式会社 | ラッコキーワード MCP / API | MCP/API | SEO調査、検索意図分類、競合見出し分析、記事構成 | 有料クレジット消費、公開記事確定、広告文確定 | [プレスリリース](https://prtimes.jp/main/html/rd/p/000000066.000040858.html), [Claude Code接続](https://rakkokeyword.com/knowledge/9992/) |
| 株式会社オリノス | Tips MCP | 公式MCP | 有料記事下書き、既存記事リライト、販売履歴分析、購入記事活用 | 有料記事公開、公開停止、価格変更、販売履歴共有 | [Tips MCP案内](https://tips.jp/u/tipsinfo/a/kLTRjyN2), [運営会社](https://tips.jp/company) |
| 株式会社microCMS | microCMS MCP Server | MCP/API | CMS記事下書き、公開前差分確認、多言語化、メディア確認 | 公開、更新、削除、APIキー権限、メディア削除 | [microCMS MCP Server](https://document.microcms.io/mcp-server/microcms-mcp-server) |
| GMOグローバルサイン・ホールディングス株式会社 | 電子印鑑GMOサイン MCPサーバー | 公式MCP | 契約書送信前確認、署名状況確認、承認フロー整理 | 署名依頼送信、契約文書共有、承認フロー変更 | [GMOニュース](https://group.gmo/news/article/10056/) |
| 株式会社SalesNow | SalesNow MCP | MCP/API | 企業調査、営業リスト案、採用・業界シグナル整理 | 企業データの外部共有、架電・メール送信 | [SalesNow MCP](https://salesnow.jp/mcp/) |
| 株式会社ナレッジワーク | ナレッジワーク MCPサーバー | 公式MCP | 営業ナレッジ検索、商談記録活用、CRM/SFA連携準備 | 商談記録共有、CRM/SFA更新、顧客別提案送信 | [ナレッジワーク発表](https://knowledgework.com/news/article/PRBVrcCM) |
| 株式会社オプロ | 帳票DX MCP | 公式MCP | 見積書、請求書、納品書の生成前チェック | 帳票確定、外部配信、金額・取引条件確定 | [帳票DX MCP](https://corp.opro.net/news/2026/05/formdx-mcp.html) |
| 株式会社ハレックス | 気象データ MCPサーバー | MCP/API | 気象データ確認、物流・小売・イベントリスク分析 | 防災・運休・中止など重要判断、顧客通知 | [NTT DATAニュース](https://www.nttdata.com/global/ja/news/group/2026/033100/) |
| GMOインターネット株式会社 | ConoHa VPS MCP Server | 公式MCP | VPS棚卸し、構成確認、保守作業案 | VPS作成・削除・停止・再起動、セキュリティ設定変更 | [ConoHa MCP](https://vps.conoha.jp/function/mcp/) |
| フェンリル株式会社 | NILTO MCP | 公式MCP | CMS下書き、公開予約確認、コンテンツ差分レビュー | 公開、削除、公開予約変更、CMS権限変更 | [NILTO MCP setup](https://www.nilto.com/ja/help/usage/setup-claude) |
| 株式会社RevComm | MiiTel MCP Server | 公式MCP | 通話要約、営業改善案、フォローアップ下書き | 通話録音共有、CRM/SFA更新、顧客評価確定 | [RevComm発表](https://www.revcomm.com/ja/news/pressrelease/20251223/) |
| 株式会社Picaro.ai | Picaro.AI MCP / AIエージェント | MCP/API | Amazon広告分析、EC施策案、マーケットプレイス運用 | 広告予算・入札変更、施策実行、売上データ共有 | [Picaro.ai発表](https://prtimes.jp/main/html/rd/p/000000034.000116959.html) |
| ウィブル証券株式会社 | Webull MCP Server / Agent Skills | MCP/API | 市場データ確認、非助言リサーチ、銘柄比較 | 注文・取消・訂正、投資助言、口座情報共有 | [Webull発表](https://prtimes.jp/main/html/rd/p/000000064.000131836.html) |
| ブレインズテクノロジー株式会社 | Neuron ES MCPサーバー | 公式MCP | 社内横断検索、Copilot連携、ナレッジ探索 | 社内文書の外部共有、アクセス権限変更 | [Neuron ES MCP](https://prtimes.jp/main/html/rd/p/000000061.000014739.html) |
| Stellagent株式会社 | Presso | 公式MCP | 広告・GA4横断レポート、施策案、マーケ接続基盤 | 広告予算・入札・配信設定変更、施策実行 | [Presso](https://presso.now/ja) |
| 株式会社キャッチアップ | CuMcp for baserCMS | 公式MCP | 国産CMSのサイト更新、要約、リライト、投稿運用 | Webサイト公開・更新・削除、投稿スケジュール変更 | [キャッチアップ発表](https://catchup.co.jp/news/archives/255) |
| AgentClick | AgentClick MCP API | MCP/API | 案件検索、リンク生成、成果レポート、アフィリエイト運用 | 提携申請、リンク公開、成果条件を含む記事公開 | [AgentClick](https://agentclick.ai/) |
| NTTアドバンステクノロジ株式会社 | WinActor Manager on Cloud MCPサーバー | 公式MCP | RPA実行、既存社内システム操作、定型業務自動化 | RPAシナリオ実行、登録更新、定期実行設定 | [NTT-ATニュース](https://www.ntt-at.co.jp/news/2026/detail/release260205.html) |
| 株式会社ヌーラボ | Backlog MCP Server | 公式OSS MCP | 課題整理、コメント下書き、Wiki更新案、Git/PR確認 | 課題・コメント・Wiki・プロジェクト設定の作成更新削除、APIキー/OAuth設定 | [GitHub](https://github.com/nulab/backlog-mcp-server) |

## 日本語圏OSS MCP / コミュニティMCP

| 提供元 | サービス | 分類 | 主なワークフロー | 人間承認が必要な操作 | 公式情報 |
| --- | --- | --- | --- | --- | --- |
| 合同会社esa | esa MCP Server | 公式OSS MCP | esa記事検索、WIP整理、更新差分、リリースノート | 記事作成・更新・Ship It・アーカイブ、添付ファイル共有 | [GitHub](https://github.com/esaio/esa-mcp-server) |
| GROWI Labs | GROWI MCP Server | OSS MCP | Wiki検索、社内FAQ整理、ナレッジベース更新差分 | ページ作成・更新・削除、タグ・コメント・共有リンク変更 | [GitHub](https://github.com/growilabs/growi-mcp-server) |
| KanseiLink | Kansei MCP Server | OSS MCP | 日本語SaaS/MCP探索、ワークフロー候補整理、MCPルーティング | 推奨MCPの本番接続、外部SaaS認証、APIキー投入 | [GitHub](https://github.com/kansei-link/kansei-mcp-server) |
| OSSコミュニティ | japan-ux-mcp | OSS MCP | 日本向けUI/UX、フォーム、敬語、法務表示レビュー | 法務・医療・金融・採用表現の公開判断、本番リリース | [GitHub](https://github.com/mrslbt/japan-ux-mcp) |
| OSSコミュニティ | EDINET MCP | OSS MCP | 有価証券報告書、XBRL、企業開示調査 | 投資助言、売買推奨、データ二次利用条件の判断 | [GitHub](https://github.com/ajtgjmdjp/edinet-mcp) |
| OSSコミュニティ | TDNET Disclosure MCP | OSS MCP | 適時開示、決算、配当、M&A、自己株買い調査 | 投資助言、重要事実の断定、公式TDNET未照合の外部共有 | [GitHub](https://github.com/ajtgjmdjp/tdnet-disclosure-mcp) |
| OSSコミュニティ | e-Stat MCP | OSS MCP | 政府統計、地域分析、市場調査、政策調査 | 統計解釈の断定、取得条件や時点を省いた公開 | [GitHub](https://github.com/ajtgjmdjp/estat-mcp) |
| OSSコミュニティ | BOJ MCP | OSS MCP | 日本銀行統計、マクロ調査、金融系列レポート | 投資助言、金融政策解釈の断定、データ時点省略 | [GitHub](https://github.com/ajtgjmdjp/boj-mcp) |
| OSSコミュニティ | Qiita Researcher MCP | OSS MCP | 技術記事調査、DevRel、社内勉強会資料案 | 記事・コメントの引用公開、Qiitaトークン設定、公式見解化 | [GitHub](https://github.com/AkashiShogo/mcp-server-qiita-researcher) |
| OSSコミュニティ | Gurume | OSS MCP | 飲食店候補調査、出張・会食候補、地域飲食店リサーチ | 飲食店情報の商用利用・転載、大量取得、営業時間・予約可否の断定 | [GitHub](https://github.com/narumiruna/gurume) |
| jpzip | jpzip MCP Server | OSS MCP | 郵便番号検索、住所照合、ECフォーム確認、配送先候補 | 顧客住所の自動更新、配送先確定、本人確認利用 | [GitHub](https://github.com/jpzip/mcp) |
| OSSコミュニティ | Japan Utils MCP | OSS MCP | 和暦変換、祝日確認、かな変換、氏名分割、住所候補 | 氏名分割の断定、契約・労務期限の確定、顧客マスター更新 | [GitHub](https://github.com/vivek081166/japan-utils-mcp) |
| OSSコミュニティ | Japan Seasons MCP | OSS MCP | 桜・紅葉スポット調査、旅行企画、季節イベント候補 | 予約・購入・外部送信、開花予測や天候を根拠にした催行判断 | [GitHub](https://github.com/haomingkoo/japan-seasons-mcp) |
| Kokai Data | Kokai Data / Japan Business Data MCP | OSS MCP | 法人調査、補助金、官公需、法令、公開ビジネス情報 | 投資助言、士業判断、補助金申請・入札判断、外部公開 | [GitHub](https://github.com/Kokai-Data/japan-business-data) |
| OSSコミュニティ | Sakenowa MCP | OSS MCP | 日本酒検索、風味比較、飲食・観光企画候補 | 酒類販売・提供・年齢確認、価格・在庫・度数の断定 | [GitHub](https://github.com/mame0001/sakenowa-mcp) |

## APIでエージェント化可能

| 会社 | サービス | 主なワークフロー | エージェント化の向き | 公式情報 |
| --- | --- | --- | --- | --- |
| フリー株式会社 | freee Developers API | 会計・人事労務・請求API連携 | MCPがなくてもOAuth + APIで業務補助を組みやすい | [freee Developers](https://developer.freee.co.jp/) |
| 株式会社マネーフォワード | マネーフォワード クラウド API | 仕訳参照・登録、試算表参照 | 会計MCPとAPIの併用テンプレ向き | [開発者サイト](https://developers.biz.moneyforward.com/) |
| サイボウズ株式会社 | kintone REST API | CRM、案件管理、社内DB、承認フロー | AIが検索・下書きし、人間が更新承認する形に合う | [kintone REST API](https://cybozu.dev/ja/kintone/docs/rest-api/) |
| サイボウズ株式会社 | Garoon REST API / JavaScript API | 予定、ワークフロー、ポータル | 会議調整や社内ポータル生成の下書きに合う | [Garoon REST API](https://cybozu.dev/ja/garoon/docs/rest-api/overview/garoon-rest-api-overview/) |
| 株式会社SmartHR | SmartHR API | 入退社、人事マスター、ID連携 | 個人情報が多いため承認ゲート必須 | [SmartHR for developers](https://developer.smarthr.jp/) |
| 株式会社kubell | Chatwork API | 問い合わせ振り分け、社内通知、タスク化 | 外部送信前レビュー付きのサポート運用向き | [Chatwork API](https://developer.chatwork.com/) |
| 株式会社はてな | Mackerel API | 障害一次切り分け、監視レポート、棚卸し | 読み取り中心なら運用エージェントと相性が良い | [Mackerel API](https://mackerel.io/ja/api-docs/) |
| 合同会社esa | esa API v1 | 議事録、リリースノート、ナレッジ更新 | WIP下書きから人間がShip Itする運用に合う | [esa API](https://docs.esa.io/posts/102) |
| 株式会社ヌーラボ | Backlog API | 課題整理、コメント下書き、Wiki更新 | 課題・Wikiの更新前レビューが前提 | [Backlog API](https://developer.nulab.com/ja/docs/backlog/) |
| LINEヤフー株式会社 | LINE Messaging API | 顧客対応、公式アカウント通知、チャットボット | ユーザー送信前の承認とログ保全が重要 | [LINE Developers](https://developers.line.biz/ja/services/messaging-api/) |
| LINEヤフー株式会社 | LINE LIFF / LINE Login | LINE内Webアプリ、会員証、予約フォーム、プロフィール連携 | 取得データと送信操作の承認境界を明確にする | [LIFF overview](https://developers.line.biz/en/docs/liff/overview/) |
| BASE株式会社 | BASE API | 受注確認、商品同期、EC問い合わせ対応 | 顧客情報・商品更新は高リスクとして扱う | [BASE API](https://docs.thebase.in/api/) |
| Qiita株式会社 | Qiita API v2 | 技術記事検索、DevRel、Qiita Team文書 | 公開記事投稿は人間承認、検索・要約は低リスク | [Qiita API v2](https://qiita.com/api/v2/docs) |

### 追加APIカバレッジ

| 会社 | サービス | 主なワークフロー | エージェント化の向き | 公式情報 |
| --- | --- | --- | --- | --- |
| 株式会社ミショナ | L Message (エルメ) | LINE公式アカウント配信、予約、顧客管理、決済導線 | 標準機能の設定変更と外部送信は承認必須 | [L Message](https://lme.jp/) |
| 株式会社ミショナ | エルグラム / L Message for Instagram | Instagram DM自動返信、コメント起点DM、商品販売導線 | 自動返信有効化と規約確認を分ける | [エルグラム](https://lgram.jp/), [Meta公式APIとは](https://lgram.jp/manual/meta_api/) |
| 弥生株式会社 | 弥生 API | 会計・請求データ棚卸し、月次確認 | 会計更新は承認ゲート必須 | [弥生 Developer](https://developer.yayoi-kk.co.jp/) |
| メイクリープス株式会社 | MakeLeaps API | 見積・請求書下書き、取引先確認 | 書類送信前レビュー向き | [MakeLeaps Developers](https://developers.makeleaps.jp/) |
| 弁護士ドットコム株式会社 | クラウドサイン Web API | 契約期限確認、署名状況棚卸し | 契約送信や法的判断は人間が行う | [クラウドサイン Developers](https://developers.cloudsign.jp/) |
| GMOグローバルサイン・ホールディングス株式会社 | 電子印鑑GMOサイン API | 契約送信前チェック、署名状況確認 | 署名依頼送信は承認付き実行 | [GMOサイン Developers](https://developers.gmosign.com/) |
| PayPay株式会社 | PayPay API | 決済状況確認、返金候補レビュー | 返金・取消は高リスク操作 | [PayPay for Developers](https://developer.paypay.ne.jp/) |
| PAY株式会社 | PAY.JP API | 課金・サブスク確認、決済レポート | 決済操作は人間承認が前提 | [PAY.JP API](https://pay.jp/docs/api/) |
| 株式会社DEGICA | KOMOJU API | 決済方法別レポート、EC決済確認 | 支払い変更は承認付き実行 | [KOMOJU Docs](https://docs.komoju.com/) |
| STORES株式会社 | STORES API | 商品・注文確認、在庫補充候補 | 商品・在庫変更は高リスク | [STORES API](https://api.st.inc/doc/) |
| GMOペパボ株式会社 | カラーミーショップ API | 商品同期、注文確認、問い合わせ下書き | EC更新と顧客連絡は承認必須 | [カラーミーショップ API](https://developer.shop-pro.jp/) |
| LINEヤフー株式会社 | Yahoo!ショッピング API | 商品掲載確認、ストア運用レポート | 商品・価格更新は承認付き実行 | [Yahoo!ショッピング API](https://developer.yahoo.co.jp/webapi/shopping/) |
| LINEヤフー株式会社 | Yahoo!広告 API | 広告レポート要約、改善案作成 | 予算・入札・公開変更は高リスク | [Yahoo!広告 API](https://ads-developers.yahoo.co.jp/ja/ads-api/) |
| バリューコマース株式会社 | ValueCommerce API | アフィリエイト案件調査、成果レポート | 公開記事や提携申請は人間確認 | [ValueCommerce API](https://www.valuecommerce.ne.jp/api/) |
| さくらインターネット株式会社 | さくらのクラウド API | サーバー棚卸し、費用確認、運用レポート | 読み取り中心から始める | [さくらのクラウド API](https://manual.sakura.ad.jp/cloud/api/) |
| GMOインターネットグループ株式会社 | ConoHa API | VPS棚卸し、保守チェック | 停止・削除・課金操作は承認必須 | [ConoHa API](https://doc.conoha.jp/api-vps3/) |
| 富士通クラウドテクノロジーズ株式会社 | NIFCLOUD API | クラウド資産棚卸し、設定確認 | インフラ変更は高リスク | [NIFCLOUD API](https://pfs.nifcloud.com/api/) |
| 株式会社ソラコム | SORACOM API | IoT SIM利用量監視、異常候補抽出 | 回線停止・プラン変更は承認必須 | [SORACOM API](https://developers.soracom.io/en/api/) |
| 株式会社ヒューマンテクノロジーズ | KING OF TIME Web API | 勤怠確認、締め前チェック | 勤怠修正や承認は人間判断 | [KING OF TIME API](https://developer.kingtime.jp/) |
| 株式会社DONUTS | ジョブカン API | 勤怠・労務確認、承認前レビュー | 労務データ更新は高リスク | [ジョブカン API](https://ssl.jobcan.jp/docs/api/) |
| 株式会社HERP | HERP API | 採用候補者整理、面接前ブリーフ | 合否判断や候補者連絡は人間承認 | [HERP Developers](https://developers.herp.cloud/) |
| 株式会社カオナビ | kaonavi API v2 | 従業員データ棚卸し、組織情報確認、人事マスター確認 | 人事データ更新と評価判断は承認必須 | [kaonavi API v2](https://developer.kaonavi.jp/api/v2.0/index.html) |
| 株式会社マツリカ | Mazrica API | 商談整理、次アクション案、CRMレビュー | CRM更新は差分確認付き | [Mazrica API](https://developer.mazrica.com/) |
| 株式会社プレイド | KARTE API | 施策候補、顧客体験分析、セグメント確認 | 配信・セグメント変更は承認必須 | [KARTE Developers](https://developers.karte.io/) |
| 株式会社スマレジ | スマレジ・プラットフォームAPI | POS売上確認、在庫・店舗運用レポート | 商品・在庫変更は高リスク | [スマレジ Developers](https://developers.smaregi.dev/) |
| 株式会社Zaim | Zaim API | 家計・支出レポート、予算レビュー | 個人データ外部共有は要確認 | [Zaim Developers](https://dev.zaim.net/) |
| 株式会社JPX総研 | J-Quants API | 上場企業データ調査、非助言リサーチメモ | 売買推奨と誤認されない表現が必要 | [J-Quants](https://jpx-jquants.com/) |
| 株式会社クレイ | DocBase API | ナレッジ検索、重複記事整理、社内文書下書き | 削除や公開範囲変更は承認必須 | [DocBase API](https://help.docbase.io/posts/45703) |
| チャットプラス株式会社 | ChatPlus API | 問い合わせ一次分類、返信案、FAQ改善 | 顧客返信送信は人間確認 | [ChatPlus API](https://chatplus.jp/support/api/) |
| 株式会社オープンロジ | オープンロジ API | 出荷確認、遅延候補抽出、顧客連絡下書き | 出荷変更や顧客連絡は承認付き実行 | [オープンロジ API](https://docs.openlogi.com/) |
| ミクステンド株式会社 | TimeRex Scheduling API | 商談・面談の日程調整、候補日提示、会議URL発行 | 外部参加者へのURL送信と予定確定は承認必須 | [TimeRex Developer Portal](https://developers.timerex.net/api/) |
| HENNGE株式会社 | HENNGE One API / Access Control API | ID棚卸し、アクセス権レビュー、セキュリティ運用確認 | ユーザー・権限・セキュリティ設定変更は高リスク | [HENNGE One API](https://developers.hennge.com/) |

## AIエージェント基盤

| 会社 | サービス | 主なワークフロー | 注意点 | 公式情報 |
| --- | --- | --- | --- | --- |
| ジェットラン・テクノロジーズ株式会社 | AIエージェント RAG / MCP | 社内文書検索、オンプレミスRAG、機密データ活用 | 導入形態と外部LLM連携範囲を確認する | [Jetrun Technologies](https://www.jetrun.co.jp/) |

## テンプレート化の優先順位

1. 高需要で汎用性が高い: 会計、請求、CRM、社内DB、問い合わせ対応。
2. 日本語テンプレの価値が出やすい: 契約、労務、LINE/Chatwork返信、SEO記事構成。
3. 安全設計が差別化になる: XServer、Mackerel、SmartHR、Contract One、WinActor。

## 更新ルール

- 新規追加は公式URLを最低1つ添える。
- MCPではないAPIを「MCP」と書かない。
- 書き込み、外部送信、支払い、契約、人事、インフラ変更は必ず人間承認欄を入れる。
- `data/japan-agent-providers.jsonl` の `last_checked` を更新してからPRを出す。
