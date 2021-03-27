// Select color input
let selectedColor = document.getElementById('colorPicker');
// Select size input
let selectedSize = document.getElementById('sizePicker');
// Global Scope makeGrid function element items
let canvas = document.getElementById('pixelCanvas');
const gridWidth = document.getElementById('inputWidth');
const gridHeight = document.getElementById('inputHeight');

// When size is submitted by the user, call makeGrid()
selectedSize.addEventListener('submit', function(event) {
	event.preventDefault() // not adding this caused the grid not to load
	return makeGrid()
}); 

// A button to clear the canvas
let clearBtn = document.querySelector('input[type="button"]');

clearBtn.addEventListener('click', function() {
	Array.from(canvas.getElementsByTagName("td")).forEach(cell=>{
		cell.style.backgroundColor="";
	})
});

// A use of conditionals to allow the grid color to be dragged
let paintOn = false;

canvas.addEventListener('mousedown', function(event) {
  paintOn = true;
});

canvas.addEventListener('mouseover', function(event) {
	if (event.target.nodeName === 'TD' && paintOn) {
		event.target.style.backgroundColor = selectedColor.value;
	}
});

canvas.addEventListener('mouseup', function(event) {
  paintOn = false;
});

// Creates the grid 
function makeGrid() { 
	// Local Scope makeGrid function element items
	const width = gridWidth.value;
	const height = gridHeight.value;
	let tableBody = document.createElement('tbody');

	// A use of loops to construct the grid cells 
	for (let x = 0; x < width; x++) {
			let gridRow = document.createElement('tr');
			tableBody.appendChild(gridRow);
	
			for (let y = 0; y < height; y++) {
					let gridCell = document.createElement('td'); 
					gridRow.appendChild(gridCell);
		
					tableBody.appendChild(gridRow);

					// Allows the grid color to be applied within a grid cell through a single click
					gridCell.addEventListener('mousedown', function(event) {
		        			event.target.style.backgroundColor = selectedColor.value;
		      			});
			} 
   	} 
	// This will finalize/seal the preparations of the grid to be called. 
	canvas.appendChild(tableBody);	
}
