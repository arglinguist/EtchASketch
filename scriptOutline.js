// reduce global variables -- how to localize DOM variables and still have event listeners???? What about keeping listeners in HTML and calling funcitons as needed (onClick)

//GLOBAL VARIABLES
let clearButton = document.getElementById("clear"),
    blackButton= document.getElementById("noColor"),
    colorButton= document.getElementById("pickColor"),
    rbgButton= document.getElementById("randomColor"),
    divList= [],
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
//ORDER THAT ITEMS ARE CALLED
generateGrid(50); // (A) creates initial grid of 50x50

// (B) event listeners 
clearButton.addEventListener('click', function(){ // *****STICKING POINT**** recreates grid on click, but mouseover doesnt work now...
    generateGrid(20);
});

blackButton.addEventListener('click', function(){ // changes selectedColor to black
    selectedColor='black';
});

rbgButton.addEventListener('click', function(){ // changes selectedColor to random color
    selectRandomColor();
});

colorButton.addEventListener('click', function(){ // changes selectedColor to user-inputted color (could use pop up palette window instead)
    selectColor();
});

divList.forEach(div=>div.addEventListener('mouseover', e => { //changes color on mouseover
    activateDiv(div,selectedColor);
  }));