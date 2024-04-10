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
    // console.log(word);
    // console.log(simpleScorer(word));
    return word;
   };
   // let newWord = initialPrompt();
   
   // let oldScrabbleScorerPointValue = oldScrabbleScorer(newWord);

function simpleScorer(newWord){
   console.log(newWord);
   newWord = newWord.toUpperCase();
   pointValue = newWord.length
   return pointValue;
};

// let simpleScorerPointValue = simpleScorer(newWord);



let simpleScorerObject = {
   name: "Simple Score",
   description: "Each letter is worth 1 point.",
   scoreFunction: simpleScorer
};

let scrabbleScorer;

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
   return pointValue;
};

// let vowelBonusScorerPointValue = vowelBonusScorer(newWord);

let vowelBonusScorerObject = {
   name: "Bonus Vowels",
   description: "Vowels are 3 pts, consonants are 1 pt.",
   scoreFunction: vowelBonusScorer
};

let newPointStructure;

let scrabbleScorerObject = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scoreFunction: oldScrabbleScorer
};

const scoringAlgorithms = [simpleScorerObject, vowelBonusScorerObject, scrabbleScorerObject];

function scorerPrompt() {
   let num = input.question("Select scoring type: \n0) Simple \n1) Vowel Bonus \n2) Traditional\nEnter 0, 1, or 2: ");
      // if (num = 0){
      //    scoringAlgorithms[0].scoreFunction(newWord);
      //    console.log(`Score for ${newWord} is ${simpleScorerObject.scoreFunction(newWord)}`);
      // }  else if (num = 1){
      //    scoringAlgorithms[1].scoreFunction(newWord);
      //    console.log(`Score for ${newWord} is ${vowelBonusScorerPointValue}`);
      // }  else if (num = 2){
      //    scoringAlgorithms[2].scoreFunction(newWord);
      //    console.log(`Score for ${newWord} is ${oldScrabbleScorerPointValue}`);
      // }  else {
      //    console.log("Invalid input.");
      // }
      // console.log(scorerPrompt(num))
      return scoringAlgorithms[Number(num)];

};

// let scoreSelected = scorerPrompt(newWord)

function transform() {};

function runProgram() {
   let newWord = initialPrompt();
   // console.log(newWord);
   let scoreSelected = scorerPrompt(newWord);
   console.log(scoreSelected.scoreFunction(newWord));
   // let vowelBonusScorerPointValue = vowelBonusScorer(newWord);
   // let simpleScorerPointValue = simpleScorer(newWord);

   
   

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
