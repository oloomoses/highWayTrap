import Phaser from 'phaser';
import Buttons from '../buttons';
import { getScore } from '../leaderBoard';

let scoreText;

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    const xAxisCenter = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const gameOver = this.add
      .text(xAxisCenter, 90, 'Scores', {
        fontFamily: 'Tahoma',
        fontSize: '80px',
        fill: 'white',
      })
      .setOrigin(0.5);
    gameOver.setShadow(2, 2, 'DarkSlateGray', 5);

    scoreText = this.add
      .text(xAxisCenter, 280, 'Score: ', {
        fontFamily: 'Tahoma',
        fontSize: '15px',
        fill: 'white',
      })
      .setOrigin(0.5);
    scoreText.setShadow(2, 2, 'DarkSlateGray', 2);

    this.playAgainButton = new Buttons(this, xAxisCenter - 200, 430, 'blueButton1', 'blueButton2', 'Play Again', 'title');
  }
}