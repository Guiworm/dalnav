
/******************** Directions Page Functions ********************/
/** 
* @author: Osama Al-Arhabi
*
*/

/**
* Global Variables Required for the Directions Page Functions:
*/

/*var className, buildingName, days, theAlert, startTime, alertTime;
var mon, tues, wed, thur, fri, sat, sun;
var currentClass;
var class1Button, class2Button, class3Button, class4Button, class5Button, class6Button;
*/





//loadDirections()
//{
//}


/******************** SCHEDULE FUNCTIONS - USER STORIES 2 & 3 ********************/
/** 
* @author: Osama Al-Arhabi
*
*/

/**
* Global Variables Required for the Schedule Functions:
*/
var className, buildingName, days, theAlert, startTime, alertTime;
var mon, tues, wed, thur, fri, sat, sun;
var currentClass;
var class1Button, class2Button, class3Button, class4Button, class5Button, class6Button;


/**
* Helper function to get the HTML elements required for the Schedule Page functions
*/
function getScheduleElements()
{
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
}


/**
*	Loads the Schedule Page Containing the Class List
*	
*	Content depends on whether a class is saved
*	or empty; displays the list accordingly
*/
function loadSchedule()
{
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
}

/**
* Saves the Class Info after Editing or Adding a new Class
*
*/
function saveClass()
{
	
	// Save the user's input for all the specified class data fields
	switch(currentClass)
	{
	case 1:
		localStorage.class1Name = className.value;

//console.log("Buiding index: "+ buildingName[buildingName.selectedIndex].innerHTML);	
		
		localStorage.class1Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class1Building);
		
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
			
		localStorage.class1StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class1Alert = "on";
		else
			localStorage.class1Alert = "off";
		
		localStorage.class1AlertTime = alertTime.value;
		
		class1Button.innerHTML = className.value;
		break;
	
	case 2:
		localStorage.class2Name = className.value;
		localStorage.class2Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class2Building);
		
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
		
		localStorage.class2StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class2Alert = "on";
		else
			localStorage.class2Alert = "off";
		
		localStorage.class2AlertTime = alertTime.value;
		
		class2Button.innerHTML = className.value;
		break;

	case 3:
		localStorage.class3Name = className.value;
		localStorage.class3Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class3Building);
		
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
		
		localStorage.class3StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class3Alert = "on";
		else
			localStorage.class3Alert = "off";
		
		localStorage.class3AlertTime = alertTime.value;
		
		class3Button.innerHTML = className.value;
		break;

	case 4:
		localStorage.class4Name = className.value;
		localStorage.class4Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class4Building);
		
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
		
		localStorage.class4StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class4Alert = "on";
		else
			localStorage.class4Alert = "off";
		
		localStorage.class4AlertTime = alertTime.value;
		
		class4Button.innerHTML = className.value;
		break;
	
	case 5:
		localStorage.class5Name = className.value;
		localStorage.class5Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class5Building);
		
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
		
		localStorage.class5StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class5Alert = "on";
		else
			localStorage.class5Alert = "off";
		
		localStorage.class5AlertTime = alertTime.value;
		
		class5Button.innerHTML = className.value;
		break;
	
	case 6:
		localStorage.class6Name = className.value;
		localStorage.class6Building = buildingName.selectedIndex;
console.log("saved building index: "+localStorage.class6Building);
		
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
		
		localStorage.class6StartTime = startTime.value;
		
		// get the alert switch value (on/off)
		if(theAlert.selectedIndex == 1)
			localStorage.class6Alert = "on";
		else
			localStorage.class6Alert = "off";
		
		localStorage.class6AlertTime = alertTime.value;
		
		class6Button.innerHTML = className.value;
		break;
	}		
} // end of saveClass()



/**
* Deletes all the Class Details and deletes it from the Class List
*
*/
function deleteClass()
{
console.log("deleteClass()");

	// Check which class the user is in, and delete it
	switch(currentClass)
	{
	case 1:
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
		break;
	
	case 2:
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
		break;
	
	case 3:
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
		break;	
	
	case 4:
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
		break;
	
	case 5:
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
		break;
	
	case 6:
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
		break;
	}
} // end of deleteClass()


/**
* Displays Class 1 Details (if saved) or an empty form otherwise
*
*/
function class1()
{
	currentClass = 1;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class1Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex = 0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);
//	buildingName.value="";
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class1Name;
	
//buildingName[buildingName.selectedIndex].innerHTML	
		
		buildingName.selectedIndex = localStorage.class1Building;
console.log("retrieved building index: " + localStorage.class1Building);
//	buildingName.value = localStorage.class1Building;
		
		// Get which days were checked and show that
		if(localStorage.class1Mon == "true")
		{
			mon.checked = true;
//			mon.setAttr("checked", "checked");
//	$(mon).attr("checked", "checked");
//alert($("input#monday").attr("checked"));
console.log("monday attribute: "+localStorage.class1Mon);

		}
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
		
		startTime.value = localStorage.class1StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class1Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class1AlertTime;	
	}
} // end of class1()


/**
* Displays Class 2 Details (if saved) or an empty form otherwise
*
*/
function class2()
{	
	currentClass = 2;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class2Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex = 0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);		
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class2Name;
		buildingName.selectedIndex = localStorage.class2Building;
console.log("retrieved building index: " + localStorage.class2Building);

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
		
		startTime.value = localStorage.class2StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class2Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class2AlertTime;	
	}
} // end of class2()


/**
* Displays Class 3 Details (if saved) or an empty form otherwise
*
*/
function class3()
{
	currentClass = 3;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class3Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex = 0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class3Name;
		buildingName.selectedIndex = localStorage.class3Building;
console.log("retrieved building index: " + localStorage.class3Building);
		
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
		
		startTime.value = localStorage.class3StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class3Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class3AlertTime;	
	}
} // end of class3()


/**
* Displays Class 4 Details (if saved) or an empty form otherwise
*
*/
function class4()
{
	currentClass = 4;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class4Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex=0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class4Name;
		buildingName.selectedIndex = localStorage.class4Building;
console.log("retrieved building index: " + localStorage.class4Building);
		
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
		
		startTime.value = localStorage.class4StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class4Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class4AlertTime;	
	}
} // end of class4()


/**
* Displays Class 5 Details (if saved) or an empty form otherwise
*
*/
function class5()
{
	currentClass = 5;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class5Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex=0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class5Name;
		buildingName.selectedIndex = localStorage.class5Building;
console.log("retrieved building index: " + localStorage.class5Building);
		
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
		
		startTime.value = localStorage.class5StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class5Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class5AlertTime;	
	}
} // end of class5()


/**
* Displays Class 6 Details (if saved) or an empty form otherwise
*
*/
function class6()
{
	currentClass = 6;
	getScheduleElements();
	
	// If the class was not added yet, then display an empty form
	if(localStorage.class6Name == undefined)
	{
		className.value="";
		buildingName.selectedIndex=0;
console.log("empty class, selected index is: "+ buildingName.selectedIndex);
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
	}
	
	// Otherwise display the saved class info
	else
	{
		className.value = localStorage.class6Name;
		buildingName.selectedIndex = localStorage.class6Building;
console.log("retrieved building index: " + localStorage.class6Building);
		
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
		
		startTime.value = localStorage.class6StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class6Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
			
		alertTime.value = localStorage.class6AlertTime;	
	}
} // end of class6()

/**************************** END OF SCHEDULE FUNCTIONS ****************************/
