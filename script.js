const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 現在アクティブなタブとコンテンツからactiveクラスを削除
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // クリックされたボタンにactiveクラスを追加
    button.classList.add("active");

    // クリックされたボタンのdata-tab属性から対応するコンテンツのIDを取得
    const targetTabId = button.dataset.tab; // data-tab="tab1" の 'tab1' を取得
    const targetContent = document.getElementById(targetTabId);

    // 対応するコンテンツにactiveクラスを追加して表示
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});
