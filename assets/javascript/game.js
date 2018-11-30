
var targetNumber = [];
var counter = 0;
var wins = 0;
var losses = 0;

targetNumber=Math.floor((Math.random() * 55) + 1);
$("#number-to-guess").text(targetNumber);

var numberOptions = [10, 5, 3, 7];
numberOptions.a=Math.floor((Math.random() * 4) + 1);

// var num1= Math.floor(Math.random()*11+1)
// var num2= Math.floor(Math.random()*11+1)
// var num3= Math.floor(Math.random()*11+1)
// var num4= Math.floor(Math.random()*11+1)

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "https://static.thenounproject.com/png/48878-200.png");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  $("#crystals").append(imageCrystal);
}



// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {
  $("#display").html(counter);


  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;

  alert("New score: " + counter);
  

  
  if (counter === targetNumber) {
    wins++ 
    alert("You win!");
    console.log("winner" + wins)
      $("#wins").html(wins);
      
  }

  else if (counter >= targetNumber) {
    losses++
    console.log("losses" + losses)
    $("#losses").text(losses);
  // reset counter 
    alert("You lose!!");
  }

  var resetGame = function(){  
          //generate a random number between 19-120;
          targetNumber=Math.floor((Math.random() * 13) + 1);
          $("#number-to-guess").text(targetNumber);
          console.log(targetNumber);
         
          //Crystal buttons get new values between 1-12;
          
              //assign the new values to button clicks      
           //return crystal total back to 0
           $("#display").empty();
               
      }

  // $("#display").empty();

  // if (losses++) {
  //  $("").empty();
  // }
});

//    $("#clear").on("click", function() {

// // Inside the on-click event...

// // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
// // We use find here and once its found it will empty the element
// $("#display").empty();

// });





//       if (guessesRemaining <= 0) {
//       lossCount++;
//       guessesRemaining = 10;
//       guessedLetters = [];
    
//       console.log("You lost! " + "The computer picked " + computerChoice + " You picked " + userChoice);
//       alert("You lost! " + "The computer picked " + computerChoice + " You picked " + userChoice);
    
//       document.getElementById("lossCount").innerHTML = lossCount++;
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//       document.getElementById("guessesRemaining").innerHTML = 10;
    
//     }
//     // compares the randomly selected computer choice and user choice
//     else if (computerChoice === userChoice) {
//       winCount++
//       console.log("You Won! " + "The computer picked " + computerChoice + " You picked " + userChoice);
//       alert("You Won! " + "The computer picked " + computerChoice + " You picked " + userChoice);
//       document.getElementById("winCount").innerHTML = winCount;
    
//       guessedLetters = [];
//       guessesRemaining = 10;
//       randomIndex = Math.floor(Math.random() * alphabet.length);
//       computerChoice = alphabet[randomIndex];
    
 
    
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//       document.getElementById("guessesRemaining").innerHTML = 10;
//       computerChoiceText = document.getElementById("computerchoice-text");
    
//     } else {

//       guessedLetters.push(userChoice);
   
//       console.log("Guess Again! " + "The computer picked " + computerChoice + " You picked " + userChoice);
//       document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
//       document.getElementById("guessedLetters").innerHTML = guessedLetters;
//       document.getElementById("computerchoice-text").innerHTML = computerChoice;
//     }
// }

