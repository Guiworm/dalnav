
/**************************** SCHEDULE PAGE FUNCTIONS - INPUT CLASS SCHEDULE ****************************/

// Variables for Add Class Page:
var className, buildingName, days, theAlert, startTime, alertTime;
var mon, tues, wed, thur, fri, sat, sun;
var currentClass;
var class1Button, class2Button, class3Button, class4Button, class5Button, class6Button;
var classStatus = new Array();

console.log("declared variables");


// Helper function to get the elements required for the Schedule Page functions
function getScheduleElements()
{
console.log("getting ScheduleElements");
 	className = document.getElementById("classNameEdit");
	buildingName = document.getElementById("buildingNameEdit");
	days = document.getElementById("dayEdit");
	mon = document.getElementById("monday");
	tues = document.getElementById("tuesday");
	wed = document.getElementById("wednesday");
	thur = document.getElementById("thursday");
	fri = document.getElementById("friday");
	sat = document.getElementById("saturday");
	sun = document.getElementById("sunday");
	startTime = document.getElementById("timeEdit");
	theAlert = document.getElementById("alertEdit");
	alertTime = document.getElementById("alertTimeEdit");
	class1Button = document.getElementById("class1Anchor");
	class2Button = document.getElementById("class2Anchor");
	class3Button = document.getElementById("class3Anchor");
	class4Button = document.getElementById("class4Anchor");
	class5Button = document.getElementById("class5Anchor");
	class6Button = document.getElementById("class6Anchor");

console.log("got ScheduleElements");
	
	//localStorage.clear();
}

function loadSchedule()
{
console.log("loadSchedule()");
	getScheduleElements();
	
	if(localStorage.class1Name != undefined)
		class1Button.innerHTML = localStorage.class1Name;
	if(localStorage.class2Name != undefined)
		class2Button.innerHTML = localStorage.class2Name;
	if(localStorage.class3Name != undefined)
		class3Button.innerHTML = localStorage.class3Name;
	if(localStorage.class4Name != undefined)
		class4Button.innerHTML = localStorage.class4Name;
	if(localStorage.class5Name != undefined)
		class5Button.innerHTML = localStorage.class5Name;
	if(localStorage.class6Name != undefined)
		class6Button.innerHTML = localStorage.class6Name;
		
console.log(" end of loadSchedule()");
}

