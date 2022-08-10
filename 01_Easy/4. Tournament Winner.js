function tournamentWinner(competitions, results) {
  // Scoreboard Creation
    // Flattens the nested arrays and removes duplicates 
  let teams = [...new Set(competitions.flat())]      // O(n)?
  let scores = teams.reduce((a,v) => (               // O(n)?
    { ...a, [v]: 0}), {}
  )

  let counter = 0;

  // Calculate Points
  results.forEach(item => {                          // O(n)
    if (item === 0) { // 0 - away team one (position 1)
      scores[competitions[counter][1]] += 3;
    } else { // 1 - home team won (position 0)
      scores[competitions[counter][0]] += 3;
    }
    counter++;
  })

  // Determine Winner
  let winner;
  let winningPts = 0;
  
  for (key in scores) {                              // O(n)
    if (scores[key] >= winningPts) {
      winningPts = scores[key]
      winner = key;
    }
  }

  console.log(scores)  
  console.log(winner,"-", winningPts)  
  
  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;


/* NOTES

*** Determine which team won the tournament ***

- No ties
- One winner
- 3 pts for a win
- 0 pts for a loss

[homeTeam, awayTeam] 
    - 1 = homeTeam wins 
    - 0 = awayTeam wins


  Join all arrays in competitions
  Create scoreboard in a hashmap
  Calculate points
  Determine winner

*/
