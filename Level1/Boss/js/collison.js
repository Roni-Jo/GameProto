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
ball2 = new Ball();
ball3 = new Ball();

//balls speed
ball.vx = 5;
ball.vy = 2;
ball2.vx = 3;
ball2.vy = 2;
ball3.vx = 5;
ball3.vy = 3;

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
    //colide with other balls
    if(ball.hitBall(ball2)||ball.hitBall(ball3))
    {
        ball.color = "green";
    }

    else
    {
        ball.color = "yellow";
    }
    
    //moving the second ball
    ball2.move();
        
    //collison check, if hit right side go left
    if(ball2.x > canvas.width - ball2.width/2)
    {
        ball2.vx = -ball2.vx;	
    }
    
    //go right if hit left
    if(ball2.x < 0 + ball2.width/2)
    {
        ball2.vx = -ball2.vx;	
    }

    //collison check if hit bottom go top, if hit top go bottom.
    if(ball2.y > canvas.height - ball2.height/2)
    {
        ball2.vy = -ball2.vy;	
    }
    
    if(ball2.y < 0 + ball2.height/2)
    {
        ball2.vy = -ball2.vy;	
    }

    //colide with other ball
    if(ball2.hitBall(ball)||ball2.hitBall(ball3))
    {
        ball2.color = "ff0000";
    }

    else
    {
        ball2.color = "teal";
    }

    //moving the third ball
    ball3.move();
        
    //collison check, if hit right side go left
    if(ball3.x > canvas.width - ball3.width/2)
    {
        ball3.vx = -ball3.vx;	
    }
    
    //go right if hit left
    if(ball3.x < 0 + ball3.width/2)
    {
        ball3.vx = -ball3.vx;	
    }

    //collison check if hit bottom go top, if hit top go bottom.
    if(ball3.y > canvas.height - ball3.height/2)
    {
        ball3.vy = -ball3.vy;	
    }
    
    if(ball3.y < 0 + ball3.height/2)
    {
        ball3.vy = -ball3.vy;	
    }

    //colide with other ball
    if(ball3.hitBall(ball)||ball3.hitBall(ball2))
    {
        ball3.color = "blue";
    }

    else
    {
        ball3.color = "red";
    }

    ball.drawCircle();
    ball2.drawCircle();
    ball3.drawCircle();
}