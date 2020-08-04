'use strict';

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

// guessing game question 1
function guessingGame1() {
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
  }
}

// guessing game question 2
function guessingGame2() {
  let response2 = prompt('Was I ever a Barista?');
  console.log(visitor + ' responded ' + response2 + ' to question 2');
  let guess2 = verifyResponse(response2);
  while(guess2 === 'reprompt') {
    response2 = prompt('please answer with yes or no. Was I ever a Barista?');
    guess2 = verifyResponse(response2);
  }
  if (guess2 === 'yes') {
    alert('You are correct!');
  } else if (guess2 === 'no') {
    alert('I am sorry, you are wrong.');
  }
}

// guessing game question 3
function guessingGame3() {
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
  }
}

// guessing game question 4
function guessingGame4() {
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
  }
}

// guessing game question 5
function guessingGame5() {
  let response5 = prompt('Did I win a Food Network Challenge?');
  console.log(visitor + ' responded ' + response5 + ' to question 5');
  let guess5 = verifyResponse(response5);
  while(guess5 === 'reprompt') {
    response5 = prompt('please answer with yes or no. Did I win a Food Network Challenge?');
    guess5 = verifyResponse(response5);
  }
  if (guess5 === 'yes') {
    alert('You are correct!');
  } else if (guess5 === 'no') {
    alert('You guess is incorrect, I am a winner!');
  }
}

//function to play the game
function guessingGame(){
  guessingGame1();
  guessingGame2();
  guessingGame3();
  guessingGame4();
  guessingGame5();
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

function goodbye(){
  alert('goodbye ' + visitor + '! I hope you enjoyed the game and getting to know me better.');
}

let visitor = visitorName();
doYouWantToBuildASnowman();
goodbye();


