
function GameObject(obj)
{	
		this.x = canvas.width/2;
		this.y = canvas.height/2;
		this.width = 100;
		this.height = 100;
		this.color = "#ff0000";
		this.force = 1;
		this.ax = 1;
		this.ay = 1;
		this.vx = 0;
		this.vy = 0;

	this.hasKey = false;

	//Can player jump?
	this.canJump = false;
	this.jumpHeight = -25;
	
	
		if(obj!== undefined)
		{
			for(value in obj)
			{
				if(this[value]!== undefined)
				{
					this[value] = obj[value];
				}
			}
		}
	

	this.drawRect = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
		
	}	
	
	this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.radius(), 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
	
	
	//collision points
	this.left = function() 
	{
		return {x:this.x - this.width/2 , y:this.y}
	}
	this.right = function() 
	{
		return {x:this.x + this.width/2 , y:this.y}
	}
	
	this.top = function() 
	{
		return {x:this.x, y:this.y - this.height/2}
	}
	this.bottom = function() 
	{
		return {x:this.x , y:this.y + this.height/2}
	}
	this.bottomRight = function() 
	{
		return {x:this.x + this.width/2 , y:this.y + this.height/2}
	}
	this.bottomLeft = function() 
	{
		return {x:this.x - this.width/2, y:this.y + this.height/2}
	}
	
	this.hitTestObject = function(obj)
	{
		if(this.left().x <= obj.right().x && 
		   this.right().x >= obj.left().x &&
		   this.top().y <= obj.bottom().y &&
		   this.bottom().y >= obj.top().y &&
		   this.bottomRight().x >= obj.left().x &&
		   this.bottomRight().y >= obj.top().y &&
		   this.bottomLeft().x <= obj.right().x &&
		   this.bottomLeft().y >= obj.top().y
		
		   )
		{
			return true
		}
		return false;
	}
		
	//collision hit
	this.hitTestPoint = function(obj)
	{
		if(obj.x >= this.left().x && 
		   obj.x <= this.right().x &&
		   obj.y >= this.top().y &&  
		   obj.y <= this.bottom().y &&
		   obj.x >= this.bottomLeft().x && 
		   obj.x <= this.bottomRight().x &&
		   obj.y <= this.bottomLeft().y && 
		   obj.y <= this.bottomRight().y
		   )
		{
			return true;
		}
		return false;
	}
	
	
	this.radius = function(newRadius)
	{
		if(newRadius==undefined)
		{
		   return this.width/2; 
		}
		else
		{
			return newRadius;
		}
	}
	
	//Collision points draw
	this.drawDebug = function()
	{
		var size = 5;
		context.save();
		context.fillStyle = "black";
		context.fillRect(this.left().x-size/2, this.left().y-size/2, size, size);
		context.fillRect(this.right().x-size/2, this.right().y-size/2, size, size);
		context.fillRect(this.top().x-size/2, this.top().y-size/2, size, size);
		context.fillRect(this.bottom().x-size/2, this.bottom().y-size/2, size, size);
		context.fillRect(this.bottomLeft().x-size/2, this.bottomLeft().y-size/2, size, size);
		context.fillRect(this.bottomRight().x-size/2, this.bottomRight().y-size/2, size, size);
		context.fillRect(this.x-size/2, this.y-size/2, size, size);
		context.restore();
	}
}
