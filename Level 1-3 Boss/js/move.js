//Define Boolean for keys
var a = false;
var d = false;

//Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

function press(e)
{
	//checking if up and down keys pressed
	if(e.keyCode == 65)
	{
		a = true;
		
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
}

function release(e)
{
    //up and down keys released
	
	if(e.keyCode == 65)
	{
		a = false;
		player.vx *= -friction;
		
	}
	if(e.keyCode == 68)
	{
		d = false;
		player.vx *= friction;
		
	}
}
