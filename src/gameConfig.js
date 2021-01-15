import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'index',
  width: 1100,
  height: 530,
  backgroundColor: '#999999',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { x: 200 },
    },
  },
};

export default config;