/**
* saveClass() Function
*
*/
function saveClass()
{
	
	// Save the user's input for all the specified class data fields
	switch(currentClass)
	{
	case 1:
console.log("case 1");
		localStorage.class1Name = className.value;
		localStorage.class1Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class1Mon = "true";
		else
			localStorage.class1Mon = "false";
		if(tues.checked)
			localStorage.class1Tues = "true";
		else
			localStorage.class1Tues = "false";
		if(wed.checked)
			localStorage.class1Wed = "true";
		else
			localStorage.class1Wed = "false";
		if(thur.checked)
			localStorage.class1Thur = "true";
		else
			localStorage.class1Thur = "false";
		if(fri.checked)
			localStorage.class1Fri = "true";			
		else
			localStorage.class1Fri = "false";
		if(sat.checked)
			localStorage.class1Sat = "true";
		else
			localStorage.class1Sat = "false";
		if(sun.checked)
			localStorage.class1Sun = "true";
		else
			localStorage.class1Sun = "false";	
console.log("end of saving checkboxes");			
		localStorage.class1StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class1Alert = "on";
		else
			localStorage.class1Alert = "off";
		
		localStorage.class1AlertTime = alertTime.value;
		
		class1Button.innerHTML = className.value;
console.log("end of case 1 saving");
		break;
	case 2:
console.log("case 2");
		localStorage.class2Name = className.value;
		localStorage.class2Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class2Mon = "true";
		else
			localStorage.class2Mon = "false";
		if(tues.checked)
			localStorage.class2Tues = "true";
		else
			localStorage.class2Tues = "false";
		if(wed.checked)
			localStorage.class2Wed = "true";
		else
			localStorage.class2Wed = "false";
		if(thur.checked)
			localStorage.class2Thur = "true";
		else
			localStorage.class2Thur = "false";
		if(fri.checked)
			localStorage.class2Fri = "true";			
		else
			localStorage.class2Fri = "false";
		if(sat.checked)
			localStorage.class2Sat = "true";
		else
			localStorage.class2Sat = "false";
		if(sun.checked)
			localStorage.class2Sun = "true";
		else
			localStorage.class2Sun = "false";	
console.log("end of saving checkboxes");			
		
		localStorage.class2StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class2Alert = "on";
		else
			localStorage.class2Alert = "off";
		
		localStorage.class2AlertTime = alertTime.value;
		
		class2Button.innerHTML = className.value;
console.log("end of case 2 saving, alertTime: "+ localStorage.class2AlertTime);
		break;
	case 3:
console.log("case 3");
		localStorage.class3Name = className.value;
		localStorage.class3Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class3Mon = "true";
		else
			localStorage.class3Mon = "false";
		if(tues.checked)
			localStorage.class3Tues = "true";
		else
			localStorage.class3Tues = "false";
		if(wed.checked)
			localStorage.class3Wed = "true";
		else
			localStorage.class3Wed = "false";
		if(thur.checked)
			localStorage.class3Thur = "true";
		else
			localStorage.class3Thur = "false";
		if(fri.checked)
			localStorage.class3Fri = "true";			
		else
			localStorage.class3Fri = "false";
		if(sat.checked)
			localStorage.class3Sat = "true";
		else
			localStorage.class3Sat = "false";
		if(sun.checked)
			localStorage.class3Sun = "true";
		else
			localStorage.class3Sun = "false";	
console.log("end of saving checkboxes");			
		
		localStorage.class3StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class3Alert = "on";
		else
			localStorage.class3Alert = "off";
		
		localStorage.class3AlertTime = alertTime.value;
		
		class3Button.innerHTML = className.value;
console.log("end of case 3 saving");
		break;
	case 4:
console.log("case 4");
		localStorage.class4Name = className.value;
		localStorage.class4Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class4Mon = "true";
		else
			localStorage.class4Mon = "false";
		if(tues.checked)
			localStorage.class4Tues = "true";
		else
			localStorage.class4Tues = "false";
		if(wed.checked)
			localStorage.class4Wed = "true";
		else
			localStorage.class4Wed = "false";
		if(thur.checked)
			localStorage.class4Thur = "true";
		else
			localStorage.class4Thur = "false";
		if(fri.checked)
			localStorage.class4Fri = "true";			
		else
			localStorage.class4Fri = "false";
		if(sat.checked)
			localStorage.class4Sat = "true";
		else
			localStorage.class4Sat = "false";
		if(sun.checked)
			localStorage.class4Sun = "true";
		else
			localStorage.class4Sun = "false";	
console.log("end of saving checkboxes");			
		
		localStorage.class4StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class4Alert = "on";
		else
			localStorage.class4Alert = "off";
		
		localStorage.class4AlertTime = alertTime.value;
		
		class4Button.innerHTML = className.value;
console.log("end of case 4 saving");
		break;
	case 5:
console.log("case 5");
		localStorage.class5Name = className.value;
		localStorage.class5Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class5Mon = "true";
		else
			localStorage.class5Mon = "false";
		if(tues.checked)
			localStorage.class5Tues = "true";
		else
			localStorage.class5Tues = "false";
		if(wed.checked)
			localStorage.class5Wed = "true";
		else
			localStorage.class5Wed = "false";
		if(thur.checked)
			localStorage.class5Thur = "true";
		else
			localStorage.class5Thur = "false";
		if(fri.checked)
			localStorage.class5Fri = "true";			
		else
			localStorage.class5Fri = "false";
		if(sat.checked)
			localStorage.class5Sat = "true";
		else
			localStorage.class5Sat = "false";
		if(sun.checked)
			localStorage.class5Sun = "true";
		else
			localStorage.class5Sun = "false";	
console.log("end of saving checkboxes");			
		
		localStorage.class5StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class5Alert = "on";
		else
			localStorage.class5Alert = "off";
		
		localStorage.class5AlertTime = alertTime.value;
		
		class5Button.innerHTML = className.value;
console.log("end of case 5 saving");
		break;
	case 6:
console.log("case 6");
		localStorage.class6Name = className.value;
		localStorage.class6Building = buildingName.value;
		
		// check which days where checked:
		if(mon.checked)
			localStorage.class6Mon = "true";
		else
			localStorage.class6Mon = "false";
		if(tues.checked)
			localStorage.class6Tues = "true";
		else
			localStorage.class6Tues = "false";
		if(wed.checked)
			localStorage.class6Wed = "true";
		else
			localStorage.class6Wed = "false";
		if(thur.checked)
			localStorage.class6Thur = "true";
		else
			localStorage.class6Thur = "false";
		if(fri.checked)
			localStorage.class6Fri = "true";			
		else
			localStorage.class6Fri = "false";
		if(sat.checked)
			localStorage.class6Sat = "true";
		else
			localStorage.class6Sat = "false";
		if(sun.checked)
			localStorage.class6Sun = "true";
		else
			localStorage.class6Sun = "false";	
console.log("end of saving checkboxes");			
		
		localStorage.class6StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class6Alert = "on";
		else
			localStorage.class6Alert = "off";
		
		localStorage.class6AlertTime = alertTime.value;
		
		class6Button.innerHTML = className.value;
console.log("end of case 6 saving");
		break;
	}		
}

