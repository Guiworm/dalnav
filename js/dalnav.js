
/** SCHEDULE PAGE FUNCTIONS - INPUT CLASS SCHEDULE **/

// Variables for Schedule Page:
var c1, c2, c3, c4, c5, c6;
var sub, cname, bname, radios, radioLength, clicked;

// Schedule Page - Choose classes to input or view
function classChosen()
{
	c1 = document.getElementById("radio1");
	c2 = document.getElementById("radio2");
	c3 = document.getElementById("radio3");
	c4 = document.getElementById("radio4");
	c5 = document.getElementById("radio5");
	c6 = document.getElementById("radio6");
	cname = document.getElementById("className");
	bname = document.getElementById("buildingName");
	radios = document.getElementsByName("radioButton");
	radioLength = radios.length;
	clicked = -1;
	
	// find which class was chosen:
	for(var i = 0; i < 6 && clicked < 0; i++)
	{
		if(radios[i].checked)	
			clicked = i+1; // to start from 1 rather than from 0
	}
	
	// Perform action depending on clicked radioButton:
	if(clicked == 1)
	{
		cname.value=localStorage.class1Name;
		bname.value=localStorage.class1Building;
	}
	else if(clicked == 2)
	{
		cname.value=localStorage.class2Name;
		bname.value=localStorage.class2Building;
	}
	else if(clicked == 3)
	{
		cname.value=localStorage.class3Name;
		bname.value=localStorage.class3Building;
	}
	else if(clicked == 4)
	{
		cname.value=localStorage.class4Name;
		bname.value=localStorage.class4Building;
	}
	else if(clicked == 5)
	{
		cname.value=localStorage.class5Name;
		bname.value=localStorage.class5Building;
	}
	else if(clicked == 6)
	{
		cname.value=localStorage.class6Name;
		bname.value=localStorage.class6Building;
	}
	
	
}

// Function to save the user's input (i.e. Class & Building)
function submitted()
{
	sub = document.getElementById("submit1");
	c1 = document.getElementById("radio1");
	c2 = document.getElementById("radio2");
	c3 = document.getElementById("radio3");
	c4 = document.getElementById("radio4");
	c5 = document.getElementById("radio5");
	c6 = document.getElementById("radio6");
	cname = document.getElementById("className");
	bname = document.getElementById("buildingName");
	radios = document.getElementsByName("radioButton");
	radioLength = radios.length;
	clicked = -1;
	
	// find which class was chosen:
	for(var i = 0; i < 6 && clicked < 0; i++)
	{
		if(radios[i].checked)	
			clicked = i+1; // to start from 1 rather than from 0
	}
	
	if(clicked == 1)
	{
		localStorage.class1Name = cname.value;
		localStorage.class1Building = bname.value;
	}
	else if(clicked == 2)
	{
		localStorage.class2Name = cname.value;
		localStorage.class2Building = bname.value;
	}
	else if(clicked == 3)
	{
		localStorage.class3Name = cname.value;
		localStorage.class3Building = bname.value;
	}
	else if(clicked == 4)
	{
		localStorage.class4Name = cname.value;
		localStorage.class4Building = bname.value;
	}
	else if(clicked == 5)
	{
		localStorage.class5Name = cname.value;
		localStorage.class5Building = bname.value;
	}
	else if(clicked == 6)
	{
		localStorage.class6Name = cname.value;
		localStorage.class6Building = bname.value;
	}	
} 
/** END OF SCHEDULE PAGE FUNCTIONS **/
