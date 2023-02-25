window.addEventListener("load", function () {
    /**
     * ページ読み込み時、title画面を表示
     */
    document.querySelector("#title").classList.add("using");
    /**
     * title画面タッチ時、タイトル画面を非表示にしてlist画面に表示切り替え
     */
    document.querySelector("#title").addEventListener("click", function () {
        document.querySelector("#fade").classList.add("fading");
        window.setTimeout(() => {
            document.querySelector("#title").classList.remove("using");
            document.querySelector("#list").classList.add("using");
            document.querySelector("#fade").classList.remove("fading");
        }, 200);
    });
});
