import Phaser from 'phaser';
import config from './gameConfig';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import PreloaderScene from './scenes/preloaderScene';
import TitleScene from './scenes/titleScene';
import OptionsScene from './scenes/optionsScene';
import CreditsScene from './scenes/creditsScene';
import GameOverScene from './scenes/gameOverScene';
import RanksScene from './scenes/ranksScene';
import Model from './model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.add('gameOver', GameOverScene);
    this.scene.add('Rank', RanksScene);
    this.scene.start('Boot');

    const model = new Model();
    this.globals = { model, bgMusic: null };
  }
}

window.game = new Game();