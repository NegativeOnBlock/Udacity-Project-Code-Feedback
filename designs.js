// Select color input
let selectedColor = document.getElementById('colorPicker');
// Select size input
let selectedSize = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
selectedSize.addEventListener('submit', function() {
	return makeGrid()
});

// A button to clear the canvas
let clearBtn = document.querySelector('input[type="button"]');

clearBtn.addEventListener('button', function() {

});

// Creates the grid of the canvas
function makeGrid() {
	let canvas = document.getElementsById('pixelCanvas');
	let gridWidth = document.getElementsById('inputWidth');
	let gridHeight = document.getElementsById('inputHeight');
	let tableBody = document.createElement('tbody');

	for (let x = 0; x < gridWidth; x++) {
			let gridRow = document.createElement('tr');

			for (let y = 0; y < gridHeight; y++) {
					let gridCell = document.createElement('td');
					gridRow.appendChild(gridCell);
			}
					gridCell.addEventListener('mousedown', function() {
		        			selectedColor.appendChild(gridCell).style.backgroundColor = color;
		      			});
    	}
			}
}
