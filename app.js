const wrapper = document.querySelector('.max-width-800');
const resetButton = document.querySelector('#reset-button');
const slider = document.querySelector('#slider');
const changeGridButton = document.querySelector('#grid-change-button');

const container = document.createElement('div');
container.id = 'grid-container';
wrapper.appendChild(container);


createGrid(16);


resetButton.addEventListener('click', () => {
    resetGrid();
})
changeGridButton.addEventListener('click', () => {
    gridSize = prompt('Enter New Grid Size per Row and Column');
    removeChildren(container);
    createGrid(gridSize);
})




function removeChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(amountPerRowAndColumn){
    let amount = amountPerRowAndColumn * amountPerRowAndColumn;
    for(i = 0; i < amount; i++){
        createSquare(amountPerRowAndColumn);
    }
}

function createSquare(amount){
    let size = 640 / amount;
    const gridElement = document.createElement('div');
    const gridElementBorder = document.createElement('div');
    gridElement.style = `width: ${size}px; height: ${size}px;`;
    gridElementBorder.classList.add('square-grid-border');
    //gridElement.classList.add('square-grid');

    
    gridElement.appendChild(gridElementBorder);
    container.appendChild(gridElement);

    gridElement.addEventListener('mouseover', () => {
        gridElement.classList.add('bg-black');
    })
}

function resetGrid() {
    const elements = document.querySelectorAll('.bg-black');
    for (let element of elements) {
        element.classList.remove('bg-black');
    }
}

