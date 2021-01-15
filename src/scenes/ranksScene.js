import Phaser from 'phaser';
import Buttons from '../buttons';
import { getScores } from '../leaderBoard';

export default class RanksScene extends Phaser.Scene {
  constructor() {
    super('Rank');
  }

  async create() {
    const xAxisCenter = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const scores = this.add
      .text(xAxisCenter, 40, 'Scores', {
        fontFamily: 'Tahoma',
        fontSize: '40px',
        fill: 'white',
      })
      .setOrigin(0.5);
    scores.setShadow(2, 2, 'DarkSlateGray', 5);

    const title = this.add
      .text(400, 60, 'Num  |  Name  |  Score', {
        fontFamily: 'Tahoma',
        fontSize: '20px',
        fill: 'white',
      });
    title.setShadow(2, 2, 'DarkSlateGray', 2);

    this.score = await getScores().catch(err => err);

    this.sortScore = this.score.sort((a, b) => (a.score > b.score ? -1 : 1));

    for (let i = 0; i <= 10; i += 1) {
      const Text = this.add
        .text(400, 100 + (i * 40), `${i + 1}  |  ${this.sortScore[i].user}  |  ${this.sortScore[i].score} `, {
          fontFamily: 'Tahoma',
          fontSize: '20px',
          fill: 'white',
        });
      Text.setShadow(2, 2, 'DarkSlateGray', 2);
    }

    this.playAgainButton = new Buttons(this, xAxisCenter + 300, 430, 'blueButton1', 'blueButton2', 'Play Again', 'Title');
  }
}