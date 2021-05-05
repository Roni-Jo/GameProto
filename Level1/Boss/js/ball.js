//ball document
function Ball()
{
    //defaults
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //ball speed
    this.vx = 0;
    this.vy = 0;

    //ball size
    this.width = 100;
    this.height = 100;
    
            
    //color
    this.color = "#f0ff00";

    //draw ball
    this.drawCircle = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.beginPath();
			context.translate(this.x, this.y);
			context.arc(0, 0, this.width/2, 0, 360 *Math.PI/180, true);
			context.closePath();
			context.fill();
		context.restore();
		
    }	

    //ball movement
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    this.left = function() 
	{
		return this.x - this.width/2;
	}
	this.right = function() 
	{
		return this.x + this.width/2;
	}
	
	this.top = function() 
	{
		return this.y - this.height/2;
	}
	this.bottom = function() 
	{
		return this.y + this.height/2;
	}
    this.hitBall = function(obj)
	{
		if(this.left() < obj.right() && 
		   this.right() > obj.left() &&
		   this.top() < obj.bottom() &&
		   this.bottom() > obj.top())
		{
			return true
		}
		return false;
	}
}