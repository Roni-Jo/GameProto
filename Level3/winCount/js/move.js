//Define Boolean for keys
var w = false;
var s = false;
var i = false;
var k = false;

//Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//checking if up and down keys pressed
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 73)
	{
		i = true;
	}
	if(e.keyCode == 75)
	{
		k = true;
	}
}

function release(e)
{
    //up and down keys released
	
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 73)
	{
		i = false;
	}
	if(e.keyCode == 75)
	{
		k = false;
	}
}
