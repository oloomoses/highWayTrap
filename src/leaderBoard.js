import 'regenerator-runtime';

// const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kVKYwHN0v6CUwPbrtOJ4/scores/';

const postScore = async (user, score) => {
  const userScore = { user, score };
  const data = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  };

  const response = await fetch(url, data);
  const result = await response.json();
  return result;
};

const getScores = async () => {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const scores = await response.json();
  return scores.result;
};

export { getScores, postScore };