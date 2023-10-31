const sizeInput = document.querySelector('#size-input')
const screen = document.querySelector('.screen')
const generateBtn = document.querySelector('#generate-btn')
const clearBtn = document.querySelector('#clear-btn')
const screenSize = 540

function makeBlueOnHover (square) {
  square.addEventListener('mouseover', () => {
    square.classList.add('hover')
  })
}

function createRows (quantity) {
  let rows = []
  for (let i = 0; i < quantity; i++) {
    const newRow = document.createElement('div')
    newRow.style.height = screenSize / quantity + 'px'
    newRow.classList.add('row')
    rows.push(newRow)
  }
  return rows
}

function addSquare (quantity, rows) {
  for (let i = 0; i < quantity; i++) {
    const newSquare = document.createElement('div')
    newSquare.style.width = screenSize / quantity + 'px'
    newSquare.classList.add('square')

    rows.forEach(row => {
      const newSquareClone = newSquare.cloneNode()
      makeBlueOnHover(newSquareClone)
      row.appendChild(newSquareClone)
    })
  }
}

function createGrid (quantity) {
  const rows = createRows(quantity)
  addSquare(quantity, rows)
  rows.forEach(row => screen.appendChild(row))
}

generateBtn.addEventListener('click', () => {
  const quantity = sizeInput.value
  if (quantity > 0 && quantity <= 128) {
    screen.innerHTML = ''
    createGrid(quantity)
  } else {
    alert('Please enter a number between 1 and 128')
  }
})

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => square.classList.remove('hover'))
})

const squares = document.querySelectorAll('.square')
squares.forEach(square =>
  square.addEventListener('mouseover', () => {
    square.classList.add('hover')
  })
)
