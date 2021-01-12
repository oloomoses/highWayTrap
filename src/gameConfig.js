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
      debug: true,
      gravity: { x: 50 },
    }
  }
};

export default config;