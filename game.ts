import './src/styles/main.css';
import Game from "./src/engine/Game";

const canvas = document.getElementById('game-screen');
const venom = new Game(canvas as HTMLCanvasElement);

venom.log('Venom initialized');
venom.getGameLoop().start();