export default function Music() {
  const music = new Audio("./images/anthem-of-victory-111206_SL5OrOr7.mp3");
  music.play();
  music.loop = false;

  music.pause();
}
