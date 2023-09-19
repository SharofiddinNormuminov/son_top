'use strict';

document.querySelector('.uz_language').addEventListener('click', function () {
  language = 'uzb';
  document.querySelector('h1').textContent = "O'ylangan sonni top!";
  document.querySelector('.between').textContent = '1 dan 20 gacha';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.check').textContent = 'Tekshir';
  document.querySelector('.message').textContent = 'Topishni boshla...';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 Rekord: <span class="highscore">0</span>';
});

document.querySelector('.en_language').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').innerHTML =
    '💯 score: <span class="score">20</span>';
  document.querySelector('.label-highscore').innerHTML =
    '🥇 hightscore: <span class="highscore">0</span>';
});

let computerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let language = 'eng';

let engToUzb = {
  '⛔️ No number': '⛔️ Raqam kiritilmadi',
  '📉 Too Hight!': '📉 Katta son!',
  '📈 Too Low!': '📈 Kichik son!',
  '✅ Correct Number': "✅ To'g'ri raqam!",
  '❌ You lost the game!': "❌ O'yinda yutqazdingiz!",
  'Start guessing...': 'Topishni Boshlang...',
};

function showMessage(message) {
  if (language == 'uzb') {
    document.querySelector('.message').textContent = engToUzb[message];
  } else {
    document.querySelector('.message').textContent = message;
  }
}

const NUMBER = document.querySelector('.number');

// document.querySelector('.number').textContent = computerNumber;
document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guessNumber) {
      showMessage('⛔️ No number');
    } else if (guessNumber !== computerNumber) {
      showMessage(
        guessNumber > computerNumber ? '📉 Too Hight!' : '📈 Too Low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('✅ Correct Number');
      NUMBER.textContent = computerNumber;

      // Style
      document.querySelector('body').style.backgroundColor = '#60b347';
      NUMBER.style.width = '25rem';

      highScore = score > highScore ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    showMessage('❌ You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  computerNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  NUMBER.textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  NUMBER.style.width = '15rem';
});
