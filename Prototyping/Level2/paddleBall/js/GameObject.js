
function GameObject()
{
    //defaults
    this.x = canvas.width/2;
    this.y = canvas.height/2;

    //speed
    this.vx = 0;
    this.vy = 0;

    //size
    this.width = 25;
    this.height = 100;
    this.radius = this.width/2
    
            
    //color
    this.color = "blue";

    //draw ball
    this.drawCircle = function()
    {
        context.save();
            context.fillStyle = this.color;
            context.beginPath();
            context.translate(this.x, this.y);
            context.arc(0, 0, this.radius, 0, 360 *Math.PI/180, true);
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
    this.hitPaddle = function(obj)
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


    //draw rectangle
    this.drawRect = function()
    {
        context.save()
            context.fillStyle = this.color;
			context.translate(this.x-(canvas.width/2)+50, this.y);
			context.fillRect((-this.width/2), (-this.height/2), this.width, this.height);
		context.restore();
    }

    //movement
    this.move = function()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}