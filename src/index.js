import 'phaser';
import config from './gameConfig';
import GameScene from './gameScene';


class Game extends Phaser.Game {
    constructor () {
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.start('Game')
    }
}

window.game = new Game();