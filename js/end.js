 const username = document.getElementById('username');
 const saveScoreBtn = document.getElementById('saveScoreBtn');
 const finalScore = document.getElementById('finalScore');
 const mostRecentScore = localStorage.getItem('mostRecentScore');

 const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // Save highscore or iniialise the array for first timers.

 const MAX_HIGH_SCORES = 5;

 finalScore.innerText = mostRecentScore;

 username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;     // this enables the save button if character is typed.
 });
 
 saveHighScore = (e) => {
    e.preventDefault();

   const score = {
      score: Math.floor(Math.random() * 100),
      name: username.value
   };
   highScores.push(score);

   // Sorts out new entries into top 5.
   highScores.sort( (a,b) => b.score - a.score); // Implicit return
   highScores.splice(5); // Cut-off at 5 users.

   localStorage.setItem("highScores", JSON.stringify(highScores)); // This makes it perminent highscore for future users.
   window.location.assign("./"); // Moves back to homepage.
};
