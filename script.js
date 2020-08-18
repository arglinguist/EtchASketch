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

///this part doesn't work yet.
const allDivs = document.querySelectorAll('squareDiv');
console.log(allDivs);
allDivs.forEach(function(div){
    console.log("meh?");
    div.addEventListener('mouseover', function(e){
        console.log("howdy");
        e.classList.toggle("activeMouse")
    })
});
  