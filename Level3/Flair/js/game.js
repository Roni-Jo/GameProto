//variables
var canvas;
var context;
var timer; 
interval = 1000/60;
//var ball;

//rics face
var img=document.getElementById("Ric");

//counters
var p1Wins = 0;
var p2Wins = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");



//rectangle
player1 = new GameObject();
player2 = new GameObject();
ball = new GameObject()


player1.color = "green";
player1.width = 10;
player1.height = 150;
player1.x = player1.width/2;
player1.y = canvas.height/2;

player2.color = "red";
player2.width = 10;
player2.height = 150;
player2.x = canvas.width - player2.width/2;
player2.y = canvas.height/2;



ball.vx = -2;
ball.vy = -2;
ball.width = 25;
ball.height = 25;
ball.radius = ball.width/2


timer = setInterval(animate, interval);
    
function animate()
{

    context.clearRect(0,0,canvas.width,canvas.height);

	//net
	context.save;
	context.strokeStyle = "grey";
	context.beginPath();
	context.moveTo(canvas.width/2, 0);
	context.lineTo(canvas.width/2, canvas.height);
	context.closePath();
	context.lineWidth = 5;
	context.stroke();
	context.restore();

	//counter
	context.font = "25px Arial";
	context.fillText("Player 1:" + p1Wins + " | " + "Player 2:" + p2Wins, canvas.width/2 -120, 50);



	//rics face
	context.drawImage(Ric, ball.x-ball.radius, ball.y-ball.radius, ball.width+10, ball.height+10);

    //move when keys pressed
    if(s)
	{
		console.log("Moving down");
		player1.y += 2;
	}
	if(w)
	{
		console.log("Moving up");
		player1.y += -2;
	}

	//move when second keys are pressed
	if(k)
	{
		console.log("Moving down");
		player2.y += 2;
	}
	if(i)
	{
		console.log("Moving up");
		player2.y += -2;
	}

	// player collision
	//bottom
	if(player1.y > canvas.height - player1.height/2)
	{
		player1.y = canvas.height - player1.height/2;
	}


	//top
	if(player1.y < player1.height/2)
	{
		player1.y = player1.height/2;
		
	}

	//bottom
	if(player2.y > canvas.height - player2.height/2)
	{
		player2.y = canvas.height - player2.height/2;
	}


	//top
	if(player2.y < player2.height/2)
	{
		player2.y = player2.height/2;
	}

	 //moving the ball
	 ball.move();
    
	 //collison check, if hit right side go left
	 if(ball.x > canvas.width - ball.width/2)
	 {
		ball.vx = -ball.vx;
		ball.x = canvas.width/2;
		ball.y = canvas.height/2;
		p1Wins++;
		console.log(p1Wins);
	 }
	 
	 //go right if hit left
	 if(ball.x < 0 + ball.width/2)
	 {
		 ball.vx = -ball.vx;
		 ball.x = canvas.width/2;
		 ball.y = canvas.height/2;
		 p2Wins++;
		 console.log(p2Wins);
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
	
	 if(ball.hitPaddle(player1))
	 {
		ball.vx = -ball.vx;
		ball.vy = -2;
	 }

	 if(ball.hitPaddle(player2))
	 {
		ball.vx = -ball.vx;
	 }


    player1.drawRect();
    player2.drawRect();
}