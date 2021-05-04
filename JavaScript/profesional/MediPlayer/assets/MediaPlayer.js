function MediaPlayer(config) {
    this.media = config.element
    this.plugins = config.plugins || []

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: this.media.play,
        pause: this.media.pause,
        media: this.media,
        get Muted() {
            return this.media.muted
        },
        set Muted(value) {
            this.media.muted = value
        }
    }

    this.plugins.forEach(plugin => {
        plugin.run(player)
    })
}

MediaPlayer.prototype.paused = function () {
    return this.media.paused
}
MediaPlayer.prototype.play = function () {
    this.media.play()
}
MediaPlayer.prototype.pause = function () {
    this.media.pause()
}
MediaPlayer.prototype.muted = function () {
    return this.media.muted
}
MediaPlayer.prototype.mute = function () {
    this.media.muted = true
}
MediaPlayer.prototype.unmute = function () {
    this.media.muted = false
}
MediaPlayer.prototype.getVolume = function () {
    return this.media.volume
}
MediaPlayer.prototype.setVolume = function (selector) {
    this.media.volume = selector
}

export default MediaPlayer;