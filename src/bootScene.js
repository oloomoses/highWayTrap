import 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    this.load.image('logo', 'assets/gameLogo.png')
  }

  create() {
    this.scene.start('Preloader');
  }
}

export default BootScene;