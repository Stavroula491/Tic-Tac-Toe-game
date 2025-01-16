// Create 9 variables, one for each child div
// All variables will start with the value of 0, indicating that they have not been clicked
// If the user selects a button, the corresponding variable will become 1
// If computer selects a button, the corresponding variable will become 2

var buttonOne = 0;
var buttonTwo = 0;
var buttonThree = 0;
var buttonFour = 0;
var buttonFive = 0;
var buttonSix = 0;
var buttonSeven = 0;
var buttonEight = 0;
var buttonNine = 0;

var turn = 0; //The variable turn takes the value 0 when it is the user's turn to play
            // And the value 1 when it is the computer's turn to play.
            // When the user makes a move, the value should become 1. When the computer makes a move
            // The value should become 0.

var buttonList = [1,2,3,4,5,6,7,8,9]

var randomButton = 0;

// Function to diactivate buttons
// When the user plays, diactivate all buttons so the user can not click on another button
function button_not_active(){
    const buttons = document.querySelectorAll(".choose-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

// Function to test the game
// function test(){
//     alert("Button list is " + buttonList)
//     alert(buttonOne)
//     alert(buttonTwo)
//     alert(buttonThree)
//     alert(buttonFour)
//     alert(buttonFive)
//     alert(buttonSix)
//     alert(buttonSeven)
//     alert(buttonEight)
//     alert(buttonNine)
//     alert("The turn is " + turn)
// }

// Function to activate buttons
function button_active(){
    const buttons = document.querySelectorAll(".choose-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

// Rules when it is computer turn
function computerTurn(randomButton){

    // Rule 1: Can the computer win in one move? Then play that move
if ((buttonTwo === 2 && buttonThree === 2 && buttonOne === 0)||
        (buttonFour === 2 && buttonSeven === 2 && buttonOne === 0)||
        (buttonFive === 2 && buttonNine === 2 && buttonOne === 0)){
            document.querySelector(".corner1-button").classList.add("button-remover");
            document.querySelector(".O-image-corner1").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 1);
            buttonOne = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);
            
    } else if ((buttonOne === 2 && buttonThree === 2 && buttonTwo === 0)||
        (buttonFive === 2 && buttonEight === 2 && buttonTwo === 0)){
            document.querySelector(".middle1-button").classList.add("button-remover");
            document.querySelector(".O-image-middle1").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 2);
            buttonTwo = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonOne === 2 && buttonTwo === 2 && buttonThree === 0)||
        (buttonSeven === 2 && buttonFive === 2 && buttonThree === 0)||
        (buttonSix === 2 && buttonNine === 2 && buttonThree === 0)){
            document.querySelector(".corner2-button").classList.add("button-remover");
            document.querySelector(".O-image-corner2").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 3);
            buttonThree = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonOne === 2 && buttonSeven === 2 && buttonFour === 0)||
        (buttonFive === 2 && buttonSix === 2 && buttonFour === 0)){
            document.querySelector(".middle2-button").classList.add("button-remover");
            document.querySelector(".O-image-middle2").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 4);
            buttonFour = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonOne === 2 && buttonThree === 2 && buttonFive === 0)||
        (buttonTwo === 2 && buttonEight === 2 && buttonFive === 0)||
        (buttonThree === 2 && buttonSeven === 2 && buttonFive === 0)||
        (buttonFour === 2 && buttonSix === 2 && buttonFive === 0)){
            document.querySelector(".centre-button").classList.add("button-remover");
            document.querySelector(".O-image-centre").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 5);
            buttonFive = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonThree === 2 && buttonNine === 2 && buttonSix === 0)||
        (buttonFour === 2 && buttonFive === 2 && buttonSix === 0)){
            document.querySelector(".middle3-button").classList.add("button-remover");
            document.querySelector(".O-image-middle3").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 6);
            buttonSix = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonOne === 2 && buttonFour === 2 && buttonSeven === 0)||
        (buttonThree === 2 && buttonFive === 2 && buttonSeven === 0)||
        (buttonEight === 2 && buttonNine === 2 && buttonSeven === 0)){
            document.querySelector(".corner3-button").classList.add("button-remover");
            document.querySelector(".O-image-corner3").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 7);
            buttonSeven = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonTwo === 2 && buttonFive === 2 && buttonEight === 0)||
        (buttonSeven === 2 && buttonNine === 2 && buttonEight === 0)){
            document.querySelector(".middle4-button").classList.add("button-remover");
            document.querySelector(".O-image-middle4").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 8);
            buttonEight = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);

    } else if ((buttonOne === 2 && buttonFive === 2 && buttonNine === 0)||
        (buttonThree === 2 && buttonSix === 2 && buttonNine === 0)||
        (buttonSeven === 2 && buttonEight === 2 && buttonNine === 0)){
            document.querySelector(".corner4-button").classList.add("button-remover");
            document.querySelector(".O-image-corner4").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 9);
            buttonNine = 2;
            turn = 0;
            setTimeout(checkWinner, 2000);
            //End of Rule 1

        // Start of Rule 2
    } else if ((buttonTwo === 1 && buttonThree === 1 && buttonOne === 0)||
        (buttonFour === 1 && buttonSeven === 1 && buttonOne === 0)||
        (buttonFive === 1 && buttonNine === 1 && buttonOne === 0)){
            document.querySelector(".corner1-button").classList.add("button-remover");
            document.querySelector(".O-image-corner1").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 1);
            buttonOne = 2;
            turn = 0;
            
    } else if ((buttonOne === 1 && buttonThree === 1 && buttonTwo === 0)||
        (buttonFive === 1 && buttonEight === 1 && buttonTwo === 0)){
            document.querySelector(".middle1-button").classList.add("button-remover");
            document.querySelector(".O-image-middle1").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 2);
            buttonTwo = 2;
            turn = 0;
            
    } else if ((buttonOne === 1 && buttonTwo === 1 && buttonThree === 0)||
        (buttonSeven === 1 && buttonFive === 1 && buttonThree === 0)||
        (buttonSix === 1 && buttonNine === 1 && buttonThree === 0)){
            document.querySelector(".corner2-button").classList.add("button-remover");
            document.querySelector(".O-image-corner2").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 3);
            buttonThree = 2;
            turn = 0;
           
    } else if ((buttonOne === 1 && buttonSeven === 1 && buttonFour === 0)||
        (buttonFive === 1 && buttonSix === 1 && buttonFour === 0)){
            document.querySelector(".middle2-button").classList.add("button-remover");
            document.querySelector(".O-image-middle2").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 4);
            buttonFour = 2;
            turn = 0;
            
    } else if ((buttonOne === 1 && buttonThree === 1 && buttonFive === 0)||
        (buttonTwo === 1 && buttonEight === 1 && buttonFive === 0)||
        (buttonThree === 1 && buttonSeven === 1 && buttonFive === 0)||
        (buttonFour === 1 && buttonSix === 1 && buttonFive === 0)){
            document.querySelector(".centre-button").classList.add("button-remover");
            document.querySelector(".O-image-centre").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 5);
            buttonFive = 2;
            turn = 0;
            
    } else if ((buttonThree === 1 && buttonNine === 1 && buttonSix === 0)||
        (buttonFour === 1 && buttonFive === 1 && buttonSix === 0)){
            document.querySelector(".middle3-button").classList.add("button-remover");
            document.querySelector(".O-image-middle3").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 6);
            buttonSix = 2;
            turn = 0;
            
    } else if ((buttonOne === 1 && buttonFour === 1 && buttonSeven === 0)||
        (buttonThree === 1 && buttonFive === 1 && buttonSeven === 0)||
        (buttonEight === 1 && buttonNine === 1 && buttonSeven === 0)){
            document.querySelector(".corner3-button").classList.add("button-remover");
            document.querySelector(".O-image-corner3").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 7);
            buttonSeven = 2;
            turn = 0;
            
    } else if ((buttonTwo === 1 && buttonFive === 1 && buttonEight === 0)||
        (buttonSeven === 1 && buttonNine === 1 && buttonEight === 0)){
            document.querySelector(".middle4-button").classList.add("button-remover");
            document.querySelector(".O-image-middle4").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 8);
            buttonEight = 2;
            turn = 0;
            
    } else if ((buttonOne === 1 && buttonFive === 1 && buttonNine === 0)||
        (buttonThree === 1 && buttonSix === 1 && buttonNine === 0)||
        (buttonSeven === 1 && buttonEight === 1 && buttonNine === 0)){
            document.querySelector(".corner4-button").classList.add("button-remover");
            document.querySelector(".O-image-corner4").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 9);
            buttonNine = 2;
            turn = 0;
           
            // End of Rule 2
        
        // Start of Rule 3: if the centre is available, take the centre
    } else if (buttonFive === 0){
            document.querySelector(".centre-button").classList.add("button-remover");
            document.querySelector(".O-image-centre").classList.add("image-display");
            buttonList = buttonList.filter(buttonList => buttonList !== 5);
            buttonFive = 2;
            turn = 0;
            // End of Rule 3

    } else { //Play randomly
            if (randomButton === 1){
                document.querySelector(".corner1-button").classList.add("button-remover");
                document.querySelector(".O-image-corner1").classList.add("image-display");
                buttonList = buttonList.filter(buttonList => buttonList !== 1);
                buttonOne = 2;
                turn = 0;
                
                } else if (randomButton === 2){
                    document.querySelector(".middle1-button").classList.add("button-remover");
                    document.querySelector(".O-image-middle1").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 2);
                    buttonTwo = 2;
                    turn = 0;
                    
                } else if (randomButton === 3){
                    document.querySelector(".corner2-button").classList.add("button-remover");
                    document.querySelector(".O-image-corner2").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 3);
                    buttonThree = 2;
                    turn = 0;
                    
                } else if (randomButton === 4){
                    document.querySelector(".middle2-button").classList.add("button-remover");
                    document.querySelector(".O-image-middle2").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 4);
                    buttonFour = 2;
                    turn = 0;
                   
                } else if (randomButton === 5){
                    document.querySelector(".centre-button").classList.add("button-remover");
                    document.querySelector(".O-image-centre").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 5);
                    buttonFive = 2;
                    turn = 0;
                    
                } else if (randomButton === 6){
                    document.querySelector(".middle3-button").classList.add("button-remover");
                    document.querySelector(".O-image-middle3").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 6);
                    buttonSix = 2;
                    turn = 0;
                    
                } else if (randomButton === 7){
                    document.querySelector(".corner3-button").classList.add("button-remover");
                    document.querySelector(".O-image-corner3").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 7);
                    buttonSeven = 2;
                    turn = 0;
                    
                } else if (randomButton === 8){
                    document.querySelector(".middle4-button").classList.add("button-remover");
                    document.querySelector(".O-image-middle4").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 8);
                    buttonEight = 2;
                    turn = 0;
                   
                } else {
                    document.querySelector(".corner4-button").classList.add("button-remover");
                    document.querySelector(".O-image-corner4").classList.add("image-display");
                    buttonList = buttonList.filter(buttonList => buttonList !== 9);
                    buttonNine = 2;
                    turn = 0;
                   
                }
                }

}

