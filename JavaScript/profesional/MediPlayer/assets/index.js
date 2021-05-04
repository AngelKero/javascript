import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const mute = document.querySelector("#mute");
const volume = document.querySelector("#volume");

const player = new MediaPlayer({
    element: video,
    plugins: [new Autoplay()],
});

button.onclick = () => (player.paused() ? player.play() : player.pause());
mute.onclick = () => (player.muted() ? player.unmute() : player.mute());
volume.value = Math.floor(player.getVolume() * 100);
volume.addEventListener("input", () => {
    if(player.muted()) player.unmute();
    let selector = volume.value / 100;
    player.setVolume(selector);
});

console.log(player)