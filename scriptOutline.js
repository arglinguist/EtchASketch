// reduce global variables -- how to localize DOM variables and still have event listeners???? What about keeping listeners in HTML and calling funcitons as needed (onClick)

//ALL DOM VARIABLES

let clearButton = document.querySelector("clear"),
    blackButton= document.getElementById("noColor"),
    colorButton= document.getElementById("pickColor"),
    rbgButton= document.getElementById("randomColor"),
    divList= [];

// GLOBAL VARIABLES (test)
    selectedColor = "pink";
    

//FUNCTIONS

function generateGrid(dimensions){  // generates a square grid in container of size (dimensions)x(dimensions)
    let container = document.getElementById("container"),
        divRow,
        divColumn,
        i=0,
        n=0;
    container.textContent="";

    for (i=0; i<dimensions; i++){  //creates all rows as new divs
        divRow = document.createElement('div');
        divRow.classList.add("rowDiv");
        
        for(n=0; n<dimensions; n++){ //nests columns as divs within rows
            divColumn = document.createElement('div');
            divColumn.classList.add("squareDiv");
            divColumn.setAttribute('style', 'float: left');
            container.appendChild(divColumn);
        }
        container.appendChild(divRow);
    }
    divList=Array.from(document.getElementsByClassName('squareDiv'));
    return;
}

function activateDiv(div, color){
    div.style.backgroundColor=`${color}`;
    console.log("activated");
}

// (b) change background of div based on selectedColor 
//     (accepted as parameter? Or global value?)



//ORDER THAT ITEMS ARE CALLED
generateGrid(50); //creates initial grid of 50x50
divList.forEach(div=>div.addEventListener('mouseover', e => {
    activateDiv(div,selectedColor);
  }));
// (B) event listeners for buttons
// ----- Clear button (reset grid size, erase previous)
// ----- Black button (reset selectedColor to black
// ----- Color button (reset selectedColor to color of user's choice 
//       either by a rgb selection menu or by inputting string 
//       for color name
// ----- Random button (reset selectedColor to change to random rgb 
//       color for every square it passes... 
