import MediaPlayer from "../MediaPlayer";

class AutoPause {

    private threshold: number;
    private player: MediaPlayer;

    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }

    run(player: MediaPlayer): void {
        this.player = player;

        // IntersectionObserver
        const observer: IntersectionObserver = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);

        // VisibilityChange
        document.addEventListener('visibilitychange', this.handlerVisibilityChange);
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]): void {
        const entry: IntersectionObserverEntry = entries[0];
        entry.isIntersecting ? this.player.play.call(this.player.media) : this.player.pause.call(this.player.media);
    }

    private handlerVisibilityChange(): void {
        document.visibilityState === 'visible' && this.player.play.call(this.player.media);
        document.visibilityState === 'hidden' && this.player.pause.call(this.player.media);
    }
}

export default AutoPause;