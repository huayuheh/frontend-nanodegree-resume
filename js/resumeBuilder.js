
var bio = {
	"name" : "Huayu Heh",
	"role" : "Front-End Developer",
	"welcomeMassage" : "Welcome to see my resume",
	"biopic" : "images/self_portrait.jpg",
	"contain" : {
		"mobile" : "415-999-0504",
		"email" : "huayuheh@gmail.com",
		"github" : "huayuheh",
		"website" : "huayuheh.com",
		"location" : "San Francisco"
	},
	"skills" : [
		"UI design","UX design", "JS"
	],
	"header" : {},
	"contacts" : {},
	"skills" : {}
};


bio.header.display = function(){
	// headline
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedName, formattedRole);

	// Contacts
	var formattedMobile = HTMLmobile.replace("%data%",bio.contain.mobile);

	var linkEmail = '<a class="link" href="mailto:' + bio.contain.email+'">';
	var formattedEmail = HTMLemail.replace("%data%",linkEmail + bio.contain.email + '</a>');

	var linkGithub = "<a class='link' href='http://github.com/" + bio.contain.github + "' target='blank'>";
	var formattedGithub =HTMLgithub.replace("%data%",linkGithub + bio.contain.github + "</a>");

	var linkWebsite = "<a class='link' href='http://" + bio.contain.website + "' target='blank'>";
	var formattedWebsite = HTMLwebsite.replace("%data%",linkWebsite + bio.contain.website + "</a>");

	var formattedLocation = HTMLlocation.replace("%data%",bio.contain.location);

	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedWebsite, formattedLocation);

	// Picture and Welcome Msg
	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMassage);
	$("#header").append(formattedPic, formattedWelcomeMsg);

	//Skill

};

bio.header.display();



// $(document).click(function(loc){

// 	console.log(loc.pageX, loc.pageY)
// });




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





var projects = {"projects":
      [{"title": "First Web Page",
      "dates": "May 18th",
      "description": "Web Page created using code for first time"},
      {"title": "My Quiz",
      "dates": "June 29th",
      "description": "Disney quiz with Python"}]
  };

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
  for (project in projects.projects) {


    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);


  }
}
projects.display();






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


$("#mapDiv").append(googleMap);

