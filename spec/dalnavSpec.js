/**
* DIRECTIONS FUNCTIONS JASMINE TESTS (USER STORY 4)
*
* @author: Osama Al-Arhabi
*/


describe("DIRECTIONS PAGE: Getting Directions to a Class", function() {

var dirToTitle;

	beforeEach(function() {
		getDirectionsElements();
		dirToTitle = document.getElementById("directionsMapTitle");
		localStorage.clear();
		localStorage.class1Name = "SampleClass1";
		localStorage.class1Building = 1;
		localStorage.class1BuildingCoord = "44.637735,-63.588473";
	});
	

	
	it("Should give directions to the chosen class", function() {
	
	//loadDirections();
	directionsToClass1();
	
	console.log("dir to title: "+ dirToTitle);
	
	console.log("dirMap: "+$(".dirMap"));
	
	expect(dirToTitle.innerHTML).toContain(localStorage.class1Name);
	
	expect($(".dirMap"));
	expect($(".gm-style"));
	});

});



describe("DIRECTIONS PAGE: Viewing the Classes list on the Directions Page", function() {
	var class1dir; 
	var class2dir;
	var class3dir;
	var class4dir;
	var class5dir;
	var class6dir;
	
	beforeEach(function() {
		getDirectionsElements();
		class1dir = class1DirectionsButton;
		class2dir = class2DirectionsButton;
		class3dir = class3DirectionsButton;
		class4dir = class4DirectionsButton;
		class5dir = class5DirectionsButton;
		class6dir = class6DirectionsButton;
		localStorage.clear();
	});
	
	it("Should display generic placeholders for the empty class spots (1 to 6)", function() {
		
	//	console.log("should display an empty list function");
	//	console.log(class1);			
	//	console.log(class1.innerHTML);
		
		loadDirections();

		expect(class1dir.innerHTML).toContain("Class 1");
		expect(class2dir.innerHTML).toContain("Class 2");
		expect(class3dir.innerHTML).toContain("Class 3");
		expect(class4dir.innerHTML).toContain("Class 4");
		expect(class5dir.innerHTML).toContain("Class 5");
		expect(class6dir.innerHTML).toContain("Class 6");
	});

	it("Should display the class name for saved classes", function(){
		localStorage.class1Name = "SampleClassName1";
		localStorage.class2Name = "SampleClassName2";
		localStorage.class3Name = "SampleClassName3";
		localStorage.class4Name = "SampleClassName4";
		localStorage.class5Name = "SampleClassName5";
		localStorage.class6Name = "SampleClassName6";
		
		loadDirections();
		
		getDirectionsElements();
		class1dir = class1DirectionsButton;
		class2dir = class2DirectionsButton;
		class3dir = class3DirectionsButton;
		class4dir = class4DirectionsButton;
		class5dir = class5DirectionsButton;
		class6dir = class6DirectionsButton;
		
		//console.log("class1: "+ class1.innerHTML);
		//console.log(localStorage.class1Name);
		
		expect(class1dir.innerHTML).toContain("SampleClassName1");
		expect(class2dir.innerHTML).toContain("SampleClassName2");
		expect(class3dir.innerHTML).toContain("SampleClassName3");
		expect(class4dir.innerHTML).toContain("SampleClassName4");
		expect(class5dir.innerHTML).toContain("SampleClassName5");
		expect(class6dir.innerHTML).toContain("SampleClassName6");
		
		localStorage.clear();
	});	
});


/**************** END OF DIRECTIONS FUNCTIONS JASMINE TESTS ****************/






/**
* SCHEDULE FUNCTIONS JASMINE TESTS (USER STORIES 2 & 3)
*
* @author: Osama Al-Arhabi
*/

