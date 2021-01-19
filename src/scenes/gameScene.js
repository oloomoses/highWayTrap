/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import Player from '../sprites/player';
import Foods from '../sprites/foods';
import Cars from '../sprites/cars';

let score = 0;
let lives = 3;
let scoreText;
let livesText;
const dropDelay = 400;

class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');

    this.avoidCars = this.avoidCars.bind(this);
    this.collectFoods = this.collectFoods.bind(this);
  }

  create() {
    score = 0;
    lives = 3;

    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('road', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0);
    this.player = new Player(this, 950, 190, 'bike');

    layer1.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, layer1);

    scoreText = this.add.text(20, 15, 'score: 0', {
      fontFamily: 'Tahoma',
      fontSize: '30px',
      fill: 'white',
    });

    scoreText.setShadow(2, 2, 'DarkSlateGray', 2);

    livesText = this.add.text(16, 60, 'Lives: 3', {
      fontSize: '36px',
      fill: '#000',
      backgroundColor: 'transparent',
    });

    this.createGroups();

    this.cursors = this.input.keyboard.createCursorKeys();

    this.createCollisions();
  }

  update() {
    this.player.updateMovement(this.cursors);
  }

  createCars(x, y) {
    const cars = ['car_black', 'car_green', 'car_red'];
    const randomIdx = Math.floor(Math.random() * 3);
    this.carsGroup.create(x, y, cars[randomIdx]).setScale(0.6);
  }

  createFoods(x, y) {
    const foods = ['apple', 'banana', 'carrot'];
    const randomIdx = Math.floor(Math.random() * 3);
    this.foodsGroup.create(x, y, foods[randomIdx]).setScale(0.09);
  }

  createGroups() {
    this.foodsGroup = this.physics.add.group({ classType: Foods });

    const codinates = [180, 330];
    const foodsYaxis = codinates[Math.floor(Math.random() * codinates.length)];
    this.createFoods(0, foodsYaxis);

    this.carsGroup = this.physics.add.group({ classType: Cars });

    this.time.addEvent({
      delay: dropDelay,
      callback: this.dropItems,
      callbackScope: this,
      loop: true,
    });
  }

  dropItems() {
    const codinates = [180, 330];
    const yAxis = codinates[Math.floor(Math.random() * codinates.length)];
    const foodOrCars = Math.floor(Math.random() * 3);

    if (foodOrCars === 1) {
      this.createFoods(20, yAxis);
    } else {
      this.createCars(20, yAxis);
    }
  }

  createCollisions() {
    this.physics.add.overlap(
      this.player,
      this.foodsGroup,
      this.collectFoods,
      null,
      this,
    );

    this.physics.add.overlap(
      this.player,
      this.carsGroup,
      this.avoidCars,
      null,
      this,
    );
  }

  collectFoods(player, foods) {
    player.clearTint();
    foods.disableBody(true, true);
    score += 10;
    scoreText.setText(`score: ${score}`);
  }

  avoidCars(player, cars) {
    player.setTint(0xce6161);
    cars.disableBody(true, true);
    lives -= 1;

    livesText.setText(`Lives: ${lives}`);

    if (lives === 0) {
      this.scene.start('gameOver', score);
    }
  }
}

export default GameScene;