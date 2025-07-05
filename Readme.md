# タブ切り替えアプリケーション

## 概要

このプロジェクトは、JavaScript/CSS/HTML を使用したタブ切り替え機能を実装した Web アプリケーションです。今後 TypeScript や React にスケールする際の準備段階として開発されています。

## 機能

- **タブ切り替え機能**: 3 つのタブ間でコンテンツを動的に切り替え
- **レスポンシブデザイン**: 異なる画面サイズに対応
- **アニメーション効果**: ホバー時のスムーズなトランジション
- **モダンな UI**: 角丸デザインとシャドウ効果

## 技術スタック

- **HTML5**: セマンティックな構造
- **CSS3**: フレックスボックス、トランジション、疑似要素
- **JavaScript (ES6+)**: イベントリスナー、DOM 操作

## ファイル構成

```
project/
├── index.html          # メインのHTMLファイル
├── style.css           # スタイルシート
├── script.js           # JavaScript機能
└── img/
    └── Simple_Background-B2.png  # 背景画像
```

## 主要コンポーネント

### 1. HTML 構造

- `tabs-container`: タブ全体のコンテナ
- `tab-buttons`: タブボタンのコンテナ
- `tab-content-container`: タブコンテンツのコンテナ
- `box`: 装飾的なタイトル表示エリア

### 2. CSS 設計

#### タブスタイル

- フレックスボックスレイアウトで均等配置
- アクティブ状態の視覚的フィードバック
- ホバー効果とトランジション

#### ボックス装飾

- 疑似要素（::before, ::after）を使用したアニメーション
- グラスモーフィズム効果
- 角から中央に向かう境界線アニメーション

### 3. JavaScript 機能

#### イベント処理

```javascript
// 各タブボタンにクリックイベントリスナーを追加
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // アクティブクラスの切り替え処理
  });
});
```

#### DOM 操作

- `querySelectorAll()`: 複数要素の取得
- `classList.add()/remove()`: クラスの動的操作
- `dataset.tab`: データ属性の取得

## 使用方法

1. プロジェクトファイルをダウンロード
2. `index.html`をブラウザで開く
3. タブボタンをクリックしてコンテンツを切り替え

## 特徴的な実装

### データ属性を使用したタブ管理

```html
<button class="tab-button active" data-tab="tab1">タブ 1</button>
```

```javascript
const targetTabId = button.dataset.tab;
```

### CSS 疑似要素を使用したアニメーション

```css
.box::before,
.box::after {
  /* 角の装飾要素 */
  transition: 0.4s;
  transition-delay: 0.5s;
}
```

### フレックスボックスレイアウト

```css
.tab-buttons {
  display: flex;
}
.tab-button {
  flex: 1; /* 均等な幅配分 */
}
```

## 今後の拡張予定

- **TypeScript 化**: 型安全性の向上

## 学習ポイント

- **DOM 操作**: 要素の選択・操作・イベント処理
- **CSS 設計**: フレックスボックス、疑似要素、トランジション
- **JavaScript 基礎**: イベント処理、配列操作、条件分岐
- **レスポンシブデザイン**: モバイルファースト設計
