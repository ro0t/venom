export default class GameLoop {
    private readonly maxFps: number = 60;
    private readonly update: () => void;
    private readonly draw: () => void;
    private lastFrameTimeMs: number = 0;
    private isGameRunning: boolean = false;

    constructor(update: () => void, draw: () => void) {
        this.update = update;
        this.draw = draw;
    }

    start() {
        this.isGameRunning = true;
        window.requestAnimationFrame(this.main);
    }

    stop() {
        this.isGameRunning = false;
        window.cancelAnimationFrame(this.lastFrameTimeMs);
    }

    main = (timestamp) => {
        if( this.isGameRunning ) {
            if(timestamp < this.lastFrameTimeMs + (1000 / this.maxFps)) {
                window.requestAnimationFrame(this.main);
                return;
            }

            this.lastFrameTimeMs = timestamp;
            this.update();
            this.draw();

            window.requestAnimationFrame(this.main);
        }
    };

}