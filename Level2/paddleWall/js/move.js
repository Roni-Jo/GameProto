//Define Boolean for keys
var w = false;
var s = false;

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
}
