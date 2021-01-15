import Phaser from 'phaser';
import Buttons from '../buttons';
import postScore from '../leaderBoard';

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

    this.add.text(xAxisCenter - 100, 150, 'Enter name:', { color: 'white', fontFamily: 'Arial', fontSize: '50px ' });
    const element = this.add.dom(400, 180).createFromCache('form');

    element.setPerspective(800);

    element.addListener('click');

    element.on('click', function (event) {
      if (event.target.name === 'loginButton') {
        const inputUsername = this.getChildByName('username');
        const inputPassword = this.getChildByName('password');

        //  Have they entered anything?
        if (inputUsername.value !== '' && inputPassword.value !== '') {
          //  Turn off the click events
          this.removeListener('click');
        }
      }
    });

    // this.add.text(xAxisCenter - 100, 100, 'Enter name:', { color: 'white', fontFamily: 'Arial', fontSize: '50px ' });
    // const form = this.add.dom(400, 180).createFromCache('input_form');
    // form.setPerspective(400);
    // form.addListener('click');
    // form.on('click', async (event) => {
    //   if (event.target.name === 'submit') {
    //     const inputUsername = form.getChildByName('username');
    //     if (inputUsername.value !== '') {
    //       const input = inputUsername.value;
    //       this.displayScore(xAxisCenter);
    //       await postScore(input, scoreData)
    //         // eslint-disable-next-line no-console
    //         .catch(err => console.error(err));
    //       form.scene.scene.stop('GameOver');
    //       form.scene.scene.start('Title');
    //     }
    //   }
    // });

    this.playAgainButton = new Buttons(this, xAxisCenter, 430, 'blueButton1', 'blueButton2', 'Play Again', 'Game');
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