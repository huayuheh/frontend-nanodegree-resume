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