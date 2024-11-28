const tigrinho = document.getElementById('tigrinho');
const gameArea = document.getElementById('gameArea');
const obstacle = document.getElementById('obstacle');
let isJumping = false;
let gravity = 2;
let position = 0;

// Controle do tigrinho (pular)
document.addEventListener('keydown', (e) => {
  if (e.key === ' ') {
    jump();
  }
});

function jump() {
  if (isJumping) return;
  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      // Descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= gravity;
          tigrinho.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 20;
      tigrinho.style.bottom = position + 'px';
    }
  }, 20);
}

// Detectar colisão
setInterval(() => {
  const obstacleLeft = obstacle.offsetLeft;
  const tigrinhoBottom = parseInt(window.getComputedStyle(tigrinho).bottom);

  if (obstacleLeft > 0 && obstacleLeft < 50 && tigrinhoBottom < 50) {
    alert('Você perdeu!');
    obstacle.style.animation = 'none';
  }
}, 10);
