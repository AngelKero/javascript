class MediaPlayer {

    constructor(config) {
        this.media = config.element
        this.plugins = config.plugins || []

        this._initPlugins()
    }

    _initPlugins() {
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

    paused() {
        return this.media.paused
    }

    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    muted() {
        return this.media.muted
    }

    mute() {
        this.media.muted = true
    }

    unmute() {
        this.media.muted = false
    }

    getVolume() {
        return this.media.volume
    }

    setVolume(selector) {
        this.media.volume = selector
    }
}

export default MediaPlayer;