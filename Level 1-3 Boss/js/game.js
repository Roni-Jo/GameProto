//variables
var canvas;
var context;
var timer; 
interval = 1000/60;
//var ball;

//counters
var score = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

// gravity, force and friction
var ax = 1;
var vx = 1;
var ay = 1;
var vy = 1;
var force = .5;
var friction = .97;
var gravity = 1; 


//line
line = new GameObject();
//rectangle
player = new GameObject();
ball = new GameObject()


player.vx = 1;
player.color = "cyan";
player.width = 250;
player.height = 40;
//player.x = canvas.width/2;
player.y = canvas.height - 25;



ball.y = canvas.height/2;
ball.radius = 20;
ball.width = ball.radius;
ball.height = ball.radius;




timer = setInterval(animate, interval);
    
function animate()
{

    context.clearRect(0,0,canvas.width,canvas.height);

	//counter
	context.font = "15px Arial dark gray";
	context.fillText("Score: " + score, 80, 25);

    //move when keys pressed
    if(a)
	{
		console.log("Moving right");
		player.vx -= ax //* force;
		player.move()
	}
	if(d)
	{
		console.log("Moving left");
		player.vx += ax //* force;
		player.move()
	}

	//left and right player collision
	
	if(player.x > canvas.width - player.width/2)
	{
		player.x = canvas.width - player.width/2;
	}

	if(player.x < player.width/2)
	{
		player.x = player.width/2;
		
	}


	ball.vx *= friction;
	ball.vy *= friction;
	ball.vy += gravity;
	
	 //moving the ball
	 ball.move();
    
	 //collison check, if hit right side go left
	 if(ball.x > canvas.width - ball.width/2)
	 {
		ball.x = canvas.width - ball.radius
		ball.vx = -ball.vx;
	 }
	 
	 //go right if hit left
	 if(ball.x < 0 + ball.width/2)
	 {
		ball.x = 0 + ball.radius
		 ball.vx = -ball.vx;
	 }
 
	 //collison check if hit bottom go top, if hit top go bottom.
	 if(ball.y > canvas.height - ball.radius)
	 {
		ball.y = canvas.height - ball.radius
		 ball.vy = -ball.vy;	
		 score = 0
	 }
	 
	 if(ball.y < 0 + ball.radius)
	 {
		 ball.vy = -ball.vy;	
	 }
	
	 if(player.hitPaddle(ball))
	 {
		
		ball.vy = -25;
		if(ball.x < player.x){
			
			ball.vx = -10;
		}
		if(ball.x > player.x){

			ball.vx = 10;
		}
		ball.y = player.y-player.height/2 - ball.width/2
		
		score++;
	 }

	//ball.y += ball.vy;
	

	player.vx *= friction
	line.drawLine();
    player.drawRect();
	ball.drawCircle();
}