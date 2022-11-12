let gameDate = document.getElementById('gameDate');
    
let homeTeam = document.getElementById('homeTeamList');

let awayTeam = document.getElementById('awayTeamList');

let homeTeamScore = document.getElementById('homeTeamPoints');

let awayTeamScore = document.getElementById('awayTeamPoints');

let output = document.getElementById('output');

let message = '';

let games = [];

function Game (date, homeTeam, awayTeam, homeTeamPoints, awayTeamPoints) {
     this.date = date;
     this.homeTeam = homeTeam;
     this.awayTeam = awayTeam;
     this.homeTeamPoints = homeTeamPoints;
     this.awayTeamPoints = awayTeamPoints;
    }  


function createNewGame() {
    const newGame = new Game(gameDate, homeTeam, awayTeam, homeTeamScore, awayTeamScore);
        message = '<table><tr><th>Date</th><th>Home Team</th><th>Away Team</th><th>Home Team Points</th><th>Home Team Points</th></tr>';
        message += '<tr><td>' + newGame.date.value + '</td>';
        message += '<td>' + newGame.homeTeam.value + '</td>';
        message += '<td>' + newGame.awayTeam.value + '</td>';
        message += '<td>' + newGame.homeTeamPoints.value + '</td>';
        message += '<td>' + newGame.awayTeamPoints.value + '</td></tr>';
        message += '</tr></table>';
        output.innerHTML = message;
    }

let inputNewGame = document.getElementById('createGame');
inputNewGame.addEventListener('click', createNewGame, false);