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
      o máximo de meteoros, evitando assim, com que eles cheguem a terra.
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

asteroid1.addEventListener('click', function(){destroyAsteroid()});

var asteroidsVelocity = 0.50;
let asteroidWaves = 0;
let score = 0;

function beginGameplay() {
  gameArea.removeChild(infoScreen);
  gameArea.appendChild(asteroid1);

  newAsteroidRain();
}

function newAsteroidRain() {
  spawnAsteroids();
  setInterval(dropAsteroids, 25);
}

function spawnAsteroids() {
  asteroid1.src = '../assets/asteroid.png';
  asteroid1Width = 0;
  asteroid1Rotation = Math.random() * 360;
  asteroid1VerticalPosition = 40;
  asteroid1HorizontalPosition = 48;
  asteroid1Direction = Math.round(Math.random() * 3);
  asteroid1.style.rotate = `${asteroid1Rotation}deg`;
  asteroid1.style.width = `${asteroid1Width}vw`;
  asteroid1.style.top = `${asteroid1VerticalPosition}vh`;
  asteroid1.style.left = `${asteroid1HorizontalPosition}vw`;
}

function dropAsteroids() {
  if(asteroidWaves < 60) {
    if(asteroid1Width < 50) {
      asteroid1.style.rotate = `${asteroid1Rotation += 5}deg`;
      asteroid1.style.width = `${asteroid1Width += asteroidsVelocity/2}vw`;
      if(asteroid1Direction == 0) {
        asteroid1.style.top = `${asteroid1VerticalPosition +=0}vh`;
        asteroid1.style.left = `${asteroid1HorizontalPosition +=asteroidsVelocity}vw`;
      }
      if(asteroid1Direction == 1) {
        asteroid1.style.top = `${asteroid1VerticalPosition +=asteroidsVelocity/2}vh`;
        asteroid1.style.left = `${asteroid1HorizontalPosition -=asteroidsVelocity}vw`;
      }
      if(asteroid1Direction == 2) {
        asteroid1.style.top = `${asteroid1VerticalPosition -=asteroidsVelocity}vh`;
        asteroid1.style.left = `${asteroid1HorizontalPosition +=asteroidsVelocity}vw`;
      }
      if(asteroid1Direction == 3) {
        asteroid1.style.top = `${asteroid1VerticalPosition -=asteroidsVelocity*1.50}vh`;
        asteroid1.style.left = `${asteroid1HorizontalPosition -=asteroidsVelocity}vw`;
      }

      if(asteroid1Width == 50) {
        asteroidWaves++;
        if(asteroidWaves == 8) {asteroidsVelocity=1;};
        if(asteroidWaves == 28) {asteroidsVelocity=1.25;};
        if(asteroidWaves == 50) {asteroidsVelocity=0.50;};

        if(asteroidWaves == 60) {
          gameArea.removeChild(asteroid1);
          finishLevel();
        } else {spawnAsteroids();};
      }
    };
  }

}

function destroyAsteroid() {
  asteroid1.src = '../assets/explosion.gif';
  score++;
}

function finishLevel() {
  infoScreen.innerHTML = `
  <article class = "info-card">
    <p>
      Durante o dia não conseguimos ver as estrelas porque quando a luz do sol
      atravessa a atmosfera da terra ela se dispersa na cor azul aos nossos
      olhos, e durante o nascer e pôr do sol o céu muda de cor pois a luz do
      sol precisa atravessar uma camada mais grossa da atmosfera da terra até
      chegar aos nossos olhos, fazendo com que o céu fique em tons de 
      amarelo, laranja e vermelho. Já de noite, quando sol está do outro lado
      da terra, conseguimos ver o céu como ele realmente é, e o mesmo efeito
      acontece com a luz da lua, estrelas e planetas quando se aproximam do 
      horizonte e mudam de cor. Também é por isso que antes das 10:00 da manhã
      e depois das 4:00 da tarde a luz do sol chega mais fraca até nós, fazendo
      com que esse seja um horário mais adequado para se tomar sol.
    </p>
    <br>
    <br>
    <img src = "../assets/learn-more.webp" class = "learn-more-gif">
    <a href = 
      "https://brasilescola.uol.com.br/fisica/por-que-ceu-azul.htm#:~:text=O%20
      c%C3%A9u%20%C3%A9%20azul%20porque,bem%20refletida%20%C3%A9%20a%20azul."
      target = "blank"
    >
      Saiba mais
    </a>
    <br>
    <div class = "default-button-box">
      <a href = "../index.html" class = "default-button" id = "continue-button">
        Próximo nível
      </a>
    </div>
  </article>
`;

gameArea.appendChild(infoScreen);
}