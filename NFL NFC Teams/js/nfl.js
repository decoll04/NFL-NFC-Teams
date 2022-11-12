function openGameForm() {
    window.open("newGameForm.html", "_blank");
}
  
let newGame = document.getElementById('newGameButton');
newGame.addEventListener('click', openGameForm, false);


