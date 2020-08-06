'use strict';

function main() {

  // function to ensure a valid yes or no response
  function verifyResponse(answer) {
    if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      return 'yes';
    } else if (answer.toLowerCase()=== 'no' || answer.toLowerCase() === 'n') {
      return 'no';
    } else {
      return 'reprompt';
    }
  }

  // collecting visitor name
  function visitorName() {
    let visitorName = prompt('Welcome to my About Me page. What is your name?');
    console.log('Our visitor is named ' + visitorName);
    return visitorName;
  }

  // game response and initiation
  function doYouWantToBuildASnowman() {
    let gameResponse = prompt('Hi ' + visitor + '! Do you want to play a guessing game?');
    console.log(visitor + ' said ' + gameResponse + ' to playing a game');
    let verifiedGameResponse = verifyResponse(gameResponse);
    while(verifiedGameResponse === 'reprompt') {
      gameResponse = prompt('please answer with yes or no. Do you want to play a guessing game?');
      verifiedGameResponse = verifyResponse(gameResponse);
    }
    if (verifiedGameResponse === 'yes') {
      alert('Awesome ' + visitor + ' let\'s see if you can guess some fun facts about me.');
      guessingGame();
    } else if(verifiedGameResponse === 'no') {
      alert('I am sorry ' + visitor + '. You have no choice in the matter.');
      guessingGame();
    }
  }

  // guessing game question 1
  function guessingGame1() {
    let gameCount = 0;
    let response1 = prompt('Did I grow up in Alabama?');
    console.log(visitor + ' responded ' + response1 + ' to question 1');
    let guess1 = verifyResponse(response1);
    while(guess1 === 'reprompt') {
      response1 = prompt('please answer with yes or no. Did I grow up in Alabama?');
      guess1 = verifyResponse(response1);
    }
    if (guess1 === 'yes') {
      alert('I am sorry, you are incorrect');
    } else if (guess1 === 'no') {
      alert('You are correct!');
      gameCount = 1;
    }
    return gameCount;
  }

  // guessing game question 2
  function guessingGame2() {
    let gameCount = 0;
    let response2 = prompt('Was I ever a Barista?');
    console.log(visitor + ' responded ' + response2 + ' to question 2');
    let guess2 = verifyResponse(response2);
    while(guess2 === 'reprompt') {
      response2 = prompt('please answer with yes or no. Was I ever a Barista?');
      guess2 = verifyResponse(response2);
    }
    if (guess2 === 'yes') {
      alert('You are correct!');
      gameCount = 1;
    } else if (guess2 === 'no') {
      alert('I am sorry, you are wrong.');
    }
    return gameCount;
  }

  // guessing game question 3
  function guessingGame3() {
    let gameCount = 0;
    let response3 = prompt('Did I play in the WNBA?');
    console.log(visitor + ' responded ' + response3 + ' to question 3');
    let guess3 = verifyResponse(response3);
    while(guess3 === 'reprompt') {
      response3 = prompt('please answer with yes or no. Did I play in the WNBA?');
      guess3 = verifyResponse(response3);
    }
    if (guess3 === 'yes') {
      alert('No way! I am 4\' 11"');
    } else if (guess3 === 'no') {
      alert('You got it right!');
      gameCount = 1;
    }
    return gameCount;
  }

  // guessing game question 4
  function guessingGame4() {
    let gameCount = 0;
    let response4 = prompt('Was I ever a banker?');
    console.log(visitor + ' responded ' + response4 + ' to question 4');
    let guess4 = verifyResponse(response4);
    while(guess4 === 'reprompt') {
      response4 = prompt('please answer with yes or no. Was I ever a banker?');
      guess4 = verifyResponse(response4);
    }
    if (guess4 === 'yes') {
      alert('No, but I have visited');
    } else if (guess4 === 'no') {
      alert('You got it right!');
      gameCount = 1;
    }
    return gameCount;
  }

  // guessing game question 5
  function guessingGame5() {
    let gameCount = 0;
    let response5 = prompt('Did I win a Food Network Challenge?');
    console.log(visitor + ' responded ' + response5 + ' to question 5');
    let guess5 = verifyResponse(response5);
    while(guess5 === 'reprompt') {
      response5 = prompt('please answer with yes or no. Did I win a Food Network Challenge?');
      guess5 = verifyResponse(response5);
    }
    if (guess5 === 'yes') {
      alert('You are correct!');
      gameCount = 1;
    } else if (guess5 === 'no') {
      alert('You guess is incorrect, I am a winner!');
    }
    return gameCount;
  }

  //guessing game question 6
  function guessingGame6() {
    let gameCount = 0;
    let answer = 43;
    let guess = parseInt(prompt('Guess a number between 1 and 100'));
    console.log(visitor + ' guessed ' + guess);
    if (guess < 0 || guess > 100) {
      guess = parseInt(prompt('Your number was not valid, please enter a number between 1 and 100'));
      console.log(visitor + ' guessed ' + guess);
    }

    for (let i = 0; i < 4; i++) {
      if (guess < answer) {
        alert('Your guess was too low');
      } else if (guess > answer) {
        alert('Your guess was too high');
      } else if (guess === answer){
        alert('omg you got it!');
        gameCount = 1;
        break;
      }
      if (i === 3) {
        alert('I am sorry you are out of guesses. The correct answer is 43');
        break;
      }
      alert('You have ' + (4 - (i + 1)) + 'guess(es) left');
      guess = parseInt(prompt('Guess a new number between 1 and 100'));
      console.log(visitor + ' guessed ' + guess);
    }
    return gameCount;
  }

  // guessing game question 7
  function guessingGame7() {
    let gameCount = 0;
    let favoriteFoodsArray = ['pizza', 'burgers', 'pasta', 'salad', 'protien bars', 'cookies', 'cake', 'donuts', 'milk shakes'];
    let userGuess = prompt('I have been vegan for 22 years and I love food. Can you guess some of my favorite foods? You have 6 tries to get some!');
    console.log(visitor + ' guessed ' + userGuess);

    for (let i = 0; i < 6; i++){
      for (let j = 0; j < favoriteFoodsArray.length; j++) {
        if(favoriteFoodsArray[j] === userGuess) {
          alert('Wow! You got one right!');
          gameCount = gameCount + 1;
          break;
        }
      }
      if (i === 5){
        alert('I am sorry you are out of guesses.');
        break;
      }
      alert('You have ' + (6 - (i +1)) + ' guess(es) left.');
      userGuess = prompt('Can you guess some more of my favorite foods?');
      console.log(visitor + ' guessed ' + userGuess);
    }
    return gameCount;
  }


  //function to play the game
  function guessingGame(){
    let g1 = guessingGame1();
    let g2 = guessingGame2();
    let g3 = guessingGame3();
    let g4 = guessingGame4();
    let g5 = guessingGame5();
    let g6 = guessingGame6();
    let g7 = guessingGame7();
    alert('You had a total of ' + (g1 + g2 + g3 + g4 + g5 + g6 +g7) + ' correct answers out of 12 possible.');
  }

  function goodbye(){
    alert('Goodbye ' + visitor + '! I hope you enjoyed the game and getting to know me better.');
  }

  let visitor = visitorName();
  doYouWantToBuildASnowman();
  goodbye();

}

main();
