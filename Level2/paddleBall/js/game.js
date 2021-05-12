//variables
var canvas;
var context;
var timer; 
interval = 1000/60;
//var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//rectangle
player = new GameObject();
ball = new GameObject()

player.color = "green";
player.width = 25;
player.x = player.width/2;


ball.vx = 2;
ball.vy = 2;
ball.width = 25;
ball.height = 25;
ball.radius = ball.width/2


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

	 //moving the ball
	 ball.move();
    
	 //collison check, if hit right side go left
	 if(ball.x > canvas.width - ball.width/2)
	 {
		 ball.vx = -ball.vx;	
		 
	 }
	 
	 //go right if hit left
	 if(ball.x < 0 + ball.width/2)
	 {
		 ball.vx = -ball.vx;
		 ball.x = canvas.width/2;
		 ball.y = canvas.height/2
	 }
 
	 //collison check if hit bottom go top, if hit top go bottom.
	 if(ball.y > canvas.height - ball.radius)
	 {
		 ball.vy = -ball.vy;	
	 }
	 
	 if(ball.y < 0 + ball.radius)
	 {
		 ball.vy = -ball.vy;	
	 }
	
	
	 if(ball.hitPaddle(player))
	 {
		ball.vx = -ball.vx;
		context.strokeRect(ball.x- ball.width/2, ball.y - ball.height/2, ball.width, ball.height)
		context.strokeRect(player.x- player.width/2, player.y - player.height/2, player.width, player.height)
	 }


    player.drawRect();
    ball.drawCircle();
}