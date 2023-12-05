const wrapper = document.querySelector('.max-width-800');
const container = document.createElement('div');
container.id = 'grid-container';
wrapper.appendChild(container);

createGrid(256);

function createGrid(size){
    for(i = 0; i < size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('square-grid');
        container.appendChild(gridElement);
        gridElement.addEventListener('mouseover', () => {
            gridElement.style = "background-color: black;"
        })
    }
}

/*
js ile container oluştur
square gridleri for döngüsü ile ekle
container'ın css'ini ayarla
hover özelliği ekle

*/