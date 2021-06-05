//Declaring variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({width:50, height:50, x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 150;
		platform0.height = 50;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - player.height*2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = canvas.width;
		platform1.height = 50
		platform1.x = platform1.width/2;
		platform1.y = canvas.height - platform1.height/6;
		platform1.color = "red";

	platform2 = new GameObject();
		platform2.width = 150;
		platform2.height = 50;
		platform2.x = canvas.width/2 + platform2.width/2;
		platform2.y = canvas.height - platform2.height/2;
		platform2.color = "#66ff33";

	goal = new GameObject({width:24, height:50, x:canvas.width-100, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump && player.vy ==0)
	{
		player.vy += player.jumpHeight;
		player.canJump = false;
	}

	if(a)
	{
		player.vx += -player.ax * player.force;
		
	}

	if(d)
	{
		player.vx += player.ax * player.force;
		
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	while(platform0.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform0.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

	while(platform0.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform0.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	if(player.hitTestObject(platform1))
	{
	
		player.x += 10000;
		player.y += 100000;
	}

	while(platform1.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

	while(platform1.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform1.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform1.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}


	if(player.hasKey && player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();
	platform1.drawRect();
	

	player.drawDebug();
	
	player.drawRect();
	goal.drawCircle();
}

