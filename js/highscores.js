const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Iterate through each score and add Li to our highscores page.
highScoresList.innerHTML = 
    highScores.map( score => {
    return (`<li class="high-score">${score.name.toUpperCase()} - ${score.score}</li>`);
}).join(""); 