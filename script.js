let container = document.getElementById("container");
//let clearButton = document.querySelector("clear");
let blackButton= document.getElementById("noColor");
let colorButton= document.getElementById("pickColor");
let rbgButton= document.getElementById("randomColor");

document.getElementById('clear').addEventListener('click', ()=> //things were working well before this was added...
    { console.log("hi");
    generateGrid(getSize());
    divList=Array.from(document.getElementsByClassName('squareDiv'));
    });


function generateGrid(selectedSize){
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
}

let selectedColor = "blue";
let divList=Array.from(document.getElementsByClassName('squareDiv'));

divList.forEach(div=>div.addEventListener('mouseover', e => {
    activateDiv(div,selectedColor);
  }));

function activateDiv(div, color){
    div.style.backgroundColor=`${color}`;
}

function getSize(){
    let newSize = prompt ("What size grid would you like?"); //add tests to set limits on input here
    return newSize;
}

    //div.classList.add("activeMouse");
//    div.classList.add("activeMouseBlack");
 /*   let R = (Math.floor(Math.random()*256));
    let G = (Math.floor(Math.random()*256));
    let B= (Math.floor(Math.random()*256));
    div.css('background-color', 'rgb(' + R + ',' + G + ',' + B + ')');   */