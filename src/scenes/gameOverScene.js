import Phaser from 'phaser';
import Buttons from '../buttons';
import { postScore } from '../leaderBoard';

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
      .text(xAxisCenter, 90, 'GAME OVER', {
        fontFamily: 'Tahoma',
        fontSize: '70px',
        fill: 'white',
      })
      .setOrigin(0.5);
    gameOver.setShadow(2, 2, 'DarkSlateGray', 5);

    this.add.text(xAxisCenter - 130, 140, 'Enter name', { color: 'white', fontFamily: 'Arial', fontSize: '50px ' });
    const form = this.add.dom(xAxisCenter, 220).createFromCache('form');
    form.setPerspective(800);
    form.addListener('click');
    form.on('click', async (event) => {
      if (event.target.name === 'submit') {
        const inputUsername = form.getChildByName('username');
        if (inputUsername.value !== '') {
          const input = inputUsername.value;
          this.displayScore(xAxisCenter);
          await postScore(input, scoreData)
            .catch(err => err);
          this.playAgainButton = new Buttons(this, xAxisCenter - 200, 430, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
          this.rank = new Buttons(this, xAxisCenter + 200, 430, 'blueButton1', 'blueButton2', 'View Ranks', 'Rank');
        }
      }
    });
  }

  displayScore(xAxisCenter) {
    scoreText = this.add
      .text(xAxisCenter, 280, `Score: ${scoreData}`, {
        fontFamily: 'Tahoma',
        fontSize: '45px',
        fill: 'white',
      })
      .setOrigin(0.5);
    scoreText.setShadow(2, 2, 'DarkSlateGray', 2);
  }
}