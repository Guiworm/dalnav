/****************************************************************************************
* 		dalnav.js contains the functions for the Alerts, Directions, and Schedule		*
* 																						*
* @author: Osama Al-Arhabi																*
/***************************************************************************************/


/******************** The Alerts & Homepage Functions - USER STORY 11 & 24 ********************/
/** 
* @author: Osama Al-Arhabi
*
*/

/**
*	Global Variable Required for the Home Page Functions
*/
var upcomingClass;


function checkTodaysClasses()
{
	var class1Time, class2Time, class3Time, class4Time, class5Time, class6Time;
	var classTimes = new Array(); // stores today's classes times
	var classIndexes = new Array(); // stores today's classes index (i.e. class 1,2, etc..)
	var classNum = 0, today = 0, upcomingClass = 0;
	var splitClassDays = "", splitStartTime = "";
	
	getCurrentTime();
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)
	
	// Check Class 1
	if(localStorage.class1Name != undefined)
	{	
		classNum = 1;
		// Make sure there is a class start time saved:
		if(localStorage.class1StartTime == undefined)
			alert("Enter a start time for Class 1!!");
		else
		{

			splitClassDays = localStorage.class1Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class1StartTime.split(":"); // split to hours and minutes
					// Create a class1Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum; // save the class index
					today++;  // increment the counter of classes today
				}	
			}
		}
	}//End of Class1 Check
	
	
	// Check Class 2
	if(localStorage.class2Name != undefined)
	{	
		classNum = 2;
		// Make sure there is a class start time saved:
		if(localStorage.class2StartTime == undefined)
			alert("Enter a start time for Class 2!!");
		else
		{
			splitClassDays = localStorage.class2Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class2StartTime.split(":"); // split to hours and minutes
					// Create a class2Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum;
					today++;
				}	
			}
		}
	}//End of Class2 Check	

	
	// Check Class 3
	if(localStorage.class3Name != undefined)
	{	
		classNum = 3;
		// Make sure there is a class start time saved:
		if(localStorage.class3StartTime == undefined)
			alert("Enter a start time for Class 3!!");
		else
		{
			splitClassDays = localStorage.class3Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class3StartTime.split(":"); // split to hours and minutes
					// Create a class3Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum;
					today++;
				}	
			}
		}
	}//End of Class3 Check


	// Check Class 4
	if(localStorage.class4Name != undefined)
	{	
		classNum = 4;
		// Make sure there is a class start time saved:
		if(localStorage.class4StartTime == undefined)
			alert("Enter a start time for Class 4!!");
		else
		{
			splitClassDays = localStorage.class4Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class4StartTime.split(":"); // split to hours and minutes
					// Create a class4Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum;
					today++;
				}	
			}
		}
	}//End of Class4 Check
	
	
	// Check Class 5
	if(localStorage.class5Name != undefined)
	{	
		classNum = 5;
		// Make sure there is a class start time saved:
		if(localStorage.class5StartTime == undefined)
			alert("Enter a start time for Class 5!!");
		else
		{
			splitClassDays = localStorage.class5Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class5StartTime.split(":"); // split to hours and minutes
					// Create a class5Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum;
					today++;
				}	
			}
		}
	}//End of Class5 Check


	// Check Class 6
	if(localStorage.class6Name != undefined)
	{	
		classNum = 6;
		// Make sure there is a class start time saved:
		if(localStorage.class6StartTime == undefined)
			alert("Enter a start time for Class 6!!");
		else
		{
			splitClassDays = localStorage.class6Days.split(","); // Get days the class is on
			
			// Loop through the days that the class is on to check if there is class today
			for(i = 0; i < splitClassDays.length; i++)
			{	
				// if there is class today, save the time
				if(parseInt(splitClassDays[i]) == currentDay)
				{
					splitStartTime = localStorage.class6StartTime.split(":"); // split to hours and minutes
					// Create a class6Time date object (initialize date to today's date)
					classTimes[today] = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
					classIndexes[today] = classNum;
					today++;
				}	
			}
		}
	}//End of Class6 Check
	
	// After checking all 6 classes and saving the times of the ones today (if any), call the function that compares their times
	// and displays the upcoming one (passing it the array containing the list times of today's classes & their indexes):
	if(classTimes.length > 0)
		displayNextClass(classTimes, classIndexes);
	else
		document.getElementById("nextClass").innerHTML = "No Classes";
	
}//End of checkTodaysClasses





