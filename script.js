let container = document.getElementById("container");

for (let i=0; i<16; i++){
    let divRow = document.createElement('div');
    divRow.classList.add("rowDiv"); //might need to be removed?
    
    for(let n=0; n<16; n++){
        let divColumn = document.createElement('div');
        divColumn.classList.add("squareDiv");
        divColumn.setAttribute('style', 'float: left');
        //divColumn.textContent=(i+1)*(n+1);
        container.appendChild(divColumn);
    }
    container.appendChild(divRow);
}


let divList=Array.from(document.getElementsByClassName('squareDiv'));

let selectedColor = prompt("What color do you want?");

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