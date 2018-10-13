export default class Doom {
    private readonly context: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private speed: number = 4;
    private keys: any[] = [];

    constructor(context: CanvasRenderingContext2D) {
        this.context = context;
        this.x = 50;
        this.y = 50;

        this.keyboardEvents();
    }

    keyboardEvents() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
        });
        window.addEventListener('keyup', (e) => {
            delete this.keys[e.key];
        });
        window.addEventListener('blur', (e) => {
            this.keys = [];
        });
    }

    updatePosition(which, amount) {
        if(which === 'x') {
            this.x += (amount * this.speed);
        } else {
            this.y += (amount * this.speed);
        }
    }

    update() {
        if(this.keys['d']) { this.updatePosition('x', 1); }
        if(this.keys['a']) { this.updatePosition('x', -1); }
        if(this.keys['w']) { this.updatePosition('y', -1); }
        if(this.keys['s']) { this.updatePosition('y', 1); }
    }

    draw() {
        this.context.font = "22px Helvetica";
        this.context.fillStyle = 'red';
        this.context.fillText(`@`,this.x,this.y);
    }
}