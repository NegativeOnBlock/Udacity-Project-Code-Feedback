// Select color input
let selectedColor = document.getElementById('colorPicker');
// Select size input
let selectedSize = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
selectedSize.addEventListener('submit', function(event) {
	event.preventDefault()
	return makeGrid()

}); 

// A button to clear the canvas
let clearBtn = document.querySelector('input[type="button"]');

clearBtn.addEventListener('button', function() {
	
});

// Creates the grid of the canvas 
function makeGrid() {
	let canvas = document.getElementById('pixelCanvas');
	let gridWidth = document.getElementById('inputWidth').value;
	let gridHeight = document.getElementById('inputHeight').value;
	let tableBody = document.createElement('tbody');
	
	for (let x = 0; x < gridWidth; x++) {
			let gridRow = document.createElement('tr');
			tableBody.appendChild(gridRow);
	
			for (let y = 0; y < gridHeight; y++) {
					let gridCell = document.createElement('td'); 
					gridRow.appendChild(gridCell);
		
					tableBody.appendChild(gridRow);
			
					gridCell.addEventListener('mousedown', function(event) {
		        			event.target.style.backgroundColor = selectedColor.value;
		      			});
			} 
		
   	} 
	canvas.appendChild(tableBody);
	
}
