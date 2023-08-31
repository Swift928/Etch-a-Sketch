
let gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'etchContainer')
let dimensionButton = document.querySelector('#user-input');
let dimensionSize;
let resetButton = document.querySelector('#reset')
document.body.append(gridContainer);
let originalColor = getComputedStyle(document.documentElement).getPropertyValue('--original-color')

// Create initial grid
function createGrid() {
    for (i=0; i < 16; i++) {
        for (j=0; j < 16; j++) {
            var divColumns = document.createElement('div')
            divColumns.classList.add('etchElement');
            gridContainer.appendChild(divColumns)

            divColumns.addEventListener('mouseover', (event) => {
                changeBackgroundColor(event.target);
                
            });
        }}}
createGrid()


function randomRGB() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`}


function changeBackgroundColor(element) {
    element.style.backgroundColor = randomRGB()};


// Clear the grid colors
resetButton.addEventListener('click', () => {
    let children = gridContainer.querySelectorAll('.etchElement')
    children.forEach(child => {
        child.style.backgroundColor = originalColor
    })
})

dimensionButton.addEventListener('click', () => {
    dimensionSize = prompt(`Please enter a dimension you would like to see: `)

    while (dimensionSize !== null) {
        if (dimensionSize >= 2 && dimensionSize <= 100) {
            gridContainer.innerHTML = ''
            gridContainer.style.gridTemplateColumns = `repeat(${dimensionSize}, 2fr)`
            gridContainer.style.gridTemplateRows = `repeat(${dimensionSize}, 2fr)`                               

            for (i=0; i<dimensionSize; i++) {
                for (j=0; j<dimensionSize; j++) {
                    var divColumns = document.createElement('div')
                    divColumns.classList.add('etchElement');
                    gridContainer.appendChild(divColumns)

                    divColumns.addEventListener('mouseover', (event) => {
                        changeBackgroundColor(event.target); 
                    });
                }} break;
        } else if (dimensionSize > 100) {
            alert('Please enter a number less than 101!')
            dimensionSize = prompt(`Please enter a dimension you would like to see: `)
        } else if (dimensionSize < 2)  {
            alert('Please enter a number greater than 1!')
            dimensionSize = prompt(`Please enter a dimension you would like to see: `)
        } else { alert('Please enter only numbers.')
            dimensionSize = prompt(`Please enter a dimension you would like to see: `)}
    }
});
      

let squareSize = dimensionSize;
let isDrawing = false;

gridContainer.addEventListener('touchstart', startDrawing);
gridContainer.addEventListener('touchmove', draw);
gridContainer.addEventListener('touchend', stopDrawing);

function startDrawing(event) {
  isDrawing = true;
  draw(event); // Start drawing immediately on touchstart
}

function draw(event) {
  if (!isDrawing) return;

  event.preventDefault();

  const touch = event.touches[0]; // Get the first touch (assuming one finger)
  const rect = gridContainer.getBoundingClientRect();

  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  const col = Math.floor(x / squareSize);
  const row = Math.floor(y / squareSize);

  const square = gridContainer.children[row * dimensionSize + col];
  if (square) {
    square.style.backgroundColor = randomRGB();
  }
}

function stopDrawing() {
  isDrawing = false;
}