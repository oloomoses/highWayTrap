import RanksScene from '../scenes/ranksScene';

const scene = new RanksScene();

test('RanksScene is of type function', () => {
  expect(typeof RanksScene).toBe('function');
});

test('RanksScene key name is Rank', () => {
  expect(scene.sys.config).toBe('Rank');
});

test('RanksScene scene is not undefined', () => {
  expect(scene.sys.config).not.toBe(undefined);
});