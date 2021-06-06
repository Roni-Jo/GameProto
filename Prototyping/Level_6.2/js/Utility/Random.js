function rand(low, high)
{
		return Math.random() * (high - low) + low;
}

//finding distand
function getDistance(x1, y1, x2, y2){
    var dy = x2 - x1;
    var xx = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}