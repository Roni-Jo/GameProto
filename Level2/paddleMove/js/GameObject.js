
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
    
            
    //color
    this.color = "blue";

    //draw rectangle
    this.drawRect = function()
    {
        context.save()
            context.fillStyle = this.color;
			context.translate(this.x-450, this.y);
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