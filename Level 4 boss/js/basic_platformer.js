//Declaring variables

var canvas;
var context;
var timer;
var interval;
var player;


	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new GameObject({x:100, y:canvas.height/2-100});

	platform0 = new GameObject();
		platform0.width = 250;
		platform0.height = 50;
		platform0.x = platform0.width/2;
		platform0.y = canvas.height - platform0.height/2;
		platform0.color = "#66ff33";
		
	platform1 = new GameObject();
		platform1.width = 450;
		platform1.height = 50
		platform1.x = canvas.width - platform1.width/2;
		platform1.y = 0 + platform1.height/2;
		platform1.color = "#33ff33";

	platform2 = new GameObject();
		platform2.width = 50;
		platform2.height = 50
		platform2.x = platform0.width + platform2.width/2;;
		platform2.y = canvas.height/2 - 75;
		platform2.color = "#fff933";

	platform3 = new GameObject();
		platform3.width = 50;
		platform3.height = 450;
		platform3.x = platform0.width + platform3.width/2;
		platform3.y = canvas.height - platform3.height/2;
		platform3.color = "#33ff33";

	platform4 = new GameObject();
		platform4.width = 450;
		platform4.height = 50;
		platform4.x = 0 + platform4.width/2;
		platform4.y = 0 + platform4.height/2;
		platform4.color = "#33ff33";

	platform5 = new GameObject();
		platform5.width = 50;
		platform5.height = canvas.height;
		platform5.x = platform5.width/2;
		platform5.y = canvas.height - platform5.height/2;
		platform5.color = "#33ff33";

	platform6 = new GameObject();
		platform6.width = 100;
		platform6.height = 50
		platform6.x = canvas.width/2;
		platform6.y = 0 + platform6.height/2;
		platform6.color = "#fff933";

	platform7 = new GameObject();
		platform7.width = 50;
		platform7.height = 600;
		platform7.x = canvas.width/2 + platform7.width;
		platform7.y = platform7.height/2;
		platform7.color = "#33ff33";

	platform8 = new GameObject();
		platform8.width = 675;
		platform8.height = 50;
		platform8.x = platform8.width/2 + platform3.x;
		platform8.y = canvas.height - platform8.height/2;
		platform8.color = "#66ff33";

	platform9 = new GameObject();
		platform9.width = 50;
		platform9.height = 50
		platform9.x = canvas.width - platform9.width/2;
		platform9.y = canvas.height - platform9.height/2;
		platform9.color = "#fff933";

	goal = new GameObject({width:24, height:50, x:canvas.width-50, y:100, color:"#00ffff"});
	

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
	
	if(player.onWall)
	{
		player.vy --;
		player.canJump = true;
		player.onWall = false;
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
		player.canJump = true;
		player.jumpHeight = -player.jumpHeight;
	}

	if(player.hitTestObject(platform2))
	{
		gravity = -1;
	}

	while(platform2.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform2.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.onWall = true;
		player.x++;
		player.vx = 0;
		
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		player.onWall = true
		
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	while(platform4.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform4.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		player.canJump = true;
		player.jumpHeight = -player.jumpHeight;
	}

	while(platform5.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform5.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		player.onWall = true
	}
	while(platform5.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		player.onWall = true
	}
	while(platform5.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}
	
	if(player.hitTestObject(platform6))
	{
		gravity = 1;
	}

	while(platform6.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform6.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform6.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform6.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		player.canJump = true;
		player.jumpHeight = -player.jumpHeight;
	}

	while(platform7.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform7.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform7.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform7.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
		player.canJump = true;
		player.jumpHeight = -player.jumpHeight;
	}

	while(platform8.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform8.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
		player.onWall = true
	}
	while(platform8.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
		player.onWall = true
	}
	while(platform8.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	if(player.hitTestObject(platform9))
	{
		gravity = -1;
	}

	while(platform9.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform9.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform9.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform9.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	if(player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform8.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();
	platform6.drawRect();
	platform7.drawRect();
	platform9.drawRect();
	
	player.drawDebug();
	
	player.drawRect();
	goal.drawCircle();
}