describe("SCHEDULE/CLASS PAGE: Viewing/Editing Class List", function() {
	var class1; 
	var class2;
	var class3;
	var class4;
	var class5;
	var class6;
	
	beforeEach(function() {
		getScheduleElements();
		class1 = class1Button;
		class2 = class2Button;
		class3 = class3Button;
		class4 = class4Button;
		class5 = class5Button;
		class6 = class6Button;
		localStorage.clear();
	});
	
	it("Should display generic placeholders for the empty class spots (1 to 6)", function() {
		
		console.log("should display an empty list function");
		console.log(class1);			
		console.log(class1.innerHTML);
		
		loadSchedule();

		expect(class1.innerHTML).toContain("Class 1");
		expect(class2.innerHTML).toContain("Class 2");
		expect(class3.innerHTML).toContain("Class 3");
		expect(class4.innerHTML).toContain("Class 4");
		expect(class5.innerHTML).toContain("Class 5");
		expect(class6.innerHTML).toContain("Class 6");
	});

	it("Should display the class name for saved classes", function(){
		localStorage.class1Name = "SampleClassName1";
		localStorage.class2Name = "SampleClassName2";
		localStorage.class3Name = "SampleClassName3";
		localStorage.class4Name = "SampleClassName4";
		localStorage.class5Name = "SampleClassName5";
		localStorage.class6Name = "SampleClassName6";
		
		loadSchedule();
		
		getScheduleElements();
		class1 = class1Button;
		class2 = class2Button;
		class3 = class3Button;
		class4 = class4Button;
		class5 = class5Button;
		class6 = class6Button;
		
		console.log("class1: "+ class1.innerHTML);
		console.log(localStorage.class1Name);
		
		expect(class1.innerHTML).toContain("SampleClassName1");
		expect(class2.innerHTML).toContain("SampleClassName2");
		expect(class3.innerHTML).toContain("SampleClassName3");
		expect(class4.innerHTML).toContain("SampleClassName4");
		expect(class5.innerHTML).toContain("SampleClassName5");
		expect(class6.innerHTML).toContain("SampleClassName6");
		
		localStorage.clear();
	});	
});



describe("SCHEDULE/CLASS PAGE: Saving/Editing Class Details", function() {
	
	beforeEach(function() {
		getScheduleElements();
		
	});
	
	it("Should save the Class Name, Selected Building Index, and Coordinates", function() {
		currentClass = 1;
		className.value = "SampleClassName1";
		buildingName.selectedIndex = 1;
		
	//	localStorage.class1Building = buildingName.selectedIndex;
	//	localStorage.class1BuildingCoord = buildingName.options[buildingName.selectedIndex].value;
		
		saveClass();
		
		expect(localStorage.class1Name).toBe("SampleClassName1");
		expect(localStorage.class1Building).toBe("1");
		expect(localStorage.class1BuildingCoord).toBe(buildingName.options[buildingName.selectedIndex].value);
	});
	
	it("Should save the Days the class is taught", function() {
		currentClass = 1;
		
		tues.checked = true;
		thur.checked = true;
		
		saveClass();
		
		expect(localStorage.class1Tues).toBe("true");
		expect(localStorage.class1Thur).toBe("true");
	});
	
	
	it("Should save the Class Start Time", function() {
		currentClass = 1;
		
		startTime.value = "10:00";
		
		console.log("startime: "+ startTime.value);
		saveClass();
		
		expect(localStorage.class1StartTime).toContain("10:00");
	});
	
	
	it("Should save the Alert(on/off) Status & Alert Time", function() {
		currentClass = 1;
		
		theAlert.selectedIndex = 1;
		alertTime.value = "15"
		
		saveClass();
		
		expect(localStorage.class1Alert).toBe("on");
		expect(localStorage.class1AlertTime).toBe("15");
	}); 
	
	localStorage.clear();
});	




describe("SCHEDULE/CLASS PAGE: Deleting a Class", function() {
	
	it("Should remove the class from the list and delete all its details", function() {
		getScheduleElements();
		class1 = class1Button;
		localStorage.clear();
		
		currentClass = 1;
		
		className.value = "SampleClassName1";
		buildingName.selectedIndex = 1;
		tues.checked = true;
		thur.checked = true;
		startTime.value = "10:00";
		theAlert.selectedIndex = 1;
		alertTime.value = "15"
		
		saveClass();

		deleteClass();		

		expect(localStorage.length).toBe(0);
		expect(class1.innerHTML).toBe("Class 1");
	});
	localStorage.clear();
});


/**************** END OF SCHEDULE FUNCTIONS JASMINE TESTS ****************/