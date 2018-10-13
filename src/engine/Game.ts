import GameLoop from "./GameLoop";

export default class Game {
    private readonly loop: GameLoop;
    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.loop = new GameLoop(this.update, this.draw);

        return this;
    }

    getGameLoop() {
        return this.loop;
    }

    log(what: string | any, data: any = '') {
        /*if(window.env === "dev") {
            console.log(what, object);
        }*/
        console.log(what, data);
    }

    private x: number = 0;

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    update = () => {
        this.x++;
    };

    draw = () => {
        this.clear();

        this.context.font = "22px Helvetica";
        this.context.fillStyle = 'green'
        this.context.fillText(`Frame. ${this.x}`,12,32);
        //console.info(this.x);
    };

}