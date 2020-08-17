let x=16;

let value="auto"

let newValue="";

for(i=1;i<=x;i++){

    newValue=newValue.concat(" ",value);

}

console.log(newValue);





let grid = document.querySelector("#container");

grid.style.gridTemplateColumns=newValue;


let cells = new Array()

for(i=1;i<=x*x;i++){

    cells[i]=document.createElement('div');
    cells[i].classList.add("cell")
    grid.appendChild(cells[i]);
    cells[i].addEventListener('mouseover', (cells) =>{

        cells.target.style.backgroundColor="blue";


    } )
}

