//variables
var canvas;
var context;
var timer; 
interval = 1000/60;
var ball;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
//Instantiate of the ball
ball = new Ball();

//balls speed
ball.vx = 2;
ball.vy = 0;

timer = setInterval(animate, interval);
    
function animate(){

    context.clearRect(0,0,canvas.width,canvas.height);

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

    ball.drawCircle();
    
}