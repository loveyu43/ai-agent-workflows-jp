# 日本企業 AIエージェント / MCP ワークフロー索引

最終確認日: 2026-06-02

この索引は、日本企業が提供するMCP、AIエージェント基盤、またはAIエージェントから業務利用しやすいAPIを、業務テンプレートへ落とし込むための入口です。公式ページで確認できた情報を優先し、MCPではないAPIは「APIでエージェント化可能」として分けています。

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
| AgentClick | AgentClick MCP API | MCP/API | 案件検索、リンク生成、成果レポート、アフィリエイト運用 | 提携申請、リンク公開、成果条件を含む記事公開 | [AgentClick](https://agentclick.ai/) |
| NTTアドバンステクノロジ株式会社 | WinActor Manager on Cloud MCPサーバー | 公式MCP | RPA実行、既存社内システム操作、定型業務自動化 | RPAシナリオ実行、登録更新、定期実行設定 | [NTT-ATニュース](https://www.ntt-at.co.jp/news/2026/detail/release260205.html) |

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
| BASE株式会社 | BASE API | 受注確認、商品同期、EC問い合わせ対応 | 顧客情報・商品更新は高リスクとして扱う | [BASE API](https://docs.thebase.in/api/) |
| Qiita株式会社 | Qiita API v2 | 技術記事検索、DevRel、Qiita Team文書 | 公開記事投稿は人間承認、検索・要約は低リスク | [Qiita API v2](https://qiita.com/api/v2/docs) |

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
