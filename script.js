let container = document.getElementById("container");

for (let i=0; i<16; i++){
    let divRow = document.createElement('div');
    divRow.classList.add("squareDiv"); //might need to be removed?
    
    for(let n=0; n<16; n++){
        let divColumn = document.createElement('div');
        divColumn.classList.add("squareDiv");
        divColumn.setAttribute('style', 'float: left');
        divColumn.textContent=(i+1)*(n+1);
        container.appendChild(divColumn);
    }
    container.appendChild(divRow);
}

function activateDiv(div){
    console.log(div);
    //div.classList.toggle("activeMouse");
    console.log("Activate!");
}

let allDivs = document.getElementsByClassName('squareDiv');

console.log(allDivs[0]); //it's a nodelist - success on that piece.

for (let i=0; i<allDivs.length; i++){
    allDivs[i].classList.toggle("activeMouse");
}

/*
allDivs.forEach(function(div) {
    console.log("eh?");
    div.textContent="hiiiii!";
    container.appendChild(div);
}); 
*/
//allDivs.forEach(div==>activateDiv(this));
///this part doesn't work yet.


allDivs.forEach(function(){
    this.addEventListener("mouseover", console.log('test'));
    console.log("meh?");
    this.onmouseover = console.log("howdy");
    //console.log("howdy");function(){
   //    console.log("howdy");
   //     e.classList.toggle("activeMouse")
   // }
   // div.addEventListener('mouseover', function(e){
 //       console.log("howdy");
 //       e.classList.toggle("activeMouse")
 //   })
});
  