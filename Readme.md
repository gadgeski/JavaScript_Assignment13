目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

このコードの目的は、ウェブページ上で複数のコンテンツをタブ形式で表示し、ユーザーがクリックすることで表示するコンテンツを切り替えられるようにすることです。

具体的には、以下のように動作します。

- 複数の「タブボタン」があり、それぞれにコンテンツが紐付いています。
- 初期状態では、最初のタブとコンテンツがアクティブ（表示）になっています。
- ユーザーが他のタブボタンをクリックすると、現在アクティブなタブの表示が消え、クリックされたタブに紐付いたコンテンツが表示されます。

<h1>HTMLの解説</h1>
HTML (index.html)
HTMLは、ウェブページの構造とコンテンツを定義します。このファイルでは、タブのボタンと、それぞれのタブに対応するコンテンツが配置されています。

<h3>!DOCTYPE html>、html、head、body</h3> これらは基本的なHTMLの構造です。

<h3>meta charset="UTF-8"</h3> 文字化けを防ぐために、文字エンコーディングをUTF-8に設定しています。

<h3>meta name="viewport" ...</h3> レスポンシブデザイン（様々なデバイスの画面サイズに対応）のために、表示領域の設定をしています。

<h3>title</h3> ブラウザのタブやウィンドウに表示されるタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部CSSファイルを読み込んで、見た目を整えます。

<h3>div class="box"</h3> 上部に表示される「タブ切り替えコンテンツ」というテキストが入ったボックスです。これには後述のCSSで特殊なアニメーションが設定されています。

<h3>div class="tabs-container"</h3> タブ切り替え機能全体を囲むコンテナです。

<h3>div class="tab-buttons"</h3> タブのボタンをまとめる部分です。

<h3>button class="tab-button" data-tab="tab1"</h3> 各タブボタンです。

<h3>class="tab-button"</h3> CSS でスタイルを適用するためのクラスです。

<h3>active</h3> 初期状態でアクティブなタブボタンに付いているクラスです。JavaScript で切り替わります。

<h3>data-tab="tab1"</h3> これが重要です。このボタンがどのコンテンツを表示するかを示すためのカスタムデータ属性です。JavaScript でこの値を使って、対応するコンテンツを探します。

<h3>div class="tab-content-container"</h3> タブのコンテンツ部分をまとめるコンテナです。

<h3>div id="tab1" class="tab-content active"</h3> 各タブのコンテンツです。

<h3>id="tab1"</h3> data-tab 属性と対応する ID です。JavaScript がこの ID を使ってコンテンツを特定します。

<h3>class="tab-content"</h3> CSS でスタイルを適用するためのクラスです。

<h3>active</h3> 初期状態でアクティブなコンテンツに付いているクラスです。JavaScript で表示/非表示を切り替えます。

<h3>script src="script.js"</h3> script.jsという外部JavaScriptファイルを読み込んで、タブ切り替えの動作を実装します。

<h1>CSS (style.css)</h1>
CSSは、HTML要素の見た目を装飾します。このファイルでは、タブのボタン、コンテンツ、そして背景や全体の配置に関するスタイルが定義されています。

- body: ページ全体のスタイルを設定しています。背景画像、フォント、flexbox を使ってコンテンツを中央に配置する設定などが含まれます。

- .tabs-container: タブの入れ物全体のスタイルです。背景色、角の丸み、影などが設定されています。

- .tab-buttons: タブボタンを横並びにするために display: flex;が使われています。

- .tab-button: 各タブボタンの基本的なスタイルです。

  - flex: 1;: これにより、ボタンが tab-buttons 内で均等な幅になります。

  - transition: ホバーしたときに背景色や文字色が滑らかに変化するように設定されています。

- .tab-button:hover: マウスカーソルをボタンの上に置いたときのスタイルです。

- .tab-button.active: 現在アクティブな（選択されている）タブボタンのスタイルです。背景色が青になり、下線が引かれます。

- .tab-content-container: タブの内容の入れ物のスタイルです。

- .tab-content: 各タブの内容の基本的なスタイルです。

  - display: none;: これが重要です！ 初期状態では全てのコンテンツを非表示にしています。