function displayNextClass(classTimes, classIndexes)
{
	console.log("\nInside displayNextClass. classTimes.length: "+classTimes.length+" indexes.length: "+classIndexes.length);
	var nextClass = document.getElementById("nextClass"); 
	
	getCurrentTime();
	var soonest = 0;
	var foundSoonest = false;
	
	// Loop through today's classes to see which one is the soonest:
	for(i = 0; i < classTimes.length; i++)
	{									
		if(classTimes[i] > time) // make sure class time didn't pass already
		{
			foundSoonest = true;
			
			if(classTimes[i] < classTimes[soonest])
				soonest = i;
		}
	}
	
	if(foundSoonest) // if we found an upcoming class today, display it on the homepage
	{
		switch(classIndexes[soonest])
		{
			case 1:
				upcomingClass = 1;
				nextClass.innerHTML = localStorage.class1Name +" at "+localStorage.class1StartTime;
				break;
			case 2:
				upcomingClass = 2;
				nextClass.innerHTML = localStorage.class2Name +" at "+localStorage.class2StartTime;
				break;
			case 3:
				upcomingClass = 3;
				nextClass.innerHTML = localStorage.class3Name +" at "+localStorage.class3StartTime;
				break;
			case 4:
				upcomingClass = 4;
				nextClass.innerHTML = localStorage.class4Name +" at "+localStorage.class4StartTime;
				break;
			case 5:
				upcomingClass = 5;
				nextClass.innerHTML = localStorage.class5Name +" at "+localStorage.class5StartTime;
				break;
			case 6:
				upcomingClass = 6;
				nextClass.innerHTML = localStorage.class6Name +" at "+localStorage.class6StartTime;
				break;
		}
	}
	
	else // if there is no soonest class
	{
		upcomingClass = 0;
		nextClass.innerHTML = "No Classes";
	}
	
	
}//End of displayNextClass()


/**
*	Homepage Function that shows the directions to your Next Class once you click on it
*   on the home page.
*/
function directionsToNextClass()
{
	switch(upcomingClass)
	{
		case 1:
			directionsToClass1();
			break;
		case 2:
			directionsToClass2();
			break;
		case 3:
			directionsToClass3();
			break;
		case 4:
			directionsToClass4();
			break;
		case 5:
			directionsToClass5();
			break;
		case 6:
			directionsToClass6();
			break;
	}
	
	// Take User to the Directions Map Page		
	window.location.href="#directionsMap";
}

/************************** END OF HOME PAGE FUNCTIONS *********************************/




/******************************** ALERTS FUNCTIONS **************************************/
/**
* Global Variables Required for the Alerts Functionality:
*/
var time = new Date(); 
var timer1, timer2, timer3, timer4, timer5, timer6, dailyTimer;
var seconds, minutes, hours, currentTime;
var class1AlertTime, class2AlertTime, class3AlertTime, class4AlertTime, class5AlertTime, class6AlertTime;
var class1StartTime, class2StartTime, class3StartTime, class4StartTime, class5StartTime, class6StartTime;


/**
*	Gets called the first time the application starts, checks if there are any alerts on,
*	and if so then calls the appropriate functions to start timers for TODAY's classes,
*   and keeps checking once every day (at 12am) to set timer alerts for all the classes on that day.
*/
function alertsManager()
{	
	loadSchedule(); loadDirections(); // loads content from localStorage upon first load of the app
	checkTodaysClasses(); //Checks which classes are on today to display the next class on home page
	 
	console.log("~~~~alertsManager was called~~~~");

	var anyAlertsOn = false;

	// First check if any classes have alerts on:
	if(localStorage.class1Alert == "on")
		anyAlertsOn = true;
	else if(localStorage.class2Alert == "on")
		anyAlertsOn = true;
	else if(localStorage.class3Alert == "on")
		anyAlertsOn = true;
	else if(localStorage.class4Alert == "on")
		anyAlertsOn = true;
	else if(localStorage.class5Alert == "on")
		anyAlertsOn = true;
	else if(localStorage.class6Alert == "on")
		anyAlertsOn = true;
	
	// Only if a class has alerts on do we need to start the alerts timer process
	if(anyAlertsOn == true)
	{
		console.log("\n\nAlerts are ON (for at least one class)\n\n");
		// Calculate the time till 12am the next day:
		var hoursTillTomorrow = (24 - time.getHours());
		console.log("Hours till Tomorrow: "+hoursTillTomorrow);

		// Set a timer that calls this function every day to set timer alerts for the classes
		// scheduled for today (note: 1 hour = 3600000 milliseconds)
		dailyTimer = setTimeout(function(){alertsManager();}, hoursTillTomorrow*3600000);
		console.log("dailyTimer set for: "+(hoursTillTomorrow*3600000));
	
	
		// Now check which classes' alerts are on and call their setAlerts functions
		if(localStorage.class1Alert == "on")
			setClass1Alert();
		if(localStorage.class2Alert == "on")
			setClass2Alert();
		if(localStorage.class3Alert == "on")
			setClass3Alert();
		if(localStorage.class4Alert == "on")
			setClass4Alert();
		if(localStorage.class5Alert == "on")
			setClass5Alert();
		if(localStorage.class6Alert == "on")
			setClass6Alert();	
	}

		
}//End of alertsManager()


