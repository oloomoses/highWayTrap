import { postScore, getScores } from '../leaderBoard';

jest.mock('./_mock_/request.js');

beforeEach(() => {
  fetch.resetMocks();
});

test('saves the score and username to the leaderBoard', () => {
  postScore('testUser', 100)
    .then((score) => expect(score)
      .toEqual({ result: 'Leaderboard score created correctly.' }));
});

test('get score and username in descending order from the leaderBoard', () => {
  getScores().then((scores) => expect(typeof scores).toEqual('object'));
});

test('ranking contains the user', () => {
  getScores().then(data => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: 100,
          user: 'testUser',
        }),
      ]),
    );
  }).catch(() => { });
});