- .tab-content.active: アクティブなコンテンツにのみ適用されるスタイルです。

  - display: block;: これにより、display: none;で隠されていたコンテンツが表示されます。

- .box: 上部の大きなボックスのスタイルです。

  - position: relative;: 子要素（::before と::after）の position: absolute;の基準となります。

  - ::before と::after: これらは CSS の疑似要素と呼ばれ、HTML には書かれていないけれど CSS だけで要素を追加し、装飾することができます。この例では、ボックスの四隅に短い線を描画しています。

  - :hover 時のスタイル: マウスカーソルを.box の上に置くと、四隅の線がボックス全体を囲むように広がり、ボックスの背景が半透明でぼかされたような効果（backdrop-filter: blur(15px);）になるアニメーションが設定されています。transition と transition-delay を使って、アニメーションに時間差と滑らかな動きを与えています。

<h1>JavaScript (script.js)</h1>

JavaScript は、ウェブページに動きとインタラクティブ性をもたらします。このファイルでは、タブのクリックイベントを監視し、表示するコンテンツを切り替えるロジックが実装されています。

- const tabButtons = document.querySelectorAll(".tab-button");:

  - document.querySelectorAll()は、指定した CSS セレクタ（この場合は.tab-button というクラス名）に一致するすべての HTML 要素を取得します。

  - 取得した要素は、配列のような NodeList という形式で tabButtons という定数に保存されます。

- const tabContents = document.querySelectorAll(".tab-content");:

  - 同様に、.tab-content クラスを持つすべての要素を取得し、tabContents に保存します。

- tabButtons.forEach((button) => { ... });:

  - forEach は、tabButtons（NodeList）の各要素（ここでは button という変数で参照）に対して、中括弧{}の中の処理を一度ずつ実行します。

- button.addEventListener("click", () => { ... });:

  - これはイベントリスナーと呼ばれるもので、ユーザーが button をクリックしたときに、中括弧{}の中の関数（アロー関数() => { ... }）を実行するように設定しています。

- tabButtons.forEach((btn) => btn.classList.remove("active"));:

  - まず、全てのタブボタンから active クラスを削除します。これにより、現在アクティブになっているタブの見た目（青い背景など）がリセットされます。

- tabContents.forEach((content) => content.classList.remove("active"));:

  - 同様に、全てのタブコンテンツから active クラスを削除します。これにより、現在表示されているコンテンツが非表示になります（display: none;に戻るため）。

- button.classList.add("active");:

  - クリックされたそのボタンに active クラスを追加します。これにより、クリックされたボタンの見た目がアクティブな状態に変わります。

- const targetTabId = button.dataset.tab;:

  - button.dataset.tab は、クリックされたボタンの data-tab 属性の値を取得します。たとえば、<button data-tab="tab1">がクリックされた場合、targetTabId には"tab1"という文字列が格納されます。

- const targetContent = document.getElementById(targetTabId);:

  - document.getElementById()は、指定した ID（この場合は targetTabId の値）を持つ HTML 要素を 1 つだけ取得します。これで、クリックされたタブボタンに対応するコンテンツ要素が見つかります。

- if (targetContent) { ... }:

  - targetContent が見つかった場合（つまり、null ではない場合）にのみ、中括弧の中の処理を実行します。

- targetContent.classList.add("active");:

  - 見つかったコンテンツ要素に active クラスを追加します。これにより、そのコンテンツが CSS の display: block;のルールによって表示されます。

<h1>【まとめ】</h1>
このコードは、HTMLで構造を作り、CSSで見た目を整え、JavaScriptで動きを加えるという、ウェブ開発の基本的な流れに沿っています。
 * HTML: タブのボタンとコンテンツを配置し、data-tab属性とid属性で関連付けをします。
 
 * CSS: 初期状態でコンテンツを隠し（display: none;）、アクティブなクラスが付いたときだけ表示されるようにします（display: block;）。また、ボタンやボックスの見た目を装飾します。

- JavaScript: 各タブボタンがクリックされたときに、現在アクティブなタブとコンテンツを非アクティブにし、クリックされたボタンと対応するコンテンツをアクティブにする処理を行います。
