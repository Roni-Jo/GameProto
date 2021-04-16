//variables
var canvas
var context
var timer
var interval = 1000/60 //fps
var ball = new Ball()

//defaults
this.x =
        
//colors
this.color = "teal";

//draw ball
this.drawCricle = function()
{
    context.save();
    context.fillStyle = this.Color;
    context.beginPath();
    context.translate(this.XMLDocument, this.y);
    context.arc(0, 0, this.with/2, 0, 360 *Math.PI/180, true);
    context.closePath();
    context.fill();
    context.restore();

}