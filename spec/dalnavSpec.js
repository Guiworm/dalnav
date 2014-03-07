/**
* SCHEDULE FUNCTIONS JASMINE TESTS (USER STORIES 2 & 3)
*
* @author: Osama Al-Arhabi
*/

describe("Viewing/Editing Class List", function() {
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



describe("Saving/Editing Class Details", function() {
	
	beforeEach(function() {
		getScheduleElements();
		
	});
	
	it("Should save the Class Name and Building Name", function() {
		currentClass = 1;
		className.value = "SampleClassName1";
		buildingName.value = "SampleBuildingName";
		
		
		saveClass();
		
		expect(localStorage.class1Name).toContain("SampleClassName");
		expect(localStorage.class1Building).toContain("SampleBuildingName");
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



describe("Viewing Class Details", function() {
	
	beforeEach(function() {
		getScheduleElements();
	});
	
	it("Should show an empty form if clicked on an empty class", function() {
		currentClass = 1;
		
		localStorage.clear();
	
		class1();
		
		console.log("className: " + className.value);
		expect(className.value).toBe("");
		expect(buildingName.value).toBe("");
	});
	
	it("Should show the Class Name and Building Name", function() {
		currentClass = 1;
		
		localStorage.class1Name = "SampleClassName1";
		localStorage.class1Building = "SampleBuildingName";
		
		
		class1();
		
		expect(className.value).toBe("SampleClassName1");
		expect(buildingName.value).toBe("SampleBuildingName");
	});
	
	it("Should show the Days the class is taught", function() {
		currentClass = 1;
		
		localStorage.class1Tues = "true";
		localStorage.class1Thur = "true";
		
		class1();
		
		expect(tues.checked).toBe(true);
		expect(thur.checked).toBe(true);
	});
	
	it("Should show the Class Start Time", function() {
		currentClass = 1;
		
		localStorage.class1StartTime = "10:00";
		
		class1();
		
		expect(startTime.value).toContain("10:00");
	});
	
	it("Should show the Alert(on/off) Status & Alert Time", function() {
		currentClass = 1;
		
		localStorage.class1Alert = "on";
		localStorage.class1AlertTime = "15";
		
		class1();
		
		expect(theAlert.selectedIndex).toBe(1);
		expect(alertTime.value).toBe("15");
	}); 
	
	localStorage.clear();
});



describe("Deleting a Class", function() {
	
	it("Should remove the class from the list and delete all its details", function() {
		getScheduleElements();
		class1 = class1Button;
		localStorage.clear();
		
		currentClass = 1;
		
		className.value = "SampleClassName1";
		buildingName.value = "SampleBuildingName";
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
