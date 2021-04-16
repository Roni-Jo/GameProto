//variables
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate,1000/60)
var ball = new GameObject()

function GameObject(x,y,w,h,color)
{
    //defaults
    this.x = canvas.width/2;
    this.y = canvas.width/2;
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
}

function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    ball.drawCircle();
}