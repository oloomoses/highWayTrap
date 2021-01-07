import 'phaser';
import config from './gameConfig';
import GameScene from './gameScene';
import BootScene from './bootScene';
import PreloaderScene from './preloaderScene';
import TitleScene from './titleScene';
import OptionsScene from './optionsScene';
import CreditsScene from './creditsScene';


class Game extends Phaser.Game {
    constructor () {
        super(config);
        
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        this.scene.add('Title', TitleScene);
        this.scene.add('Options', OptionsScene);
        this.scene.add('Credits', CreditsScene);
        this.scene.add('Game', GameScene);
        this.scene.start('Game')
    }
}

window.game = new Game();