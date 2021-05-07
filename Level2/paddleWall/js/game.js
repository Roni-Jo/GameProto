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

    //move when keys pressed
    if(s)
	{
		console.log("Moving down");
		player.y += 2;
	}
	if(w)
	{
		console.log("Moving up");
		player.y += -2;
	}

	//player collision
	if(player.y > canvas.height - player.height/2)
	{
		player.y = canvas.height-player.height/2;
	}

	if(player.y < player.height/2)
	{
		player.y = player.height/2;
	}

    player.drawRect();
    
}