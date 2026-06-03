# 学生・スタートアップ向けAIエージェントワークフロー

学生、学生起業家、初期スタートアップは、少人数で調査、顧客検証、LP改善、問い合わせ対応、ポートフォリオ改善を進める必要があります。このユースケースでは、AIエージェントに「調査」「分類」「下書き」「チェックリスト作成」を任せ、外部送信や本番変更は人間承認に分けます。

## 代表ワークフロー

| ワークフロー | 主な接続候補 | AIに任せる範囲 | 承認が必要な操作 |
| --- | --- | --- | --- |
| 顧客ヒアリング整理 | Notion, Airtable, kintone, Slack | 匿名化、課題分類、質問案 | CRM更新、外部共有 |
| MVP/LP検証 | GitHub, Vercel, Analytics, Notion | 文言案、A/B案、公開前チェック | 本番デプロイ、DNS/環境変数変更 |
| 学生ポートフォリオ改善 | GitHub, Notion, Google Docs | README改善案、Issue案 | commit、push、応募送信 |

## Templates

- [スタートアップ顧客ヒアリング整理](../../templates/business-ja/startup-customer-discovery-agent.md)
- [スタートアップMVP/LP検証](../../templates/business-ja/startup-mvp-lp-validation-agent.md)
- [学生GitHubポートフォリオレビュー](../../templates/business-ja/student-portfolio-github-review-agent.md)

## Safety Notes

- 顧客名、メールアドレス、大学アカウント、APIキーをプロンプトに貼らない。
- AIの分類は仮説として扱い、実行判断にしない。
- 外部送信、決済、デプロイ、CRM更新は人間承認にする。
