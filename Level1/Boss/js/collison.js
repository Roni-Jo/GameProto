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
ball.vy = 2;

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

    //collison check if hit bottom go top, if hit top go bottom.
    if(ball.y > canvas.height - ball.height/2)
	{
		ball.vy = -ball.vy;	
    }
    
    if(ball.y < 0 + ball.height/2)
	{
		ball.vy = -ball.vy;	
	}

    ball.drawCircle();
    
}