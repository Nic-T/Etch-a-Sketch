let grid= document.getElementById("container");
document.getElementById("resize").addEventListener("click",resizeGrid);
document.getElementById("reset").addEventListener("click",resetGrid);
createGrid(16)

function deleteCells(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
}

function createGrid(x){
    grid.style.gridTemplateColumns=`repeat(${x}, 1fr)`;
    
    cells= new Array()
    for(i=1;i<=x*x;i++){

        cells[i]=document.createElement('div');
        cells[i].classList.add("cell")
        grid.appendChild(cells[i]);

    }
    cells.forEach(cell =>{
        cell.addEventListener("mouseover",()=>{
            cell.classList.add("colored")
        } )
    })

}

function resizeGrid(){
    deleteCells()
    x= prompt("Grid Size");
    createGrid(x);
}

function resetGrid(){

    cells.forEach(cell => {
        if(cell.classList.contains("colored")){
            cell.classList.remove("colored")
        }
            
    });

}




