
$(document).ready(function () {

// EMPLOYER DATA

	$("#employerButton").on("click", function () {

		var checkedEducation = [];
		
		$('.form-check-education2[type="checkbox"]').each(function() {
			if(this.checked){
				checkedEducation.push(1);
			} 
			else {
				checkedEducation.push(0);
			}
		  
		});

		var checkedLanguage = [];
		
		$('.form-check-language2[type="checkbox"]').each(function() {
			if(this.checked){
				checkedLanguage.push(1);
			} 
			else {
				checkedLanguage.push(0);
			}
		});


		var checkedYears = $('input[name="exampleRadios"]:checked').val();

		console.log(checkedEducation);
		console.log(checkedLanguage);
		console.log(checkedYears);

		var employerdata = {

			highschool: checkedEducation[0],
			college:checkedEducation[1],
			compScience:checkedEducation[2],
			masters:checkedEducation[3],
			selftaught:checkedEducation[4],
			bootcamp:checkedEducation[5],
			html: checkedLanguage[0],
			css: checkedLanguage[1],
			javascript: checkedLanguage[2],
			node: checkedLanguage[3],
			mysql: checkedLanguage[4],
			express: checkedLanguage[5],
			react: checkedLanguage[6],
			mongodb: checkedLanguage[7],
			angular: checkedLanguage[8],
			c_sharp: checkedLanguage[9],
			python: checkedLanguage[10],
			ruby: checkedLanguage[11],
			experience: checkedYears
		}

		$.post('api/employerdata', employerdata, function(data) {
	          
	          console.log(data);

	          var name = $("<div>");
	          var email = $("<div>");
	          var linkedin = $("<div>");
	          var github = $("<div>");
	          var languages = $("<div>");
	          var education = $("<div>");

	          for(i=0;i<data.length;i++) {

	          name.text("Name: " + data[i].name);
	          email.text("Email: " + data[i].email);
	          linkedin.text("Linkedin: " + data[i].linkedin);
	          github.text("Github: " + data[i].github);
	          languages.text("Skills: HTML:" + data[i].Skillsets[i].html + ", CSS: "
                    + data[i].Skillsets[i].css + ", Javascript: "
                    + data[i].Skillsets[i].javascript + ", C#: "
                    + data[i].Skillsets[i].c_sharp + ", Node: "
                    + data[i].Skillsets[i].node + ", Mysql: "
                    + data[i].Skillsets[i].mysql + ", Express: "
                    + data[i].Skillsets[i].express + ", React: "
                    + data[i].Skillsets[i].react + ", Mongo: "
                    + data[i].Skillsets[i].mongodb + ", Python: "
                    + data[i].Skillsets[i].python + ", Angular: "
                    + data[i].Skillsets[i].angular + ", Ruby:"
                    + data[i].Skillsets[i].ruby);
	          education.text("Education:  Highschool" + data[i].Education[i].highschool + ", Computer Science Degree: "
                    + data[i].Education[i].compScience + ", Masters: "
                    + data[i].Education[i].masters + ", College:"
                    + data[i].Education[i].college + ", BootCamp: "
                    + data[i].Education[i].bootcamp + ", Self-Taught: "
                    + data[i].Education[i].selftaught
	          	);

   
	          $("#candidates").prepend(name,email,linkedin,github,languages,education);

              }
	         

		});

		

	});



// JOB SEEKER

	$("#seekerButton").on("click", function () {

		var checkedEducation = [];
		
		$('.form-check-education[type="checkbox"]').each(function() {
			if(this.checked){
				checkedEducation.push(1);
			} 
			else {
				checkedEducation.push(0);
			}
		  
		});
		
		var checkedLanguage = [];
		
		$('.form-check-language[type="checkbox"]').each(function() {
			if(this.checked){
				checkedLanguage.push(1);
			} 
			else {
				checkedLanguage.push(0);
			}
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
			github: github,
			linkedin: linkedIn,
			projectURL1: projectURL1,
			projectURL2: projectURL2,
			projectDescription1: projectDescription1,
			projectDescription2: projectDescription2,
			highschool: checkedEducation[0],
			college:checkedEducation[1],
			compScience:checkedEducation[2],
			masters:checkedEducation[3],
			selftaught:checkedEducation[4],
			bootcamp:checkedEducation[5],
			html: checkedLanguage[0],
			css: checkedLanguage[1],
			javascript: checkedLanguage[2],
			node: checkedLanguage[3],
			mysql: checkedLanguage[4],
			express: checkedLanguage[5],
			react: checkedLanguage[6],
			mongodb: checkedLanguage[7],
			angular: checkedLanguage[8],
			c_sharp: checkedLanguage[9],
			python: checkedLanguage[10],
			ruby: checkedLanguage[11],
			experience: checkedYears
		};

		// console.log(projectURL1);
		// console.log(checkedEducation);
		// console.log(checkedLanguage);
		// console.log(checkedYears);

		$.post('api/new/jobseeker', seekerdata, function(data) {
			console.log(data);


		});
	});

});

function getData(id) {
	seekerId = id || "";
	if(seekerId) {
		seekerId = "/?jobseekerId=" + seekerId;
	}

	$.get('api/new/jobseeker/'+seekerId, function(data){
		console.log(data);
	});
}








