import 'phaser';

class GameScene extends Phaser.Scene
{
    constructor () {
        super();
    }

    preload () {
        this.load.image('logo', 'src/assets/logo.png');
    }
      
    create () {
        this.add.image(400, 150, 'logo')
    }
}

export default GameScene;