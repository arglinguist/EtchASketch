// reduce global variables -- how to localize DOM variables and still have event listeners???? What about keeping listeners in HTML and calling funcitons as needed (onClick)

//ALL DOM VARIABLES

let clearButton = document.querySelector("clear"),
    blackButton= document.getElementById("noColor"),
    colorButton= document.getElementById("pickColor"),
    rbgButton= document.getElementById("randomColor"),
    divList=Array.from(document.getElementsByClassName('squareDiv'));
// GLOBAL VARIABLES (test)
    selectedColor = "blue";
    

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
    return;
}
console.log("hi there");

generateGrid(20);

// (b) change background of div based on selectedColor 
//     (accepted as parameter? Or global value?)
/*function generateGrid(selectedSize){
    container.textContent="";
    for (let i=0; i<selectedSize; i++){
        let divRow = document.createElement('div');
        divRow.classList.add("rowDiv"); //might need to be removed?
        
        for(let n=0; n<selectedSize; n++){
            let divColumn = document.createElement('div');
            divColumn.classList.add("squareDiv");
            divColumn.setAttribute('style', 'float: left');
            //divColumn.textContent=(i+1)*(n+1);
            container.appendChild(divColumn);
        }
        container.appendChild(divRow);
    }
}*/

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
