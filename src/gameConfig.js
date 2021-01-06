import 'phaser';
import GameScene from './gameScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: GameScene
};

export default config;