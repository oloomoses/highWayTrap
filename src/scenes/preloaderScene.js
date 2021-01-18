/* eslint-disable radix */
import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 200, 'logo');

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });

    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image('blueButton1', 'src/assets/blue_button02.png');
    this.load.image('blueButton2', 'src/assets/blue_button03.png');
    this.load.image('box', 'src/assets/grey_box.png');
    this.load.image('checkedBox', 'src/assets/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['src/assets/bgMusic.mp3']);
    this.load.image('tiles', 'src/assets/road.png');
    this.load.tilemapTiledJSON('map', 'src/assets/map.json');
    this.load.image('bike', 'src/assets/motorcycle.png');
    this.load.image('car_black', 'src/assets/car_black.png');
    this.load.image('car_red', 'src/assets/car_red.png');
    this.load.image('car_green', 'src/assets/car_green.png');
    this.load.image('car_blue', 'src/assets/blue_green.png');
    this.load.image('apple', 'src/assets/apple.png');
    this.load.image('banana', 'src/assets/banana.png');
    this.load.image('carrot', 'src/assets/carrot.png');
    this.load.html('form', 'src/assets/form.html');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Credits');
      this.scene.start('Options');
    }
  }
}
