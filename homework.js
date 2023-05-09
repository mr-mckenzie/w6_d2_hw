//                                  XXXX        Episode 1       XXXX

const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
//predicted output:
// The murderer will be 'Miss Scarlet' because we only have one murderer in the 'scenario' 
// object and the property has not been altered in any way.



//                                  XXXX        Episode 2       XXXX

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer will be 'Prof. Plum' because the variable 'murderer' is defined in global scope 
// and is a const of data type string (which cannot be reassigned) however the 'changeMurderer'
// function will throw a reassignment error when we try to call it so we will not get to the
// console log...



//                                  XXXX        Episode 3       XXXX
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
// This murderer will be 'Mrs Peacock' beacuse we are accessing the murderer defined in the 
// 'declareMurderer' function.

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// This murderer will be 'Prof Plum' because we are using the global 'murderer' variable this
// time.



//                                  XXXX        Episode 4       XXXX
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// The suspects are 'Miss Scarlet', 'Prof. Plum' and 'Col. Mustard' here because we have set the  
// 'suspects' varaible equal to the return from the 'declareAllSuspects' function which reassigns 
// 'suspectThree' to 'Col Mustard'
console.log(`Suspect three is ${suspectThree}.`);
// This suspect three will be 'Mrs Peacock' because we can only access the global variable of 
// 'suspectThree' and have no way to access the other 'suspectThree' in the 'declareAllSuspects'function



//                                  XXXX        Episode 5       XXXX
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);
  // The weapon will be 'Revolver' because even though the scenario object is a const, we can 
  // change the weapon property if we reassign it using the dot operator.



//                                  XXXX        Episode 6       XXXX
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer is 'Mrs White' because the initial murderer ('Col Mustard') has been defined with 
// 'let' which allows us to reassign the value. In the 'changeMurderer' function we first set the 
// murderer to 'Mr Green' then define and call the 'plotTwist' function which further reassigns the 
// murderer to 'Mrs White'. 



//                                  XXXX        Episode 7       XXXX
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The murderer is 'Mr Green' because the initial murderer ('Prof Plum') has been defined with
// let so we can reassign it in the 'changeMurderer' function to 'Mr Green'. The 'murderer' 
// variable inside the 'plotTwist' function has no bearing on the global 'murderer' variable because
// it is a newly defined variable which is not visible outside the 'plotTwist' block scope.



//                                  XXXX        Episode 8       XXXX
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);
  // The weapon is 'Candle Stick'. The 'changeScenario' function reassigns the murderer to 
  // 'Mrs Peacock' and the room to the 'Dining Room'. The 'plotTwist' function within
  // 'changeScenario' then updates the murderer to 'Col. Mustard' and the 'unexpectedOutcome'
  // further changes the weapon to the 'Candle Stick'.



//                                  XXXX        Episode 9       XXXX
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// The murderer is 'Prof. Plum' beacuse the murderer defined with 'let' inside the if statement is
// only visible within the scope of that block and does not change the global scope murderer variable.