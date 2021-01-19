import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  parent: 'index',
  width: 1030,
  height: 520,
  backgroundColor: '#333333',
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { x: 400 },
    },
  },
};

export default config;