import GameOverScene from '../scenes/gameOverScene';

const scene = new GameOverScene();

test('GameOverScene is of type function', () => {
  expect(typeof GameOverScene).toBe('function');
});

test('GameOverScene key name is gameOver', () => {
  expect(scene.sys.config).toBe('gameOver');
});

test('GameOverScene scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});