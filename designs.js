// Select color input
const selectedColor = document.getElementById('colorPicker');
// Select size input
const selectedSize = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
const submitSize = document.querySelector('input[type="submit"]');

submitSize.onclick = function() {
	return makeGrid();
}

// A button to clear the canvas
const clearBtn = document.querySelector('input[type="button"]');

clearBtn.onclick = function() {
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0,0,width,height);
}

function makeGrid() {


}
