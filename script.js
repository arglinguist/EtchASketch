let container = document.getElementById("container");

for (let i=0; i<4; i++){
    let divRow = document.createElement('div');
    divRow.classList.add("squareDiv");
    
    for(let n=0; n<4; n++){
        let divColumn = document.createElement('div');
        divColumn.classList.add("squareDiv");
        divColumn.textContent += "this is column " + (n+1);
        divColumn.setAttribute('style', 'float: left');
        container.appendChild(divColumn);
    }
    
    container.appendChild(divRow);
}
