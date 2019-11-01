function increaseValue()
{
	var number = document.getElementById("updateNum").innerHTML;//retrieve the current number
	number++;//Increase by 1
	document.getElementById("updateNum").innerHTML = number;//Update to show the new number value
}


function updateValueByNum(changeBy)
{
	var number = document.getElementById("changeNumber").innerHTML;//retrieve the current number
	number= parseInt(number) + changeBy;//Increase/Decrease by passed in parameter.
	document.getElementById("changeNumber").innerHTML = number;//Update to show the new number value
}


function updateValueByNumBounded(changeBy)
{
	var number = document.getElementById("changeNumberBounded").innerHTML;//retrieve the current number
	number= parseInt(number) + changeBy;//Increase/Decrease by passed in parameter.
	if(number > 10)
	{//Ensure we don't go above 10
		number = 10;
	}
	else if(number < -10)
	{//Ensure we don't go below -10
		number = -10;
	}
	document.getElementById("changeNumberBounded").innerHTML = number;//Update to show the new number value
}


function changeWidth(direction)
{
	var width = document.getElementById("barWidthExample").style.width;//retrieve the current width
	width = parseInt(width.replace('%', ''));//Remove the % percent sign from our width value
											 //and convert it to an integer
	if(direction == 'increase')
	{//Increase our width
		width = width + 5;
	}
	else if(direction == 'decrease')
	{//Decrease our width
		width = width - 5;
	}
	if(width > 100 || width <= 0)
	{//If our width becomes too large/small, reset to our default width
		width = 20;
	}
	document.getElementById("barWidthExample").style.width= width.toString() + '%';
	//update to our new width		
	//and make sure it is treated as a percentage
}

function randomImage()
{
	document.getElementById("practiceImg").onload = null;//The onload is called once an image has been rendered. Without this line of code
														 //Our webpage will cycle through our images in an endless loop!  For the body tag
														 //this isn't necessary.
	var pickImage = Math.floor((Math.random() * 10) / 3);//Pick a random number between 0 and 3
	if(pickImage == 0)
	{
		document.getElementById("practiceImg").src= "img/tree.jpg"; //Source: https://www.gograph.com/vector-clip-art/tree-roots.html
	}
	else if(pickImage == 1)
	{
		document.getElementById("practiceImg").src= "img/sun.jpg"; //Source: https://www.gograph.com/vector-clip-art/sun.html
	}
	else
	{
		document.getElementById("practiceImg").src= "img/moon.jpg"; //Source: //Source: https://www.gograph.com/vector-clip-art/moon.html
	}
}


function practiceLoop()
{
	var text = ''
	var counter;//Standard practice to declare the counter outside the for loop
	for(counter = 0; counter < 10; counter++)
	{
		text = text + ' ' + counter.toString();
	}
	document.getElementById("loopNum").innerHTML = text;
}


function practiceTable()
{
	var table = document.getElementById("p_table");//Retrieve our table element
	var row_counter;//Keeps track of our row index
	var col_counter;//Keeps track of our column index
	var cell_value;
	for(row_counter = 0; row_counter < table.rows.length; row_counter++)
	{//Outer for loop iterates over each row
		for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
		{
			cell_value = table.rows[row_counter].cells[col_counter].innerHTML;//Read in a cells current value
			cell_value = parseInt(cell_value) + 2;//Increase the cell's value by 2
			table.rows[row_counter].cells[col_counter].innerHTML = cell_value;//Update the actual html of the cell
		}
	}
}

var fruit_index = 0;//Global variable!
	function loadObjectData(){
		fruit = [{fruit_name: 'apple', fruit_color:'red'},
				 {fruit_name: 'pumpkin', fruit_color:'orange'},
				 {fruit_name: 'blueberry', fruit_color:'blue'},
				 {fruit_name: 'grapes', fruit_color:'purple'}];

		document.getElementById('objectField1').innerHTML = fruit[fruit_index].fruit_name;
		document.getElementById('objectField2').innerHTML = fruit[fruit_index].fruit_color;
		fruit_index++;
		if(fruit_index >= fruit.length)//If we've gone too far, reset the index to 0.
		{
			fruit_index = 0;
		}
	}



