/**
 * JSONC→JSONパーサー
 */
const JSONC_to_JSON = i => { let s = 0, o = ""; for (let j = 0; j < i.length; j++) { let q = i[j]; if (s == 1) { q == "\"" ? s = 0 : 0; o += q; continue } if (s == 2) { q == "\n" ? (s = 0, o += q) : 0; continue } if (s == 3) { q + i[j + 1] == "*/" ? (s = 0, j += 1) : 0; continue } if (q == "\\") { o += q, j += 1, o += i[j]; continue } if (q == "/") { i[j + 1] == "/" ? (s = 2, j += 1) : 0; i[j + 1] == "*" ? (s = 3, j += 1) : 0; continue } if (q == "\"") { (s = 1, o += q); continue } o += q; continue } return o }

/**
 * ページ読み込み時の処理
 */
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

/**
 * グローバルにlist.jsoncをオブジェクトにしたものをおいておく
 */
let musicList = null;
let xhr = new XMLHttpRequest();
xhr.open("GET", "score/list.jsonc");
xhr.responseType = "text"; // text, arraybuffer, blob, document, jsonが使用可能。jsonのresponseは自動パースされる
xhr.send();
xhr.onload = () => {
    if (xhr.status != 200) {
        console.log("取得に失敗");
    } else {
        musicList = JSON.parse(JSONC_to_JSON(xhr.response));
    }
};