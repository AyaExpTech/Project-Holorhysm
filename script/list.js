/**
 * 楽曲プレイボタンクリック時、譜面などを読み込んでプレイ状態にする関数
 * @param {Number} musicID - musicList.all.additionにおける該当楽曲の添字
 * @param {Number} tendency - musicList.music.allにおける該当譜面の添字
 */
const select = (musicID, tendency) => {
    document.querySelector("#fade").classList.add("fading");
    window.setTimeout(() => {
        document.querySelector("#list").classList.remove("using");
        document.querySelector("#play").classList.add("using");
        document.querySelector("#fade").classList.remove("fading");
    }, 200);
    const playingMusic = musicList.all.addition[musicID];
    const playingScore = musicList[playingMusic].all[tendency];
    const musicFile = musicList[playingMusic][playingScore].music;
    const scoreFile = musicList[playingMusic][playingScore].score;
    const scoreOffset = musicList[playingMusic][playingScore].offset;
    console.log(musicFile, scoreFile, scoreOffset);
    // TODO : 2ファイルをダウンロードしてきてObjectにしてplay.jsのほうに書くであろうプレイ(メイン)関数に投げる
    // 綾坂こと「ファイル名は取得できてるやで」
    // 綾坂こと「"Promiseなんもわからん"になってるので理解してから続きを書く所存」
}