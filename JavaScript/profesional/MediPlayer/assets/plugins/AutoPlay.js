function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
    if(!player.muted) player.Muted = true

    player.media.play()
}

export default AutoPlay
