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
		platform0.x = canvas.width/2;
		platform0.y = canvas.height - player.height*2;
		platform0.color = "#66ff33";

	platform1 = new GameObject();
		platform1.width = canvas.width;
		platform1.height = 50
		platform1.vy = 0.10
		platform1.x = platform1.width/2;
		platform1.y = canvas.height - platform1.height/2;
		platform1.color = "red";

	platform2 = new GameObject();
		platform2.width = 250;
		platform2.height = 50;
		platform2.x = platform2.width/2 ;
		platform2.y = canvas.height/2 + platform2.height;
		platform2.color = "#66ff33";

	platform3 = new GameObject();
		platform3.width = 150;
		platform3.height = 50;
		platform3.vx = 2;
		platform3.vy =2;
		platform3.x = canvas.width/2 - platform3.width/2 ;
		platform3.y = canvas.height/2 + platform3.height*4;
		platform3.color = "#66ff33";

	platform4 = new GameObject();
		platform4.width = 150;
		platform4.height = 50;
		platform4.vx = 3;
		platform4.vy = -3;
		platform4.x = canvas.width/2 - platform4.width ;
		platform4.y = canvas.height/2;
		platform4.color = "#66ff33";

	platform5 = new GameObject();
		platform5.width = 150;
		platform5.height = 50;
		platform5.x = canvas.width -platform4.width/2;
		platform5.y = 0 + platform2.height*4;
		platform5.color = "#66ff33";

	key = new GameObject()
		key.height = 20;
		key.width = 20;
		key.y = canvas.height - 200;
		key.x = canvas.width -50;


	goal = new GameObject({width:24, height:50, x:canvas.width-100, y:100, color:"#00ffff"});
	

	var fX = .85;
	var fY = .97;
	
	var gravity = 1;

	interval = 1000/60;
	timer = setInterval(animate, interval);

function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w && player.canJump)
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

	if(w == false && player.vy <= 0)
	{
		player.canJump = true
	}

	player.vx *= fX;
	player.vy *= fY;
	
	player.vy += gravity;
	
	player.x += Math.round(player.vx);
	player.y += Math.round(player.vy);

	platform3.x += platform3.vx;
	platform1.y -= platform1.vy;
	

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


	if(platform3.x > canvas.width - platform3.width/2)
	{
		platform3.vx = -platform3.vx;	
    }
    if(platform3.x < 0 + platform3.width/2)
	{
		platform3.vx = -platform3.vx;	
	}
	while(platform3.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform3.hitTestPoint(player.bottom()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}

	while(platform3.hitTestPoint(player.left()) && player.vx <=0)
	{
		player.x++;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform3.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	while(platform2.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform2.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
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

	while(platform4.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform4.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
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
	}

	while(platform5.hitTestPoint(player.bottomLeft()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
	}
	while(platform5.hitTestPoint(player.bottomRight()) && player.vy >=0)
	{
		player.y--;
		player.vy = 0;
		player.canJump = true;
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
	}
	while(platform4.hitTestPoint(player.right()) && player.vx >=0)
	{
		player.x--;
		player.vx = 0;
	}
	while(platform5.hitTestPoint(player.top()) && player.vy <=0)
	{
		player.y++;
		player.vy = 0;
	}

	

	if (player.hitTestObject(key))
	{
		key.x = 1000000;
		player. hasKey = true;
	}

	if(player.hasKey)
	{
		platform4.x += platform4.vx;
		platform4.y += platform4.vy;
		if(platform4.hitTestObject(platform2))
	{
		platform4.vx = -platform4.vx;
		platform4.vy = -platform4.vy;
	}
	if(platform4.y < 0 + platform4.height/2)
	{
		platform4.vx = -platform4.vx;
		platform4.vy = -platform4.vy;
	}
	}
	

	if(player.hasKey && player.hitTestObject(goal))
	{
		goal.y = 10000;
		context.textAlign = "center";
		context.drawText("You Win!!!", canvas.width/2, canvas.height/2);
	}
	
	
	platform0.drawRect();
	platform1.drawRect();
	platform2.drawRect();
	platform3.drawRect();
	platform4.drawRect();
	platform5.drawRect();
	
	key.drawCircle();
	player.drawDebug();
	
	player.drawRect();
	goal.drawCircle();
}

