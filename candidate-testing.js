const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName(user) {
user = input.question("What is your name? ");
candidateName = user

}

  // TODO 1.1b: Ask for candidate's name //


 
 
function askQuestion(qa1) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    qa1 = input.question(question);
    candidateAnswer = qa1;

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (candidateAnswer === correctAnswer) {
console.log("You are correct!!");
}
  else {
    console.log("You are incorrect. Try Again.");
  }

  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};