// Check if there is a winner
function checkWinner(){
    if ((buttonOne === 1 && buttonTwo === 1 && buttonThree === 1) || 
        (buttonOne === 1 && buttonFour === 1 && buttonSeven === 1) ||
        (buttonOne === 1 && buttonFive === 1 && buttonNine === 1) ||
        (buttonThree === 1 && buttonSix === 1 && buttonNine === 1) ||
        (buttonThree ===1 && buttonFive === 1 && buttonSeven === 1)||
        (buttonSeven === 1 && buttonEight === 1 && buttonNine === 1)||
        (buttonFour === 1 && buttonFive === 1 && buttonSix === 1)||
        (buttonTwo === 1 && buttonFive === 1 && buttonEight === 1)){
        document.querySelector(".container").remove();
        document.querySelector(".user-win").classList.add("game-over");
        document.querySelector(".play-again-div").remove();

    } else if ((buttonOne === 2 && buttonTwo === 2 && buttonThree === 2) || 
        (buttonOne === 2 && buttonFour === 2 && buttonSeven === 2) ||
        (buttonOne === 2 && buttonFive === 2 && buttonNine === 2) ||
        (buttonThree === 2 && buttonSix === 2 && buttonNine === 2) ||
        (buttonThree === 2 && buttonFive === 2 && buttonSeven === 2)||
        (buttonSeven === 2 && buttonEight === 2 && buttonNine === 2)||
        (buttonFour === 2 && buttonFive === 2 && buttonSix === 2)||
        (buttonTwo === 2 && buttonFive === 2 && buttonEight === 2)){
        document.querySelector(".container").remove();
        document.querySelector(".computer-win").classList.add("game-over");
        document.querySelector(".play-again-div").remove();

    } else if (buttonOne != 0 && buttonTwo != 0 && buttonThree !=0 && buttonFour != 0 &&
        buttonFive != 0 && buttonSix != 0 && buttonSeven != 0 && buttonEight != 0 && buttonNine !=0){
        document.querySelector(".container").remove();
        document.querySelector(".draw").classList.add("game-over");
        document.querySelector(".play-again-div").remove();
    } else{
            if (turn === 1){
                computerTurn(randomButton);
                // When the computer has finished playing, activate again all buttons
                button_active();
            } else{
                return;
            }
    }
}


