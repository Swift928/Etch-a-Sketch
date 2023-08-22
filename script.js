
let divContainer = document.createElement('div');
divContainer.setAttribute('id', 'etchContainer')

let promptButton = document.querySelector('#user-input');

let dimensionSize;

document.body.append(divContainer);
let originalColor = getComputedStyle(document.documentElement).getPropertyValue('--original-color')

function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function changeBackgroundColor(element) {
    element.style.backgroundColor = randomRGB()};

  promptButton.addEventListener('click', () => {
        dimensionSize = prompt(`Please enter a dimension you would like to see: `)
        divContainer.style.setProperty('--grid-numb', dimensionSize)
        divContainer.innerHTML = ''
        
    
        for (i=0; i<dimensionSize; i++) {
            for (j=0; j<dimensionSize; j++) {
                var divColumns = document.createElement('div')
                divColumns.classList.add('etchElement');
                divContainer.appendChild(divColumns)

                divColumns.addEventListener('mouseover', (event) => {
                    changeBackgroundColor(event.target);
                    
                });
            }}
            });

