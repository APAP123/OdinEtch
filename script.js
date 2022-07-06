const body = document.querySelector('body');
const clearBtn = document.querySelector('.clearBtn');

clearBtn.addEventListener('click', createGrid);

let height = 16;
let width = 16;


// Function for actually changing the color of the div

function changeBackground() {
    this.classList.add('hovered');
}



function createGrid(){ 
    let base = document.querySelector('.base');

    if (base !== null){
        base.parentElement.removeChild(base); // Removes the current grid before creating a new one (if it exists)
        console.log("Not equal to null!");
    }

    
    height = document.querySelector('.slider').value;
    width = document.querySelector('.slider').value;
    console.log("Value: " + height);

    const baseDiv = document.createElement('div');
    baseDiv.setAttribute('class', 'base');

    for (let i = 0; i < height; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        for (let j = 0; j < width; j++) {
            const childDiv = document.createElement('div');
            childDiv.setAttribute('class', 'child');
            childDiv.addEventListener('mouseenter', changeBackground);
            rowDiv.appendChild(childDiv);
        }
        baseDiv.appendChild(rowDiv);
    }

    body.appendChild(baseDiv);
}

createGrid();