/**
*	Gets called from the saveClass() Method if the Alerts toggle was switched to "on"
*	Once called it initiates the classAlert function for the given class
*
*/
function alerts(fromClass)
{
	// Depending on which class called the function (i.e. which class has alerts on)
	switch(fromClass)
	{
	case 1:
		setClass1Alert();
		break;
	case 2:
		setClass2Alert();
		break;
	case 3:
		setClass3Alert();
		break;
	case 4: 
		setClass4Alert();
		break;
	case 5:
		setClass5Alert();
		break;	
	case 6:
		setClass6Alert();	
		break;
	}
}

/**
*  Helper Method that gets the current time
*/
function getCurrentTime()
{
	time = new Date();
	time.getTime();
console.log("time object: "+time);
console.log("time.getDate: "+time.getDate());
	
	seconds = time.getSeconds();
	minutes = time.getMinutes();
	hours = time.getHours();
		
	currentTime = hours+":"+minutes+":"+seconds;	
}

/*
*  Helper method that gets & calculates class alert time 
*/
function getAlertTime()
{
	//localStorage.class1StartTime 16:00
	//localStorage.class1AlertTime 15
	
	
	
	// split class start time to hours and minutes
	var splitStartTime = localStorage.class1StartTime.split(":");
	
	// create a class1StartTime date object (initialize date to today's date)
	class1StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);
console.log("class start time object: "+class1StartTime);	

	// create a class1AlertTime date object
	class1AlertTime = new Date(class1StartTime - (parseInt(localStorage.class1AlertTime) *60000));
