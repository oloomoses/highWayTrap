import 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'index',
  width: 1100,
  height: 530,
  backgroundColor: '#999999',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: 0,
    }
  }
};

export default config;