// Temp testing function
function clickMonday()
{
var mon2 = document.getElementById("mon2");
console.log("monday before: " + monday.checked);


	if(document.getElementById("monday").checked == true)
 		document.getElementById("monday").checked = false;
	else if(document.getElementById("monday").checked == false)
  		document.getElementById("monday").checked = true;
console.log("monday after: " + monday.checked);
}


/**
* deleteClass() Function
*
*/
function deleteClass()
{
console.log("deleteClass()");

	// Check which class the user is in, and delete it
	switch(currentClass)
	{
	case 1:
console.log("case 1");
		localStorage.removeItem("class1Name");
		localStorage.removeItem("class1Building");
		localStorage.removeItem("class1Mon");
		localStorage.removeItem("class1Tues");
		localStorage.removeItem("class1Wed");
		localStorage.removeItem("class1Thur");
		localStorage.removeItem("class1Fri");
		localStorage.removeItem("class1Sat");
		localStorage.removeItem("class1Sun");
		localStorage.removeItem("class1StartTime");
		localStorage.removeItem("class1Alert");
		localStorage.removeItem("class1AlertTime");
		
		class1Button.innerHTML = "Class 1";
console.log("end of case 1 deleteClass");
		break;
	case 2:
console.log("case 2");
		localStorage.removeItem("class2Name");
		localStorage.removeItem("class2Building");
		localStorage.removeItem("class2Mon");
		localStorage.removeItem("class2Tues");
		localStorage.removeItem("class2Wed");
		localStorage.removeItem("class2Thur");
		localStorage.removeItem("class2Fri");
		localStorage.removeItem("class2Sat");
		localStorage.removeItem("class2Sun");
		localStorage.removeItem("class2StartTime");
		localStorage.removeItem("class2Alert");
		localStorage.removeItem("class2AlertTime");
		
		class2Button.innerHTML = "Class 2";
console.log("end of case 2 deleteClass");
		break;
	case 3:
console.log("case 3");
		localStorage.removeItem("class3Name");
		localStorage.removeItem("class3Building");
		localStorage.removeItem("class3Mon");
		localStorage.removeItem("class3Tues");
		localStorage.removeItem("class3Wed");
		localStorage.removeItem("class3Thur");
		localStorage.removeItem("class3Fri");
		localStorage.removeItem("class3Sat");
		localStorage.removeItem("class3Sun");
		localStorage.removeItem("class3StartTime");
		localStorage.removeItem("class3Alert");
		localStorage.removeItem("class3AlertTime");
		
		class3Button.innerHTML = "Class 3";
console.log("end of case 3 deleteClass");
		break;	
	case 4:
console.log("case 4");
		localStorage.removeItem("class4Name");
		localStorage.removeItem("class4Building");
		localStorage.removeItem("class4Mon");
		localStorage.removeItem("class4Tues");
		localStorage.removeItem("class4Wed");
		localStorage.removeItem("class4Thur");
		localStorage.removeItem("class4Fri");
		localStorage.removeItem("class4Sat");
		localStorage.removeItem("class4Sun");
		localStorage.removeItem("class4StartTime");
		localStorage.removeItem("class4Alert");
		localStorage.removeItem("class4AlertTime");
		
		class4Button.innerHTML = "Class 4";
console.log("end of case 4 deleteClass");
		break;
	case 5:
console.log("case 5");
		localStorage.removeItem("class5Name");
		localStorage.removeItem("class5Building");
		localStorage.removeItem("class5Mon");
		localStorage.removeItem("class5Tues");
		localStorage.removeItem("class5Wed");
		localStorage.removeItem("class5Thur");
		localStorage.removeItem("class5Fri");
		localStorage.removeItem("class5Sat");
		localStorage.removeItem("class5Sun");
		localStorage.removeItem("class5StartTime");
		localStorage.removeItem("class5Alert");
		localStorage.removeItem("class5AlertTime");
		
		class5Button.innerHTML = "Class 5";
console.log("end of case 5 deleteClass");
		break;
	case 6:
console.log("case 6");
		localStorage.removeItem("class6Name");
		localStorage.removeItem("class6Building");
		localStorage.removeItem("class6Mon");
		localStorage.removeItem("class6Tues");
		localStorage.removeItem("class6Wed");
		localStorage.removeItem("class6Thur");
		localStorage.removeItem("class6Fri");
		localStorage.removeItem("class6Sat");
		localStorage.removeItem("class6Sun");
		localStorage.removeItem("class6StartTime");
		localStorage.removeItem("class6Alert");
		localStorage.removeItem("class6AlertTime");
		
		class6Button.innerHTML = "Class 6";
console.log("end of case 6 deleteClass");
		break;
	}
}


