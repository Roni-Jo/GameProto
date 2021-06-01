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
var vx = 0;
var ay = 1;
var vy = 0;
var force = .5;
var friction = .1;
var gravity = 1; 
vy += gravity;

//line
line = new GameObject();
//rectangle
player = new GameObject();
ball = new GameObject()


player.vx = 5;
player.vy = 5;
player.color = "cyan";
player.width = 250;
player.height = 40;
player.x = canvas.width/2;
player.y = canvas.height - 50;


ball.y += vy;
ball.vx = 2;
ball.vy = 2;
gravity = 1;
ball.x = canvas.width/2;
ball.y = canvas.height/2;
ball.width = ball.radius;
ball.height = 40;
ball.radius = ball.width/2



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
		vx += ax * force;
		player.x += -vx;
	}
	if(d)
	{
		console.log("Moving left");
		vx += ax * force;
		player.x += vx;
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
	 }
 
	 //collison check if hit bottom go top, if hit top go bottom.
	 if(ball.y > canvas.height - ball.radius)
	 {
		 ball.vy = ball.vy * .67;	
		 score = 0
	 }
	 
	 if(ball.y < 0 + ball.radius)
	 {
		 ball.vy = -ball.vy;	
	 }
	
	 if(ball.hitPaddle(player))
	 {
		 if(ball.y = player.width/6)
		 {
			ball.vx = -ball.force*5;
			ball.vy = -35;
		 }
		 if(ball.y = player.width/6 + player.width/6)
		 {
			ball.vx = -ball.force;
			ball.vy = -35;
		 }
		 if(ball.y = player.width/6 + player.width/ 6 + player.width/6)
		 {
			ball.vx = -ball.vx;
		 }
		 if(ball.y = player.width/6 + player.width/6 + player.width/6 + player.width/6)
		 {
			ball.vx = ball.force;
			ball.vy = -35;
		 }
		 if(ball.y = player.width/6 + player.width/6 + player.width/6 + player.width/6 + player.width/6)
		 {
			ball.vx = ball.force*5;
			ball.vy = -35;
		 }
		
		score++;
	 }


	line.drawLine();
    player.drawRect();
	ball.drawCircle();
}