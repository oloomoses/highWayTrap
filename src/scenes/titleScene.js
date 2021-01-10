import 'phaser';
import Buttons from '../buttons';
import config from '../gameConfig';

export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }

  create () {
    this.gameButton = new Buttons(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
 
    this.optionsButton = new Buttons(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options');
 
    this.creditsButton = new Buttons(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
 

    this.model = this.sys.game.globals.model;
    
    if (this.model.musicOn && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

  }

};