function class1()
{
console.log("class1()");
	currentClass = 1;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class1Name == undefined)
	{
console.log("display empty form");	
		className.value="";
		buildingName.value="";
		mon.checked = false;
		tues.checked=false;
		wed.checked=false;
		thur.checked=false;
		fri.checked=false;
		sat.checked=false;
		sun.checked=false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("End of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display saved class info");
		className.value = localStorage.class1Name;
		buildingName.value = localStorage.class1Building;
		
		// Get which days were checked and show that
		if(localStorage.class1Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class1Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class1Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class1Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class1Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class1Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class1Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");			
		startTime.value = localStorage.class1StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class1Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class1AlertTime;	
console.log("End of display saved class info");
	}
}

function class2()
{
console.log("class2()");	
	currentClass = 2;
	getScheduleElements();
	
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class2Name == undefined)
	{
console.log("display empty form");
		className.value="";
		buildingName.value="";
		
		mon.checked = false;
		tues.checked = false;
		wed.checked = false;
		thur.checked = false;
		fri.checked = false;
		sat.checked = false;
		sun.checked = false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("end of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display class2 info");
		className.value = localStorage.class2Name;
		buildingName.value = localStorage.class2Building;

		// Get which days were checked and show that
		if(localStorage.class2Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class2Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class2Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class2Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class2Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class2Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class2Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");		
		
		startTime.value = localStorage.class2StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class2Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class2AlertTime;	
console.log("End of display saved class info");
	}
}

