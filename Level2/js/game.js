//variables
var canvas;
var context;
var timer; 
interval = 1000/60;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//rectangle
player = new GameObject();

timer = setInterval(animate, interval);
    
function animate()
{

    context.clearRect(0,0,canvas.width,canvas.height);

    player.drawRect();
    
}