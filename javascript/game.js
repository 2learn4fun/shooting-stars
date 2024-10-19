let gameArea = document.getElementById('game-area');

let asteroid1 = document.createElement('img');
asteroid1.id = 'asteroid1';
asteroid1.src = '../assets/asteroid.png';

let asteroid1Width = 0;
let asteroid1Rotation = Math.random() * 360;
let asteroid1VerticalPosition = 40;
let asteroid1HorizontalPosition = 48;
let asteroid1VerticalCadence = Math.random() * 4;

let asteroid2 = document.createElement('img');
asteroid2.id = 'asteroid2';
asteroid2.src = '../assets/asteroid.png';

let asteroid2Width = 0;
let asteroid2Rotation = Math.random() * 360;
let asteroid2VerticalPosition = 40;
let asteroid2HorizontalPosition = 48;

let asteroid3 = document.createElement('img');
asteroid3.id = 'asteroid3';
asteroid3.src = '../assets/asteroid.png';

let asteroid3Width = 0;
let asteroid3Rotation = Math.random() * 360;
let asteroid3VerticalPosition = 40;
let asteroid3HorizontalPosition = 48;

main();

function main() {
  newAsteroidRain();
}

function newAsteroidRain() {

  asteroid1.style.position = 'relative';
  asteroid1.style.rotate = `${asteroid1Rotation}deg`;
  asteroid1.style.width = `${asteroid1Width}vw`;
  asteroid1.style.top = `${asteroid1VerticalPosition}vh`;
  asteroid1.style.left = `${asteroid1HorizontalPosition}vw`;

  asteroid2.style.position = 'relative';
  asteroid2.style.rotate = `${asteroid2Rotation}deg`;
  asteroid2.style.width = `${asteroid2Width}vw`;
  asteroid2.style.top = `${asteroid2VerticalPosition}vh`;
  asteroid2.style.left = `${asteroid2HorizontalPosition}vw`;

  asteroid3.style.position = 'relative';
  asteroid3.style.rotate = `${asteroid3Rotation}deg`;
  asteroid3.style.width = `${asteroid3Width}vw`;
  asteroid3.style.top = `${asteroid3VerticalPosition}vh`;
  asteroid3.style.left = `${asteroid3HorizontalPosition}vw`;
  
  gameArea.appendChild(asteroid1);
  gameArea.appendChild(asteroid2);
  gameArea.appendChild(asteroid3);

  setInterval(dropAsteroids, 200);

}

function firstAsteroidWave() {
  if(asteroid1Width < 50) {
    asteroid1.style.rotate = `${asteroid1Rotation += 0.50}deg`;
    asteroid1.style.width = `${asteroid1Width += 1}vw`;
    asteroid1.style.top = `${asteroid1VerticalPosition +=asteroid1VerticalCadence}vh`;
    asteroid1.style.left = `${asteroid1HorizontalPosition +=2}vw`;
  };
}


function dropAsteroids() {

  if(asteroid1Width < 50) {
    asteroid1.style.rotate = `${asteroid1Rotation += 0.50}deg`;
    asteroid1.style.width = `${asteroid1Width += 1}vw`;
    asteroid1.style.top = `${asteroid1VerticalPosition +=asteroid1VerticalCadence}vh`;
    asteroid1.style.left = `${asteroid1HorizontalPosition +=2}vw`;
  };

  if(asteroid2Width < 70) {
    asteroid2.style.rotate = `${asteroid2Rotation += 0.50}deg`;
    asteroid2.style.width = `${asteroid2Width += 1}vw`;
    asteroid2.style.top = `${asteroid2VerticalPosition -=3}vh`;
    asteroid2.style.left = `${asteroid2HorizontalPosition -=2}vw`;
  };

  if(asteroid3Width < 70) {
    asteroid3.style.rotate = `${asteroid3Rotation += 0.50}deg`;
    asteroid3.style.width = `${asteroid3Width += 1}vw`;
    asteroid3.style.top = `${asteroid3VerticalPosition +=2}vh`;
    asteroid3.style.left = `${asteroid3HorizontalPosition -=4}vw`;
  };
}

