

let container = document.getElementById("container");

function generateGrid(selectedSize){
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

generateGrid(32);
let selectedColor = "black";

let divList=Array.from(document.getElementsByClassName('squareDiv'));

divList.forEach(div=>div.addEventListener('mouseover', e => {
    activateDiv(div,selectedColor);
  }));

function activateDiv(div, color){
    div.style.backgroundColor=`${color}`;
}



    //div.classList.add("activeMouse");
//    div.classList.add("activeMouseBlack");
 /*   let R = (Math.floor(Math.random()*256));
    let G = (Math.floor(Math.random()*256));
    let B= (Math.floor(Math.random()*256));
    div.css('background-color', 'rgb(' + R + ',' + G + ',' + B + ')');   */