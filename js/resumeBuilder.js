/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  var awesomeThoughts = "I am Huayu and I am AWESOME!";
//  console.log(awesomeThoughts);
//  var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//  console.log(funThoughts);
//  $("#main").append(funThoughts);
// var name = "Huayu Heh"
// var role = "Front-End Developer"



// var skill = ["UI design","UX design","JS","drawing"];
// console.log(skill.length);


// var work ={ };
// 	work.position = "UI Designer";
// 	work.employer = "JYreading";
// 	work.year = 0.3;

// var education = {};
// 	education["name"] = "Acadamy of Art University";
// 	education["year"] = "2015-2017";
// 	education["city"] = "San Francisco, CA, US";


// $("#main").append(work["position"]);
// $("#main").append(education.name);

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});




var work = {
	"jobs" : [
		{
			"employer" : "JYreading",
			"title" : "Designer",
			"location" : "Online",
			"dates" : "2014",
			"description" :"eeeeeee"
		},{
			"employer" : "JYreading123",
			"title" : "Designer123",
			"location" : "Online123",
			"dates" : "2016",
			"description" :"eeeeeee"
		}
	]
};
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);	
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation + formattedDate + formattedDescription;
		$(".work-entry:last").append(formattedEmployerTitle);
	}
}
displayWork();





var projects = {
	"projects" : [
		{
			"title" : "Billbo",
			"dates" : "2015",
			"description" : "fdsfsff sfsdfs",
			"images": [
				"images/"

			]
		}

	]
};

var bio = {
	"name" : "Huayu Heh",
	"role" : "Front-End Developer",
	"welcomeMassage" : "Welcome to see my resume",
	"biopic" : "",
	"contain" : {
		"mobile" : "415-999-0504",
		"email" : "huayuheh@gmail.com",
		"github" : "",
		"location" : "San Francisco"
	},
	"skills" : [
		"UI design","UX design", "JS"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contain.mobile);

$("#header").prepend(formattedName, formattedRole);
$("#header").append(formattedMobile);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

}

function inName(name){
	name = name.split(" ");
	console.log(name);

	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);


var education = {
	"school" : [
		{
			"name" : "Acadamy of Art University",
			"city" : "San Francisco, CA, US",
			"major" : "Masters Fine Art",
			"minor" : "Web design and new media",
			"dates" : 2017,
			"url" : ""
		},{
			"name" : "Acadamy of Art University",
			"city" : "San Francisco, CA, US",
			"major" : "Masters Fine Artn",
			"minor" : "Illustration",
			"dates" : 2014,
			"url" : ""
		}
	],
	"onlineCourse" : [
		{
			"title" : "Fron-End Developer N",
			"school" : "Udacity",
			"dates" : 2016,
			"url" : ""
		}
	]
}




