// code your solution here
function superbowlWin(record) {
    // Use the find method to look for an object with result property equal to "W"
    const winningGame = record.find(game => game.result === "W");
  
    // Check if a winning game was found, and return the corresponding year or undefined
    return winningGame ? winningGame.year : undefined;
  }
  
  // Example usage:
  const superBowlRecord = [
    { year: 2019, result: "L" },
    { year: 2020, result: "W" },
    { year: 2021, result: "L" },
  ];
  
  const winningYear = superbowlWin(superBowlRecord);
  console.log(winningYear); // Output: 2020
  