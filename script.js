let contentContainer = document.createElement('div');
contentContainer.setAttribute('id', 'container')

let divContainer = document.createElement('div');
divContainer.setAttribute('id', 'etchContainer')

for (i=0; i<16; i++) {
    let divRows = document.createElement('div');
    divRows.classList.add('divRows');
    for (j=0; j<16; j++) {
        let divColumns = document.createElement('div')
        divColumns.classList.add('etchElement');
        divRows.appendChild(divColumns);
    }
    divContainer.appendChild(divRows)
}

contentContainer.appendChild(divContainer)

document.body.appendChild(contentContainer);

let divRows = document.querySelectorAll('.etchElement')


function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

divRows.forEach(item => {
    
    const originalColor = getComputedStyle(document.documentElement).getPropertyValue('--original-color')
    
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = randomRGB()
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = originalColor /* Using the stored 'var' variable to revert back to original color */
        });
    });
