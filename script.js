let contentContainer = document.createElement('div');
contentContainer.setAttribute('id', 'container')

let divContainer = document.createElement('div');
divContainer.setAttribute('id', 'etchContainer')

let promptButton = document.querySelector('#user-input');

let dimensionSize;

contentContainer.appendChild(divContainer)
document.body.append(contentContainer);
let originalColor = getComputedStyle(document.documentElement).getPropertyValue('--original-color')

function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

  promptButton.addEventListener('click', () => {
        dimensionSize = prompt(`Please enter a dimension you would like to see: `)
        divContainer.style.setProperty('--grid-numb', dimensionSize)
        divContainer.innerHTML = ''
    
        for (i=0; i<dimensionSize; i++) {
            for (j=0; j<dimensionSize; j++) {
                var divColumns = document.createElement('div')
                divColumns.classList.add('etchElement');
                divContainer.appendChild(divColumns)

                divColumns.addEventListener('mouseenter', (event) => {
                    changeBackgroundColor(event.target);
                    
                });
                divColumns.addEventListener('mouseleave', (event) => {
                    revertBackgroundColor(event.target);
                    console.log(event.target)
                });
            }}

            function changeBackgroundColor(element) {
                element.style.backgroundColor = randomRGB()};

            function revertBackgroundColor(element) {
                element.style.backgroundColor = originalColor};
            });

