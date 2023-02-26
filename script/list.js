/**
 * 楽曲プレイボタンクリック時、譜面などを読み込んでプレイ状態にする関数
 * @param {Number} musicID - musicList.all.additionにおける該当楽曲の添字
 * @param {Number} tendency - musicList.music.allにおける該当譜面の添字
 */
const select = (musicID, tendency) => {
    document.querySelector("#fade").classList.add("fading");
    window.setTimeout(() => {
        document.querySelector("#title").classList.remove("using");
        document.querySelector("#list").classList.add("using");
        document.querySelector("#fade").classList.remove("fading");
    }, 200);
    const playingMusic = musicList.all.addition[musicID];
    const playingScore = musicList[playingMusic].all[tendency];
    const musicFile = musicList[playingMusic][playingScore].music;
    const scoreFile = musicList[playingMusic][playingScore].score;
    const scoreOffset = musicList[playingMusic][playingScore].offset;
}