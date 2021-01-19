import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);

    this.scene.physics.world.enable(this);

    this.setCollideWorldBounds(true);
  }

  update(cursors) {
    this.updateMovement(cursors);
  }

  updateMovement(cursors) {
    if (cursors.left.isDown) {
      this.setVelocityX(-300);
    } else if (cursors.right.isDown) {
      this.setVelocityX(300);
    } else if (cursors.up.isDown) {
      this.setVelocityY(-300);
    } else if (cursors.down.isDown) {
      this.setVelocityY(300);
    }
  }
}