# 日本語圏OSS MCP / AIエージェント連携カタログ

最終確認日: 2026-07-04

日本語業務で使いやすいOSS MCP、または日本のサービス・公開データと相性がよいOSS MCPをまとめます。MCPサーバー自体がOSSでも、接続先サービスの利用規約、APIキー権限、レート制限、データの二次利用条件は別途確認します。

## 掲載基準

- 公式リポジトリまたは主要な配布ページが確認できる。
- 日本語業務、国内サービス、日本の公開データ、または日本向けUI/UXと関連する。
- AIエージェントに任せる範囲と、人間承認が必要な範囲を分けられる。

## OSS MCP一覧

| ID | OSS / MCP | 主な用途 | 注意点 | ソース |
| --- | --- | --- | --- | --- |
| `esa-mcp-server` | esa MCP Server | esa記事検索、WIP整理、更新差分、リリースノート | Ship It、記事更新、添付ファイル共有は人間承認 | [GitHub](https://github.com/esaio/esa-mcp-server) |
| `growi-mcp-server` | GROWI MCP Server | GROWI Wiki検索、社内FAQ整理、ページ更新差分 | ページ更新、削除、共有リンク変更は人間承認 | [GitHub](https://github.com/growilabs/growi-mcp-server) |
| `kansei-link-mcp-server` | Kansei MCP Server | 日本語SaaS/MCP探索、ワークフロールーティング | 推奨MCPの本番接続やAPIキー投入は人間承認 | [GitHub](https://github.com/kansei-link/kansei-mcp-server) |
| `japan-ux-mcp` | japan-ux-mcp | 日本向けUI/UX、フォーム、敬語、法務表示レビュー | 法務・医療・金融・採用表現の適合判断は断定しない | [GitHub](https://github.com/mrslbt/japan-ux-mcp) |
| `edinet-mcp` | EDINET MCP | 有価証券報告書、XBRL、企業開示調査 | 投資助言、売買推奨、利益保証表現は禁止 | [GitHub](https://github.com/ajtgjmdjp/edinet-mcp) |
| `tdnet-disclosure-mcp` | TDNET Disclosure MCP | 適時開示、決算、配当、M&A、自己株買い調査 | 公式TDNETとの照合なしに重要事実を断定しない | [GitHub](https://github.com/ajtgjmdjp/tdnet-disclosure-mcp) |
| `estat-mcp` | e-Stat MCP | 政府統計、地域分析、市場調査、政策調査 | 取得条件、時点、統計表IDを省かない | [GitHub](https://github.com/ajtgjmdjp/estat-mcp) |
| `boj-mcp` | BOJ MCP | 日本銀行統計、マクロ調査、金融系列レポート | 投資助言や金融政策解釈の断定を避ける | [GitHub](https://github.com/ajtgjmdjp/boj-mcp) |
| `qiita-researcher-mcp` | Qiita Researcher MCP | 技術記事調査、DevRel企画、社内勉強会資料案 | 記事・コメントの引用公開、トークン管理、公式見解化に注意 | [GitHub](https://github.com/AkashiShogo/mcp-server-qiita-researcher) |
| `gurume-mcp` | Gurume | 飲食店候補調査、出張・会食候補、地域飲食店リサーチ | Tabelog規約、レート制限、営業時間や予約可否の断定に注意 | [GitHub](https://github.com/narumiruna/gurume) |
| `backlog-mcp-server` | Backlog MCP Server | 課題整理、コメント下書き、Wiki更新案、Git/PR確認 | 課題・コメント・Wiki・プロジェクト設定の書き込みは人間承認 | [GitHub](https://github.com/nulab/backlog-mcp-server) |
| `jpzip-mcp` | jpzip MCP Server | 郵便番号検索、住所照合、ECフォーム確認、配送先候補 | 顧客住所の自動更新、配送先確定、本人確認利用に注意 | [GitHub](https://github.com/jpzip/mcp) |
| `japan-utils-mcp` | Japan Utils MCP | 和暦変換、祝日確認、かな変換、氏名分割、住所候補 | 氏名分割や暦情報を法的・労務上の確定判断に使わない | [GitHub](https://github.com/vivek081166/japan-utils-mcp) |
| `japan-seasons-mcp` | Japan Seasons MCP | 桜・紅葉スポット調査、旅行企画、季節イベント候補 | 予約・購入・催行判断、営業時間・天候・開花予測の断定に注意 | [GitHub](https://github.com/haomingkoo/japan-seasons-mcp) |
| `kokai-data-mcp` | Kokai Data / Japan Business Data MCP | 法人調査、補助金、官公需、法令、公開ビジネス情報 | 投資助言、士業判断、補助金申請・入札判断として断定しない | [GitHub](https://github.com/Kokai-Data/japan-business-data) |
| `sakenowa-mcp` | Sakenowa MCP | 日本酒検索、風味比較、飲食・観光企画候補 | 酒類販売・提供・年齢確認、価格・在庫・度数の断定に注意 | [GitHub](https://github.com/mame0001/sakenowa-mcp) |

## テンプレート化した範囲

- [esa/GROWI MCP ナレッジ運用](../../templates/business-ja/esa-growi-knowledge-mcp-agent.md)
- [日本金融・統計OSS MCP 調査](../../templates/business-ja/japan-finance-data-mcp-research-agent.md)
- [Qiita Researcher MCP DevRel調査](../../templates/business-ja/qiita-researcher-devrel-agent.md)
- [japan-ux-mcp 日本向けUIレビュー](../../templates/business-ja/japan-ux-mcp-review-agent.md)
- [Backlog MCP プロジェクト運用](../../templates/business-ja/backlog-mcp-project-ops-agent.md)
- [日本住所・ロケールMCP 業務確認](../../templates/business-ja/japan-locale-address-mcp-agent.md)
- [Kokai Data MCP 公開ビジネス情報調査](../../templates/business-ja/kokai-public-business-data-mcp-agent.md)
- [日本旅行・飲食OSS MCP 調査](../../templates/business-ja/japan-travel-food-mcp-research-agent.md)

## 追加調査メモ

法人検索系MCPなど、業務価値が高い候補も見つかったが、ライセンスや配布条件がすぐ確認できないものは今回の機械可読カタログには入れない。追加する場合は、ライセンス、公式URL、利用規約、レート制限を先に確認する。