console.log("class alert time: "+class1AlertTime);	
}


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass1Alert()
{
	console.log("**** setClass1Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class1StartTime.split(":"); // split to hours and minutes
	
	// Create a class1StartTime date object (initialize date to today's date)
	class1StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class1AlertTime date object
	class1AlertTime = new Date(class1StartTime - (parseInt(localStorage.class1AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class1Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class1AlertTime.getHours()) && (time.getMinutes() <= class1AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class1AlertTime: "+class1AlertTime+" , time: "+time);
				var timeLeft = class1AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer1 = setTimeout(function(){displayAlert(1);}, timeLeft);
				console.log("***** Class1 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass1Alert()


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass2Alert()
{
	console.log("**** setClass2Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class2StartTime.split(":"); // split to hours and minutes
	
	// Create a class2StartTime date object (initialize date to today's date)
	class2StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class2AlertTime date object
	class2AlertTime = new Date(class2StartTime - (parseInt(localStorage.class2AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class2Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class2AlertTime.getHours()) && (time.getMinutes() <= class2AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class2AlertTime: "+class2AlertTime+" , time: "+time);
				var timeLeft = class2AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer2 = setTimeout(function(){displayAlert(2);}, timeLeft);
				console.log("***** Class2 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass2Alert()


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass3Alert()
{
	console.log("**** setClass3Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class3StartTime.split(":"); // split to hours and minutes
	
	// Create a class3StartTime date object (initialize date to today's date)
	class3StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class3AlertTime date object
	class3AlertTime = new Date(class3StartTime - (parseInt(localStorage.class3AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class3Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class3AlertTime.getHours()) && (time.getMinutes() <= class3AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class3AlertTime: "+class3AlertTime+" , time: "+time);
				var timeLeft = class3AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer3 = setTimeout(function(){displayAlert(3);}, timeLeft);
				console.log("***** Class3 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass3Alert()


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass4Alert()
{
	console.log("**** setClass4Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class4StartTime.split(":"); // split to hours and minutes
	
	// Create a class4StartTime date object (initialize date to today's date)
	class4StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class4AlertTime date object
	class4AlertTime = new Date(class4StartTime - (parseInt(localStorage.class4AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class4Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class4AlertTime.getHours()) && (time.getMinutes() <= class4AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class4AlertTime: "+class4AlertTime+" , time: "+time);
				var timeLeft = class4AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer4 = setTimeout(function(){displayAlert(4);}, timeLeft);
				console.log("***** Class4 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass4Alert()


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass5Alert()
{
	console.log("**** setClass5Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class5StartTime.split(":"); // split to hours and minutes
	
	// Create a class5StartTime date object (initialize date to today's date)
	class5StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class5AlertTime date object
	class5AlertTime = new Date(class5StartTime - (parseInt(localStorage.class5AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class5Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class5AlertTime.getHours()) && (time.getMinutes() <= class5AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class5AlertTime: "+class5AlertTime+" , time: "+time);
				var timeLeft = class5AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer5 = setTimeout(function(){displayAlert(5);}, timeLeft);
				console.log("***** Class5 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass5Alert()


/**
*	Sets the Class Alert timer if the Alert for the Class is set to "on"
*
*/
function setClass6Alert()
{
console.log("**** setClass6Alert() was called ******");
	// Get current time
	getCurrentTime();
	
	// Get alert time:	
	var splitStartTime = localStorage.class6StartTime.split(":"); // split to hours and minutes
	
	// Create a class6StartTime date object (initialize date to today's date)
	class6StartTime = new Date(time.getFullYear(),time.getMonth(),time.getDate(),splitStartTime[0],splitStartTime[1],0);	

	// Create a class6AlertTime date object
	class6AlertTime = new Date(class6StartTime - (parseInt(localStorage.class6AlertTime) *60000));
	
	// Get current day
	var currentDay = time.getDay(); // value from 0 to 6 (0 is sunday)

	//  Get days the class is on
	var splitClassDays = localStorage.class6Days.split(",");


	// Loop through the days the class is on and compare to today's day of the week to 
	// find if there is a class today, and if so then set an alert reminder (i.e. timer)
	for(i = 0; i < splitClassDays.length; i++)
	{	
		// if class is today, start a timer to alert you before class
		if(parseInt(splitClassDays[i]) == currentDay)
		{
			//check if the alert time didn't pass already
			if((time.getHours() <= class6AlertTime.getHours()) && (time.getMinutes() <= class6AlertTime.getMinutes()))
			{
				// If class is today, calculate time left, then set a timer:
				console.log("class6AlertTime: "+class6AlertTime+" , time: "+time);
				var timeLeft = class6AlertTime.getTime() - time.getTime(); // in milliseconds			
				console.log("TIME LEFT (minutes): "+ (timeLeft/60000));		

				timer6 = setTimeout(function(){displayAlert(6);}, timeLeft);
				console.log("***** Class6 Timer was set for: "+(timeLeft/60000)+" minutes *****");
			}
		}			
	}
}//End of setClass6Alert()


/**
*	Displays an alert message for the given class with the time remaining till it starts
*	
*	Takes a parameter indicating which class to display the alert for (i.e. 1 to 6)
*/
function displayAlert(callingClass)
{
	switch(callingClass)
	{
	case 1:
		alert(localStorage.class1Name + " starts in "+localStorage.class1AlertTime+" minutes!");
		break;
	case 2: 
		alert(localStorage.class2Name + " starts in "+localStorage.class2AlertTime+" minutes!");
		break;	
	case 3: 
		alert(localStorage.class3Name + " starts in "+localStorage.class3AlertTime+" minutes!");
		break;
	case 4: 
		alert(localStorage.class4Name + " starts in "+localStorage.class4AlertTime+" minutes!");
		break;
	case 5: 
		alert(localStorage.class5Name + " starts in "+localStorage.class5AlertTime+" minutes!");
		break;
	case 6: 
		alert(localStorage.class6Name + " starts in "+localStorage.class6AlertTime+" minutes!");
		break;
	}
}
/********************************* END of Alerts Functions ******************************************/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/******************** Directions Page & Directions Map Functions - USER STORY 4 ********************/
/** 
* @author: Osama Al-Arhabi
*
*/

/**
* Global Variables Required for the Directions Page Functions:
*/
var currentClass; // this variable is also used by the Schedule Page Functions
var class1DirectionsButton, class2DirectionsButton, class3DirectionsButton, 
	class4DirectionsButton, class5DirectionsButton, class6DirectionsButton;
var coordinates, splitCoordinates, lat, longt;
var directionsToTitle;

/**
* Helper function to get the HTML elements required for the Directions Page functions
*/
function getDirectionsElements()
{
	class1DirectionsButton = document.getElementById("class1DirectionsAnchor");
	class2DirectionsButton = document.getElementById("class2DirectionsAnchor");
	class3DirectionsButton = document.getElementById("class3DirectionsAnchor");
	class4DirectionsButton = document.getElementById("class4DirectionsAnchor");
	class5DirectionsButton = document.getElementById("class5DirectionsAnchor");
	class6DirectionsButton = document.getElementById("class6DirectionsAnchor");	
	directionsToTitle = document.getElementById("directionsMapTitle");	
}

/**
*	Loads the Directions Page containing the saved classes names
*
*	Content depends on whether a class is saved
*	or empty; displays the list accordingly
*/
function loadDirections()
{
	getDirectionsElements();
	
	if(localStorage.class1Name != undefined)
		class1DirectionsButton.innerHTML = localStorage.class1Name;
	if(localStorage.class2Name != undefined)
		class2DirectionsButton.innerHTML = localStorage.class2Name;
	if(localStorage.class3Name != undefined)
		class3DirectionsButton.innerHTML = localStorage.class3Name;
	if(localStorage.class4Name != undefined)
		class4DirectionsButton.innerHTML = localStorage.class4Name;
	if(localStorage.class5Name != undefined)
		class5DirectionsButton.innerHTML = localStorage.class5Name;
	if(localStorage.class6Name != undefined)
		class6DirectionsButton.innerHTML = localStorage.class6Name;
}


/**
*	The following 6 functions find the directions to the chosen class and
*	display them on the map.  They make use of the function findDirections() in 
*	directions.js
*/
function directionsToClass1()
{	
	// If no class is saved:
	if(localStorage.class1Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n  OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class1Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";
		
		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();		
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class1BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class1Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}

function directionsToClass2()
{
	// If no class is saved:
	if(localStorage.class2Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n      OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class2Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";

		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();		
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class2BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class2Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}

function directionsToClass3()
{
	// If no class is saved:
	if(localStorage.class3Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n      OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class3Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";

		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();		
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class3BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class3Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}

function directionsToClass4()
{
	// If no class is saved:
	if(localStorage.class4Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n      OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class4Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";
		
		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class4BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class4Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}

function directionsToClass5()
{
	// If no class is saved:
	if(localStorage.class5Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n      OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class5Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";
		
		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class5BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class5Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}

function directionsToClass6()
{
	// If no class is saved:
	if(localStorage.class6Name == undefined)
	{
		alert("No class has been saved yet! \n\nEither:\n  Add a class \n      OR\n  Go to the Registrar's Office"+
		" and register in one \n\nHere are the directions..");

// Alternatively, take back to directions page instead of showing directions to Reg Office		
//		window.location.href="#directions";
//		loadDirections();
		
		directionsToTitle.innerHTML = "To Registrar's Office";
		findDirections(44.636208,-63.593108); // directions to the Registrar's Office
	}
	
	// If a class is saved but without a building:
	else if(localStorage.class6Building < 1)
	{
		alert("You did not save a location for this class, go back to the Schedule page" +
		" and add the location!");
		directionsToTitle.innerHTML = "No Location Saved";
		
		// Take User to the Schedule Page		
		window.location.href="#schedule";
		loadSchedule();
	}
	
	// If class is saved, get the building's coordinates
	else
	{
		coordinates = localStorage.class6BuildingCoord;
		splitCoordinates = coordinates.split(",");
		
		directionsToTitle.innerHTML = localStorage.class6Name;
		
		findDirections(splitCoordinates[0], splitCoordinates[1]);
	}
}


/******************** End of Directions Page Functions ********************/


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



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
//var currentClass;
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
	// (depends on which class spot we are currently in)
	switch(currentClass)
	{
/* Save for Class 1 */	
	case 1:
		localStorage.class1Name = className.value;
		
		localStorage.class1Building = buildingName.selectedIndex;
		localStorage.class1BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class1Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class1Mon = "true";
			localStorage.class1Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class1Mon = "false";
		if(tues.checked)
		{
			localStorage.class1Tues = "true";
			localStorage.class1Days +=",2";
		}
		else
			localStorage.class1Tues = "false";
		if(wed.checked)
		{
			localStorage.class1Wed = "true";
			localStorage.class1Days +=",3";
		}
		else
			localStorage.class1Wed = "false";
		if(thur.checked)
		{
			localStorage.class1Thur = "true";
			localStorage.class1Days +=",4";
		}
		else
			localStorage.class1Thur = "false";
		if(fri.checked)
		{
			localStorage.class1Fri = "true";	
			localStorage.class1Days +=",5";
		}		
		else
			localStorage.class1Fri = "false";
		if(sat.checked)
		{
			localStorage.class1Sat = "true";
			localStorage.class1Days +=",6";
		}
		else
			localStorage.class1Sat = "false";
		if(sun.checked)
		{
			localStorage.class1Sun = "true";
			localStorage.class1Days +=",0";
		}
		else
			localStorage.class1Sun = "false";	
		
		// save the class start time	
		localStorage.class1StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class1StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class1Alert = "on";
			localStorage.class1AlertTime = alertTime.value; // saves the number of minutes to alert before class
			
			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class1Alert = "off";
				localStorage.class1AlertTime = "";
			}
			else
				alerts(1); // initiates the alerts function for the specific class (i.e. class 1 here)
		}
		else
		{
			localStorage.class1Alert = "off";
			localStorage.class1AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class1Button.innerHTML = className.value;
		break;
	

/* Save for Class 2 */		
	case 2:
		localStorage.class2Name = className.value;
		
		localStorage.class2Building = buildingName.selectedIndex;
		localStorage.class2BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class2Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class2Mon = "true";
			localStorage.class2Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class2Mon = "false";
		if(tues.checked)
		{
			localStorage.class2Tues = "true";
			localStorage.class2Days +=",2";
		}
		else
			localStorage.class2Tues = "false";
		if(wed.checked)
		{
			localStorage.class2Wed = "true";
			localStorage.class2Days +=",3";
		}
		else
			localStorage.class2Wed = "false";
		if(thur.checked)
		{
			localStorage.class2Thur = "true";
			localStorage.class2Days +=",4";
		}
		else
			localStorage.class2Thur = "false";
		if(fri.checked)
		{
			localStorage.class2Fri = "true";	
			localStorage.class2Days +=",5";
		}		
		else
			localStorage.class2Fri = "false";
		if(sat.checked)
		{
			localStorage.class2Sat = "true";
			localStorage.class2Days +=",6";
		}
		else
			localStorage.class2Sat = "false";
		if(sun.checked)
		{
			localStorage.class2Sun = "true";
			localStorage.class2Days +=",0";
		}
		else
			localStorage.class2Sun = "false";	
		
		// save the class start time	
		localStorage.class2StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class2StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");		
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class2Alert = "on";
			localStorage.class2AlertTime = alertTime.value; // saves the number of minutes to alert before class
					
			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class2Alert = "off";
				localStorage.class2AlertTime = "";
			}
			else		
				alerts(2); // initiates the alerts function for the specific class (i.e. class 2 here)
		}
		else
		{
			localStorage.class2Alert = "off";
			localStorage.class2AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class2Button.innerHTML = className.value;
		break;
	

/* Save for Class 3 */		
	case 3:
		localStorage.class3Name = className.value;
		
		localStorage.class3Building = buildingName.selectedIndex;
		localStorage.class3BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class3Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class3Mon = "true";
			localStorage.class3Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class3Mon = "false";
		if(tues.checked)
		{
			localStorage.class3Tues = "true";
			localStorage.class3Days +=",2";
		}
		else
			localStorage.class3Tues = "false";
		if(wed.checked)
		{
			localStorage.class3Wed = "true";
			localStorage.class3Days +=",3";
		}
		else
			localStorage.class3Wed = "false";
		if(thur.checked)
		{
			localStorage.class3Thur = "true";
			localStorage.class3Days +=",4";
		}
		else
			localStorage.class3Thur = "false";
		if(fri.checked)
		{
			localStorage.class3Fri = "true";	
			localStorage.class3Days +=",5";
		}		
		else
			localStorage.class3Fri = "false";
		if(sat.checked)
		{
			localStorage.class3Sat = "true";
			localStorage.class3Days +=",6";
		}
		else
			localStorage.class3Sat = "false";
		if(sun.checked)
		{
			localStorage.class3Sun = "true";
			localStorage.class3Days +=",0";
		}
		else
			localStorage.class3Sun = "false";	
		
		// save the class start time	
		localStorage.class3StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class3StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");		
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class3Alert = "on";
			localStorage.class3AlertTime = alertTime.value; // saves the number of minutes to alert before class

			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class3Alert = "off";
				localStorage.class3AlertTime = "";
			}
			else		
				alerts(3); // initiates the alerts function for the specific class (i.e. class 3 here)
		}
		else
		{
			localStorage.class3Alert = "off";
			localStorage.class3AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class3Button.innerHTML = className.value;
		break;
		
		
/* Save for Class 4 */		
	case 4:
		localStorage.class4Name = className.value;
		
		localStorage.class4Building = buildingName.selectedIndex;
		localStorage.class4BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class4Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class4Mon = "true";
			localStorage.class4Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class4Mon = "false";
		if(tues.checked)
		{
			localStorage.class4Tues = "true";
			localStorage.class4Days +=",2";
		}
		else
			localStorage.class4Tues = "false";
		if(wed.checked)
		{
			localStorage.class4Wed = "true";
			localStorage.class4Days +=",3";
		}
		else
			localStorage.class4Wed = "false";
		if(thur.checked)
		{
			localStorage.class4Thur = "true";
			localStorage.class4Days +=",4";
		}
		else
			localStorage.class4Thur = "false";
		if(fri.checked)
		{
			localStorage.class4Fri = "true";	
			localStorage.class4Days +=",5";
		}		
		else
			localStorage.class4Fri = "false";
		if(sat.checked)
		{
			localStorage.class4Sat = "true";
			localStorage.class4Days +=",6";
		}
		else
			localStorage.class4Sat = "false";
		if(sun.checked)
		{
			localStorage.class4Sun = "true";
			localStorage.class4Days +=",0";
		}
		else
			localStorage.class4Sun = "false";	
		
		// save the class start time	
		localStorage.class4StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class4StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class4Alert = "on";
			localStorage.class4AlertTime = alertTime.value; // saves the number of minutes to alert before class

			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class4Alert = "off";
				localStorage.class4AlertTime = "";
			}
			else			
				alerts(4); // initiates the alerts function for the specific class (i.e. class 4 here)
		}
		else
		{
			localStorage.class4Alert = "off";
			localStorage.class4AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class4Button.innerHTML = className.value;
		break;
		
			
/* Save for Class 5 */		
	case 5:
		localStorage.class5Name = className.value;
		
		localStorage.class5Building = buildingName.selectedIndex;
		localStorage.class5BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class5Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class5Mon = "true";
			localStorage.class5Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class5Mon = "false";
		if(tues.checked)
		{
			localStorage.class5Tues = "true";
			localStorage.class5Days +=",2";
		}
		else
			localStorage.class5Tues = "false";
		if(wed.checked)
		{
			localStorage.class5Wed = "true";
			localStorage.class5Days +=",3";
		}
		else
			localStorage.class5Wed = "false";
		if(thur.checked)
		{
			localStorage.class5Thur = "true";
			localStorage.class5Days +=",4";
		}
		else
			localStorage.class5Thur = "false";
		if(fri.checked)
		{
			localStorage.class5Fri = "true";	
			localStorage.class5Days +=",5";
		}		
		else
			localStorage.class5Fri = "false";
		if(sat.checked)
		{
			localStorage.class5Sat = "true";
			localStorage.class5Days +=",6";
		}
		else
			localStorage.class5Sat = "false";
		if(sun.checked)
		{
			localStorage.class5Sun = "true";
			localStorage.class5Days +=",0";
		}
		else
			localStorage.class5Sun = "false";	
		
		// save the class start time	
		localStorage.class5StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class5StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class5Alert = "on";
			localStorage.class5AlertTime = alertTime.value; // saves the number of minutes to alert before class
			
			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class5Alert = "off";
				localStorage.class5AlertTime = "";
			}
			else			
				alerts(5); // initiates the alerts function for the specific class (i.e. class 5 here)
		}
		else
		{
			localStorage.class5Alert = "off";
			localStorage.class5AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class5Button.innerHTML = className.value;
		break;
		
			
/* Save for Class 6 */		
	case 6:
		localStorage.class6Name = className.value;
		
		localStorage.class6Building = buildingName.selectedIndex;
		localStorage.class6BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		localStorage.class6Days = "-1"; // initialize classDays to -1 (a string indicating days class is on)
		
		// check which days where checked:						(i.e. M,W,F would be 1,3,5)
		if(mon.checked)
		{
			localStorage.class6Mon = "true";
			localStorage.class6Days +=",1"; // 0 is sunday, 1 is monday and so on up to saturday is 6
		}
		else
			localStorage.class6Mon = "false";
		if(tues.checked)
		{
			localStorage.class6Tues = "true";
			localStorage.class6Days +=",2";
		}
		else
			localStorage.class6Tues = "false";
		if(wed.checked)
		{
			localStorage.class6Wed = "true";
			localStorage.class6Days +=",3";
		}
		else
			localStorage.class6Wed = "false";
		if(thur.checked)
		{
			localStorage.class6Thur = "true";
			localStorage.class6Days +=",4";
		}
		else
			localStorage.class6Thur = "false";
		if(fri.checked)
		{
			localStorage.class6Fri = "true";	
			localStorage.class6Days +=",5";
		}		
		else
			localStorage.class6Fri = "false";
		if(sat.checked)
		{
			localStorage.class6Sat = "true";
			localStorage.class6Days +=",6";
		}
		else
			localStorage.class6Sat = "false";
		if(sun.checked)
		{
			localStorage.class6Sun = "true";
			localStorage.class6Days +=",0";
		}
		else
			localStorage.class6Sun = "false";	
		
		// save the class start time	
		localStorage.class6StartTime = startTime.value;
		console.log("Class start time: "+localStorage.class6StartTime);	
		
		if(startTime.value == "")
			alert("Must enter a Class Start Time for the NEXT CLASS function on the Home Page to work!!");
		
		// get the alert switch value (on/off) & if "on" then call the alerts function
		if(theAlert.selectedIndex == 1)
		{
			localStorage.class6Alert = "on";
			localStorage.class6AlertTime = alertTime.value; // saves the number of minutes to alert before class
			
			// Error Check to ensure that the user entered a class start time & alert time if he switched alerts on
			if((startTime.value == "") || (alertTime.value == ""))
			{
				alert("Must enter a Class Start Time and an Alert Time for the Alerts to work!");
				localStorage.class6Alert = "off";
				localStorage.class6AlertTime = "";
			}
			else
				alerts(6); // initiates the alerts function for the specific class (i.e. class 6 here)
		}
		else
		{
			localStorage.class6Alert = "off";
			localStorage.class6AlertTime = ""; // sets alert how long before to 0 since alert is off
		}
		
		class6Button.innerHTML = className.value;
		break;	
	}	
	
	// After saving a class, checkTodaysClasses() gets called to update your next class info on the home page
	checkTodaysClasses();
	
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
		localStorage.removeItem("class1BuildingCoord");
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
		localStorage.removeItem("class1Days");
		
		class1Button.innerHTML = "Class 1";
		break;
	
	case 2:
		localStorage.removeItem("class2Name");
		localStorage.removeItem("class2Building");
		localStorage.removeItem("class2BuildingCoord");
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
		localStorage.removeItem("class2Days");
		
		class2Button.innerHTML = "Class 2";
		break;
	
	case 3:
		localStorage.removeItem("class3Name");
		localStorage.removeItem("class3Building");
		localStorage.removeItem("class3BuildingCoord");
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
		localStorage.removeItem("class3Days");
		
		class3Button.innerHTML = "Class 3";
		break;	
	
	case 4:
		localStorage.removeItem("class4Name");
		localStorage.removeItem("class4Building");
		localStorage.removeItem("class4BuildingCoord");
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
		localStorage.removeItem("class4Days");
		
		class4Button.innerHTML = "Class 4";
		break;
	
	case 5:
		localStorage.removeItem("class5Name");
		localStorage.removeItem("class5Building");
		localStorage.removeItem("class5BuildingCoord");
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
		localStorage.removeItem("class5Days");
		
		class5Button.innerHTML = "Class 5";
		break;
	
	case 6:
		localStorage.removeItem("class6Name");
		localStorage.removeItem("class6Building");
		localStorage.removeItem("class6BuildingCoord");
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
		localStorage.removeItem("class6Days");
		
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
		buildingName.selectedIndex = localStorage.class1Building;
		
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
		
		startTime.value = localStorage.class1StartTime;
		
		// get the saved alert switch value and show that
		if(localStorage.class1Alert == "on")
			theAlert.selectedIndex = 1
		else
			theAlert.selectedIndex = 0;
	
		alertTime.value = localStorage.class1AlertTime;	
	}
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');	
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');
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
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');
	
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
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');
	
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
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');
	
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
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');
	
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
	
	// Now Refresh the content of the page to reflect the changes made 
	
	// Refresh the building selector:
	$('#buildingNameEdit').selectmenu('refresh');
	
	// Refresh the days checkboxes:			
	$("input[type='checkbox']").checkboxradio("refresh");
	
	// Refresh the alert selector toggle:	
	$('#alertEdit').slider('refresh');	
} // end of class6()

/**************************** END OF SCHEDULE FUNCTIONS ****************************/
