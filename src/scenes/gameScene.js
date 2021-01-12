import 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super();
    }
        
    create() {        
        const map = this.make.tilemap({ key: 'map' });
        const tileset = map.addTilesetImage('road', 'tiles', 32, 32, 0, 0);
        const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0)
        const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
        this.player = this.physics.add.sprite(80, 190, 'bike');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        layer1.setCollisionByProperty({ collides: true });
        this.physics.add.collider(this.player, layer1);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.updateMovement(this.cursors)
    }

    updateMovement(cursors) {
        if (cursors.up.isDown) {
          this.player.setVelocityY(-400);
        } else if (cursors.down.isDown) {
          this.player.setVelocityY(400);          
        }
        
      }
}

export default GameScene;