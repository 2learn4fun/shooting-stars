let gameArea = document.getElementById('game-area');

// Exibe as instruções na tela.

let infoScreen = document.createElement('div');
infoScreen.id = 'info-screen';
infoScreen.innerHTML = `
  <article class = "info-card">
    <p>
      Uma chuva de grandes meteoros se aproxima da terra, uma nave equipada com
      um canhão especial será enviada rumo a esta chuva, sua missão como
      integrante da tripulação desta nave é usar este canhão para destruir
      o máximo de meteoros, evitando que eles cheguem a terra.
    </p>
    <br>
    <p><strong>Como jogar</strong>: clique nos meteoros para destruí-lôs.</p>
    <br>
    <div class = "default-button-box">
      <button class = "default-button" id = "continue-button">Começar</button>
    </div>
  </article>
`;

gameArea.appendChild(infoScreen);

let continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click', function(){beginGameplay()});

// Começo da jogatina.

let asteroid1 = document.createElement('img');
asteroid1.id = 'asteroid1';
asteroid1.src = '../assets/asteroid.png';
asteroid1.style.position = 'relative';

let asteroidWaves = 0;

function beginGameplay() {
  gameArea.removeChild(infoScreen);
  gameArea.appendChild(asteroid1);

  newAsteroidRain();
}

function newAsteroidRain() {
  spawnAsteroids();
  setInterval(dropAsteroids, 200);
}

function spawnAsteroids() {
  asteroid1Width = 0;
  asteroid1Rotation = Math.random() * 360;
  asteroid1VerticalPosition = 40;
  asteroid1HorizontalPosition = 48;
  asteroid1VerticalCadence = Math.random() * 4;
  asteroid1.style.rotate = `${asteroid1Rotation}deg`;
  asteroid1.style.width = `${asteroid1Width}vw`;
  asteroid1.style.top = `${asteroid1VerticalPosition}vh`;
  asteroid1.style.left = `${asteroid1HorizontalPosition}vw`;
}

function dropAsteroids() {
  if(asteroidWaves < 5) {
    if(asteroid1Width < 50) {
      asteroid1.style.rotate = `${asteroid1Rotation += 0.50}deg`;
      asteroid1.style.width = `${asteroid1Width += 1}vw`;
      asteroid1.style.top = `${
        asteroid1VerticalPosition +=asteroid1VerticalCadence
      }vh`;
      asteroid1.style.left = `${asteroid1HorizontalPosition +=2}vw`;

      if(asteroid1Width == 50) {
        spawnAsteroids();
        asteroidWaves++;
      }
    };
  }

}