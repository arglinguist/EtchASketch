// reduce global variables -- how to localize DOM variables and still have event listeners???? What about keeping listeners in HTML and calling funcitons as needed (onClick)


// TO DO
// (1) Figure out wtf is making it get slower on every generateGrid (esp of larger sizes) -- why doesn't clearing innerHTML fix this?
// (2) make background UI prettier
// (3) optional drop-down menu for color selection
// (4) fancy-up those buttons on click

// ---------- GLOBAL VARIABLES ----------
let clearButton = document.getElementById("clear"),
    blackButton = document.getElementById("noColor"),
    colorButton = document.getElementById("pickColor"),
    rbgButton = document.getElementById("randomColor"),
    selectedColor = "pink";
    
// ---------- FUNCTIONS ----------
function generateGrid (dimensions) {  // generates a square grid in container of size (dimensions)x(dimensions)
    let container = document.getElementById("container"),
        divRow = 0,
        divColumn = 0,
        divList = [],
        i=0,
        n=0;
    container.innerHTML="";

    for ( i = 0;   i < dimensions; i++ ){  //creates all rows as new divs
        divRow = document.createElement('div');
        divRow.classList.add("rowDiv");
        
        for( n = 0;   n < dimensions;   n++ ){ //nests columns as divs within rows
            divColumn = document.createElement('div');
            divColumn.classList.add("squareDiv");
            divColumn.setAttribute('style', 'float: left');
            container.appendChild(divColumn);
        }
        container.appendChild(divRow);
    }

    divList=Array.from(document.getElementsByClassName('squareDiv'));
    divList.forEach(div=>div.addEventListener('mouseover', e => { //changes color on mouseover
        activateDiv(div,selectedColor);
      }));
    return;
}

function activateDiv(currentDiv, color){ // changes background color of given div to color indicated
    currentDiv.style.backgroundColor=`${color}`;
}

function selectColor(){
    selectedColor=(prompt("what color would you like?"));
}

function selectRandomColor(){
    let rbg = (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256));
    selectedColor=`rgb(${rbg})`;
}

function getDimensions(){
    let newDimension = 0;
    while (!(newDimension > 0 && newDimension <=100)){
        newDimension = prompt("Enter a number for the width & height of the grid -- be reasonable, pick a positive number below 100 please");
    }
    console.log(newDimension);
    return newDimension;

}


// ----------  EVENT LISTENERS FOR BUTTONS ----------
clearButton.addEventListener('click', function(){ 
    generateGrid(getDimensions());
});
blackButton.addEventListener('click', function(){ 
    selectedColor='black';
});
rbgButton.addEventListener('click', function(){ 
    selectRandomColor();
});
colorButton.addEventListener('click', function(){ 
    selectColor();
});

// ----------  INITIAL SETUP ----------
generateGrid(50); // creates initial grid of 50x50