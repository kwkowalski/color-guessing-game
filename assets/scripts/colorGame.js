var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#randomColor");
var result = document.querySelector("#result");
var header = document.getElementsByTagName("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor){
			changeColors(clickedColor);
			result.textContent = "You are Correct!";
		} else {
			this.style.backgroundColor = "#232323";
			result.textContent = "Pick Again!";
		}
});
} 

function changeColors(color){
	for (var i = 0; i < squares.length; i++)
	squares[i].style.backgroundColor = color;
	header[0].style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}