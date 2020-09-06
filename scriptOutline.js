// reduce global variables -- how to localize DOM variables and still have event listeners????

//ALL DOM VARIABLES
let container = document.getElementById("container"),
    clearButton = document.querySelector("clear"),
    blackButton= document.getElementById("noColor"),
    colorButton= document.getElementById("pickColor"),
    rbgButton= document.getElementById("randomColor"),
    divList=Array.from(document.getElementsByClassName('squareDiv'));
// GLOBAL VARIABLES (test)
    selectedColor = "blue",
    

//FUNCTIONS
// (a) generating a square grid within container, can accept single
//     parameter for size
// (b) change background of div based on selectedColor 
//     (accepted as parameter? Or global value?)


//ORDER THAT ITEMS ARE CALLED
// (A) initialize basic grid  
// (B) event listeners for buttons
// ----- Clear button (reset grid size, erase previous)
// ----- Black button (reset selectedColor to black
// ----- Color button (reset selectedColor to color of user's choice 
//       either by a rgb selection menu or by inputting string 
//       for color name
// ----- Random button (reset selectedColor to change to random rgb 
//       color for every square it passes... 
