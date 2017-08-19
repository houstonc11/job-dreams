
$(document).ready(function() {

$("#employerButton").on("click", function() {

var checkedEducation = [];

$('.form-check-education[type="checkbox"]:checked').each(function() {
	checkedEducation.push($(this).val());
});

var checkedLanguage = [];

$('.form-check-language[type="checkbox"]:checked').each(function() {
	checkedLanguage.push($(this).val());
});

var checkedYears = $('input[name="exampleRadios"]:checked').val();

console.log(checkedEducation);
console.log(checkedLanguage);
console.log(checkedYears)

console.log(5);

});



$("#seekerButton").on("click", function() {

var checkedEducation = [];

$('.form-check-education[type="checkbox"]:checked').each(function() {
	checkedEducation.push($(this).val());
});

var checkedLanguage = [];

$('.form-check-language[type="checkbox"]:checked').each(function() {
	checkedLanguage.push($(this).val());
});

var checkedYears = $('input[name="exampleRadios"]:checked').val();

var name = $('#name').val().trim();
var email = $('#email').val().trim();
var github = $('#github').val().trim();
var linkedIn = $('#linkedIn').val().trim();
var projectURL1 = $('#projectURL1').val().trim();
var projectURL2 = $('#projectURL2').val().trim();
var projectDescription1 = $('#projectDescription1').text().trim();
var projectDescription2 = $('#projectDescription2').text().trim();
console.log(projectDescription1);
console.log(projectDescription2);
var seekerdata = {

		name: name,
		email: email,
		github: github ,
		 linkedin: linkedIn, 
		 projectURL1: projectURL1, 
		 projectURL2: projectURL2,
		 projectDescription1 : projectDescription1,
		 projectDescription2 : projectDescription2

};

console.log(projectURL1)

console.log(checkedEducation);
console.log(checkedLanguage);
console.log(checkedYears)

$.post('api/data', seekerdata);
//.then(getData);



});

});

// function getData(){

// }