# Changelog

All notable changes to Policy AI will be documented in this file.

## [0.1.0] - 2026-03-06

### Added
- AI法務文書自動生成（7種類: プライバシーポリシー、利用規約、特商法表記、AI利用ポリシー、免責事項、Cookieポリシー、返品・返金ポリシー）
- 6業種対応（EC、SaaS、ブログ、モバイルアプリ、フリーランス、その他）
- テキスト / HTML / Markdown 出力形式
- MCP Server エンドポイント (`/api/mcp`)
- フィードバックウィジェット（GitHub Issues連携）
- Google Analytics 統合
- JSON-LD 構造化データ（SEO）
- カスタム404ページ、エラーバウンダリ
- AI公開ファイル: `robots.txt`, `llms.txt`, `.well-known/agent.json`
- 業種別・文書タイプ別解説ページ
- サイトマップ自動生成

### Fixed
- フィードバックAPI: リポジトリパラメータをハードコード化（セキュリティ修正）
- 入力バリデーション強化（文字数制限）
- `/generate` ページの searchParams ハンドリング修正

## [Unreleased]

### Changed
- 依存パッケージのパッチアップデート（@types/node, eslint）
