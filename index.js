const validateLineup = (lineup) => {
  let final = true;
  let totalSalary = 0;
  // make a counter object of players on each team.
  let teamPlayerCount = lineup.reduce((acc, val) => {
    //if teamId key-value pair doesnt exist, initialize it (the teamId as a key and equal its value to 1).
      if (acc[val.teamId]=== undefined) {
        acc[val.teamId] = 1;
     // if key value pair already exists, add 1 to the team's count.
      } else {
        acc[val.teamId]++;
      }
      return acc;
  }, {})
  // make a counter object of games played by each player.
  let gamePlayerCount = lineup.reduce((acc, val) => {
    //if gameId key-value pair doesnt exist, initialize it (the gameId as a key and equal its value to 1).
      if (acc[val.gameId]=== undefined) {
        acc[val.gameId] = 1;
  // if key value pair already exists, add 1 to the game's count.
      } else {
        acc[val.gameId]++;
      }
      return acc;
  }, {})
  // make a counter object for each position in the lineup.
  let positionCount = lineup.reduce((acc, val) => {
  //if position key-value pair doesnt exist, initialize it (the position as a key and equal its value to 1).
      if (acc[val.position]=== undefined) {
        acc[val.position] = 1;
  // if key value pair already exists, add 1 to the position's count.
      } else {
        acc[val.position]++;
      }
      return acc;
  }, {})
  // case 1: loop through lineup array and add each players salary to function-scoped totalSalary variable
    for (let i = 0; i < lineup.length; i++) {
      totalSalary += lineup[i].salary; 
  }   if( totalSalary > 45000){
    
    final = false;
    // if first condition is met, move on to case 2.
  } else {
   // case 2: get an array of teamPlayerCounts values (using Object.values)
   //filter through that array and return all of those counts that are > 2. 
   // check to see if there are any values in that array (using .length) and if there are, return false.
    if (Object.values(teamPlayerCount).filter(count => count > 2).length) {
      final = false;
      // if second condition is met, move on to case 3.
    } else { 
      // case 3: get an array of gamePlayerCounts values (using Object.values)
   //filter through that array and return all of those counts that are > 3. 
   // check to see if there are any values in that array (using .length) and if there are, return false.
      if (Object.values(gamePlayerCount).filter(count => count > 3).length) {
      
      final = false;
      // if third condition is met, move on to case 4.
    } else { 
      // if any one positin count is wrong, return false. 
      if (positionCount['OF'] !== 3 || positionCount['P'] !== 1 ||
        positionCount['C'] !== 1 ||
        positionCount['1B'] !== 1 ||
        positionCount['2B'] !== 1 ||
        positionCount['3B'] !== 1 ||
        positionCount['SS'] !== 1) {
           final = false;
        } 
    }
    } 
      
  } return final;
  }
  
  


module.exports = validateLineup