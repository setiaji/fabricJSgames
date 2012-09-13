var canvas = new fabric.Canvas("bisacanvas");

var kotak = new fabric.Rect({
	width: 100,
	heigth: 100,
	fill: 'blue',
	top: canvas.getCenter().top, // nilainya adalah 300
	left: canvas.getCenter().left // nilainya adalah 300
});