function class3()
{
console.log("class3()");
	currentClass = 3;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class3Name == undefined)
	{
console.log("display empty form");	
		className.value="";
		buildingName.value="";
		mon.checked = false;
		tues.checked=false;
		wed.checked=false;
		thur.checked=false;
		fri.checked=false;
		sat.checked=false;
		sun.checked=false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("End of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display saved class info");
		className.value = localStorage.class3Name;
		buildingName.value = localStorage.class3Building;
		
		// Get which days were checked and show that
		if(localStorage.class3Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class3Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class3Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class3Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class3Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class3Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class3Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");			
		startTime.value = localStorage.class3StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class3Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class3AlertTime;	
console.log("End of display saved class info");
	}
}

function class4()
{
console.log("class4()");
	currentClass = 4;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class4Name == undefined)
	{
console.log("display empty form");	
		className.value="";
		buildingName.value="";
		mon.checked = false;
		tues.checked=false;
		wed.checked=false;
		thur.checked=false;
		fri.checked=false;
		sat.checked=false;
		sun.checked=false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("End of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display saved class info");
		className.value = localStorage.class4Name;
		buildingName.value = localStorage.class4Building;
		
		// Get which days were checked and show that
		if(localStorage.class4Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class4Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class4Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class4Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class4Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class4Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class4Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");			
		startTime.value = localStorage.class4StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class4Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class4AlertTime;	
console.log("End of display saved class info");
	}
}

function class5()
{
console.log("class5()");
	currentClass = 5;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class5Name == undefined)
	{
console.log("display empty form");	
		className.value="";
		buildingName.value="";
		mon.checked = false;
		tues.checked=false;
		wed.checked=false;
		thur.checked=false;
		fri.checked=false;
		sat.checked=false;
		sun.checked=false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("End of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display saved class info");
		className.value = localStorage.class5Name;
		buildingName.value = localStorage.class5Building;
		
		// Get which days were checked and show that
		if(localStorage.class5Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class5Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class5Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class5Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class5Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class5Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class5Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");			
		startTime.value = localStorage.class5StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class5Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class5AlertTime;	
console.log("End of display saved class info");
	}
}

function class6()
{
console.log("class6()");
	currentClass = 6;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class6Name == undefined)
	{
console.log("display empty form");	
		className.value="";
		buildingName.value="";
		mon.checked = false;
		tues.checked=false;
		wed.checked=false;
		thur.checked=false;
		fri.checked=false;
		sat.checked=false;
		sun.checked=false;
		startTime.value="";
		theAlert.selectedIndex = 0;
		alertTime.value="";
console.log("End of display empty form");
	}
	
	// Otherwise display the saved class info
	else
	{
console.log("display saved class info");
		className.value = localStorage.class6Name;
		buildingName.value = localStorage.class6Building;
		
		// Get which days were checked and show that
		if(localStorage.class6Mon == "true")
			mon.checked = true;
		else
			mon.checked = false;
		if(localStorage.class6Tues == "true")
			tues.checked = true;
		else
			tues.checked = false;
		if(localStorage.class6Wed == "true")
			wed.checked = true;
		else
			wed.checked = false;
		if(localStorage.class6Thur == "true")
			thur.checked = true;
		else
			thur.checked = false;
		if(localStorage.class6Fri == "true")
			fri.checked = true;			
		else
			fri.checked = false;
		if(localStorage.class6Sat == "true")
			sat.checked = true;
		else
			sat.checked = false;
		if(localStorage.class6Sun == "true")
			sun.checked = true;
		else
			sun.checked = false;
console.log("end of getting & showing checkboxes");			
		startTime.value = localStorage.class6StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class6Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class6AlertTime;	
console.log("End of display saved class info");
	}
}

/**************************** END OF SCHEDULE PAGE FUNCTIONS ****************************/
