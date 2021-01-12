import 'phaser';
import Player from '../sprites/player';
import Foods from '../sprites/foods';
import Cars from '../sprites/cars';

let score = 0;
let lives = 3;
let scoreText;
let livesText;
let dropDelay = 1000;

class GameScene extends Phaser.Scene {
  constructor() {
    super();

    // this.avoidCars = this.avoidCars.bind(this);
    // this.collectFoods = this.collectFoods.bind(this);
  }
      
  create() {
    score = 0;
    lives = 3;
    
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('road', 'tiles', 32, 32, 0, 0);
    const layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0)
    const layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0);
    this.player = new Player(this, 80, 190, 'bike');

    layer1.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, layer1);

    // score text 
    scoreText = this.add.text(20, 15, "score: 0", {
      fontFamily: "Tahoma",
      fontSize: "30px",
      fill: "white",
    });

    scoreText.setShadow(2, 2, "DarkSlateGray", 2);

    // lives box 
    livesText = this.add.text(16, 60, "      ", {
      fontSize: "36px",
      fill: "#000",
      backgroundColor: "white",
    });

    this.createGroups();


    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.updateMovement(this.cursors)
  }

  createCars(x, y) {
    let cars = ["car_black", "car_green"];
    let randomIdx = Math.floor(Math.random() * 3);
    this.carsGroup.create(x, y, cars[randomIdx]).setScale(0.5);
  }

  createFoods(x, y) {
    let foods = ["apple", "banana"];
    let randomIdx = Math.floor(Math.random() * 3);
    this.foodsGroup.create(x, y, foods[randomIdx]).setScale(0.09);
  }

  createGroups() {
    this.foodsGroup = this.physics.add.group({ classType: Foods });
    // Drop one edible food immediately when game starts

    const codinates = [180, 330]
    let foodsYaxis = codinates[Math.floor(Math.random() * codinates.length)];
    this.createFoods(0, foodsYaxis);

    this.carsGroup = this.physics.add.group({ classType: Cars });

    // continually make objects fall using timer
    this.time.addEvent({
      delay: dropDelay,
      callback: this.itemDrop, //calling the helper function
      callbackScope: this,
      loop: true,
    });
  }

  itemDrop() {
    const codinates = [180, 330]
    let yAxis = codinates[Math.floor(Math.random() * codinates.length)];
    let foodOrCars = Math.floor(Math.random() * 2);
    // create and drop inedible food 1/3 of the time
    if (foodOrCars === 1) {
      this.createCars(20, yAxis);      
      // create and drop an edible food 2/3 of the time
    } else {      
      this.createFoods(20, yAxis);
    }
  }
}

export default GameScene;