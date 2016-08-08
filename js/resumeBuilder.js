/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var awesomeThoughts = "I am Huayu and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 console.log(funThoughts);
 // $("#main").append(funThoughts);
var name = "Huayu Heh"
var role = "Front-End Developer"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName, formattedRole);

var skill = ["UI design","UX design","JS","drawing"];
console.log(skill.length);


var work ={ };
	work.position = "UI Designer";
	work.employer = "JYreading";
	work.year = 0.3;

var education = {};
	education["name"] = "Acadamy of Art University";
	education["year"] = "2015-2017";
	education["city"] = "San Francisco, CA, US";


$("#main").append(work["position"]);
$("#main").append(education.name);