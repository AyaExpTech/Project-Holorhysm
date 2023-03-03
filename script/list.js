/**
 * 楽曲プレイボタンクリック時、譜面などを読み込んでプレイ状態にする関数
 * @param {Number} musicID - musicList.all.additionにおける該当楽曲の添字
 * @param {Number} tendency - musicList.music.allにおける該当譜面の添字
 */
const select = (musicID, tendency) => {
    document.querySelector("#fade").classList.add("fading");
    const playingMusic = musicList.all.addition[musicID];
    const playingScore = musicList[playingMusic].all[tendency];
    const musicFile = musicList[playingMusic][playingScore].music;
    const scoreFile = musicList[playingMusic][playingScore].score;
    const scoreOffset = musicList[playingMusic][playingScore].offset;
    console.log(musicFile, scoreFile, scoreOffset);
    // ファイルの取得→気合いでplay関数発火の流れ(悪質コメント)
    const musicObj = new Audio(musicFile);
    let scoreObj = null;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", scoreFile);
    xhr.responseType = "text"; // text, arraybuffer, blob, document, jsonが使用可能。jsonのresponseは自動パースされる
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            scoreObj = JSON.parse(JSONC_to_JSON(xhr.response));
            // 全部終わったら0.2秒待って画面切り替え & play関数の発火
            window.setTimeout(() => {
                document.querySelector("#list").classList.remove("using");
                document.querySelector("#play").classList.add("using");
                document.querySelector("#fade").classList.remove("fading");
            }, 200);
            window.setTimeout(() => {
                const info = {
                    "display": musicList[playingMusic].display[displayLang],
                    "singer": musicList[playingMusic].singer[displayLang],
                    "composer": musicList[playingMusic].composer[displayLang],
                };
                play(musicObj, scoreObj, scoreOffset, info);
            }, 400);
        }
    }
};