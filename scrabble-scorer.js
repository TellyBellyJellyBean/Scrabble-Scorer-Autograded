// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(newWord) {
	newWord = newWord.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < newWord.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(newWord[i])) {
			letterPoints += `Points for '${newWord[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

 
 // your job is to finish writing these functions and variables that we've named //
 // don't change the names or your program won't work as expected. //
 
 function initialPrompt() {
    console.log("Let's play some scrabble!");
    let word = input.question("Enter a word to score: ");
    return word;
   };

function simpleScorer(newWord){
   console.log(newWord); 
   newWord = newWord.toUpperCase();
   pointValue = newWord.length
   console.log(`Score for '${newWord}': ${pointValue}`)
   return pointValue;
};

let simpleScorerObject = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scoreFunction: simpleScorer
};

let newPointStructure = transform(oldPointStructure);

function scrabbleScorer(newWord){
   newWord = newWord.toUpperCase();
   let pointValue = 0
	for (let i = 0; i < newWord.length; i++) {
 
	  for (const key in newPointStructure) {
		 if (key.includes(newWord[i])) {
          pointValue += newPointStructure[key];
         }      
      }
	}
   return `Score for '${newWord}': ${pointValue}`;

};

function vowelBonusScorer(newWord){
   newWord = newWord.toUpperCase();
   let pointValue = 0;
   let vowels = ["A","E","I","O","U"];
   for (i = 0; i < newWord.length; i++)
   if (vowels.includes(newWord[i])){
      pointValue += 3;
   }  else {
      pointValue += 1;
   }
   return `Score for '${newWord}': ${pointValue}`;
};

let vowelBonusScorerObject = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scoreFunction: vowelBonusScorer
};

let scrabbleScorerObject = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scoreFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, scrabbleScorerObject];

function scorerPrompt() {
   let num = input.question("Select scoring type: \n0) Simple \n1) Vowel Bonus \n2) Traditional\nPlease enter 0, 1, or 2 to select scoring type: ");
      return scoringAlgorithms[Number(num)];

};

function transform(oldPointStructure) {
   let newPointStructure = {};
   for (let key in oldPointStructure){
      let newPointStructureKeys = oldPointStructure[key];
      for (i = 0; i < newPointStructureKeys.length; i++){
         newPointStructure[newPointStructureKeys[i]] = Number(key)};
   }
   return newPointStructure;
};

function runProgram() {
   let newWord = initialPrompt();
   console.log(newWord);
   let scoreSelected = scorerPrompt(newWord);
   console.log(scoreSelected.scoreFunction(newWord));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
