let gameArea = document.getElementById('game-area');

let infoScreen = document.createElement('div');
infoScreen.id = 'info-screen';
infoScreen.innerHTML = `
  <article class = "info-card">
    <h3>Minha pontuação</h2>
    <br>
    <p><strong>Nível 1:</strong> ${localStorage.getItem("level1Score")}</p>
    <br>
    <div class = "default-button-box">
      <a 
        href= "../index.html" 
        class = "default-button" 
        id = "continue-button"
      >
        Voltar
      </a>
    </div>
  </article>
`;

gameArea.appendChild(infoScreen);