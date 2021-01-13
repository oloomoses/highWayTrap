import Phaser from 'phaser';
import Buttons from '../buttons';

let scoreData;
let scoreText;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create(score) {
    if (typeof score !== 'number') scoreData = 0;
    else scoreData = score;

    const xAxisCenter = this.cameras.main.worldView.x + this.cameras.main.width / 2;

    const gameOver = this.add
      .text(xAxisCenter, 160, 'GAME OVER', {
        fontFamily: 'Tahoma',
        fontSize: '80px',
        fill: 'white',
      })
      .setOrigin(0.5);
    gameOver.setShadow(2, 2, 'DarkSlateGray', 5);

    scoreText = this.add
      .text(xAxisCenter, 280, `Score: ${scoreData}`, {
        fontFamily: 'Tahoma',
        fontSize: '45px',
        fill: 'white',
      })
      .setOrigin(0.5);
    scoreText.setShadow(2, 2, 'DarkSlateGray', 2);

    this.playAgainButton = new Buttons(this, xAxisCenter, 430, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
  }
}