document.querySelector(".corner1-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".corner1-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-corner1").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonOne = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 1);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];

    setTimeout(checkWinner, 500);
    
  });

document.querySelector(".middle1-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".middle1-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-middle1").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();
    

    buttonTwo = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 2);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];

    setTimeout(checkWinner, 500);
    
    

  });

document.querySelector(".corner2-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".corner2-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-corner2").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonThree = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 3);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
    
    setTimeout(checkWinner, 500);
    
    
  });

document.querySelector(".middle2-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".middle2-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-middle2").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonFour = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 4);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
    
    setTimeout(checkWinner, 500);
    
   

  });

document.querySelector(".centre-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".centre-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-centre").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonFive = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 5);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
    
    setTimeout(checkWinner, 500);
    
    

  });

document.querySelector(".middle3-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".middle3-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-middle3").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonSix = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 6);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
   
    setTimeout(checkWinner, 500);
    
    

  });

document.querySelector(".corner3-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".corner3-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-corner3").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();

    buttonSeven = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 7);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
   
    setTimeout(checkWinner, 500);
    
    

  });

document.querySelector(".middle4-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".middle4-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-middle4").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();
    

    buttonEight = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 8);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
    
    setTimeout(checkWinner, 500);
    
  });

document.querySelector(".corner4-button").addEventListener("click", function () {
    
    // Add the button-remover class to the button
    document.querySelector(".corner4-button").classList.add("button-remover");
   
    // Add the .button-user-clicked class to the related div
    document.querySelector(".X-image-corner4").classList.add("image-display");

    // When the user plays, diactivate all buttons so the user can not click on another button
    button_not_active();
    

    buttonNine = 1;
    turn = 1;

    buttonList = buttonList.filter(buttonList => buttonList !== 9);

    randomButton = buttonList[Math.floor((Math.random()*buttonList.length))];
    
    setTimeout(checkWinner, 500);
    
  });

document.querySelector(".play-again-button").addEventListener("click", function(){
    buttonOne = 0;
    buttonTwo = 0;
    buttonThree = 0;
    buttonFour = 0;
    buttonFive = 0;
    buttonSix = 0;
    buttonSeven = 0;
    buttonEight = 0;
    buttonNine = 0;

    turn = 0; //The variable turn takes the value 0 when it is the user's turn to play
            // And the value 1 when it is the computer's turn to play.
            // When the user makes a move, the value should become 1. When the computer makes a move
            // The value should become 0.

    buttonList = [1,2,3,4,5,6,7,8,9]

    randomButton = 0;

    // Remove the existing images
    const images = document.querySelectorAll('img');

    // Loop through each image
    images.forEach(image => {
    // Check if the image has the class 'image-display'
    if (image.classList.contains('image-display')) {
    // If it does, remove the class
    image.classList.remove('image-display');
    }
    });


    // Bring the buttons back
    const my_buttons = document.querySelectorAll('button');

    // Loop through each button
    my_buttons.forEach(my_buttons => {
    // Check if the image has the class 'button-remover'
    if (my_buttons.classList.contains('button-remover')){
    // If it does, remove the class
    my_buttons.classList.remove('button-remover');
    }
    });


});
  