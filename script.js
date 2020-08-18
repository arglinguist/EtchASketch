let container = document.getElementById("container");

for (let i=0; i<16; i++){
    let divRow = document.createElement('div');
    divRow.classList.add("rowDiv"); //might need to be removed?
    
    for(let n=0; n<16; n++){
        let divColumn = document.createElement('div');
        divColumn.classList.add("squareDiv");
        divColumn.setAttribute('style', 'float: left');
        divColumn.textContent=(i+1)*(n+1);
        container.appendChild(divColumn);
    }
    container.appendChild(divRow);
}


//NOTHING BELOW THIS LINE WORKS YET
function activateDiv(div){
    console.log(div);
    //div.classList.toggle("activeMouse");
    console.log("Activate!");
}

let containerDiv = document.getElementById('container');
let divList = containerDiv.childNodes;

divList.forEach( 
    function(currentValue, currentIndex, listObj) { 
        console.log(currentValue + ', ' + currentIndex + ', ' + this); 
    },
    'test'
);
/*
for (let i=0; i<allDivs.length; i++){
    console.log(allDivs[i]);
    // allDivs[i].classList.toggle("activeMouse");
}
*/


/*
allDivs.forEach(function(div) {
    console.log("eh?");
    div.textContent="hiiiii!";
    container.appendChild(div);
}); 
*/
//allDivs.forEach(div==>activateDiv(this));
///this part doesn't work yet.

/*

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
  */