let gameArea = document.getElementById('game-area');

let infoScreen = document.createElement('article');
infoScreen.id = 'info-screen';
infoScreen.innerHTML = `
  <article class = "info-card">
    <p>
      Uma chuva de meteoros se aproxima da terra, uma nave equipada com um
      canhão especial será enviada rumo a esta chuva, sua missão como
      integrante da tripulação desta nave é usar este canhão para destruir
      o máximo de meteoros para que eles causem o menor dano possível a terra.
      <br>
      <br>
      <strong>Como jogar</strong>: clique nos meteoros para destruí-lôs.
    </p>
    <br>
    <div class = "default-button-box">
      <button class = "default-button">Continuar</button>
    </div>
  </article>
`;

gameArea.appendChild(infoScreen);