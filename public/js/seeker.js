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

			highSchool: checkedEducation[0],
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
			experience: checkedYears,
			
		}

		$.post('api/employerdata', employerdata, function(data) {
	          
	          console.log(data);

	          var skills = [];
	          var edu = [];
	          var experiencia = [];
         
         for(i=0;i<1;i++) {

         	if(data[i].Skillsets[0].html) {
         		skills.push("HTML"); 
         	}
            if(data[i].Skillsets[0].css) {
         		skills.push("CSS"); 
         	}
         	if(data[i].Skillsets[0].javascript) {
         		skills.push("Javascript"); 
         	}
         	if(data[i].Skillsets[0].c_sharp) {
         		skills.push("C#"); 
         	}
         	if(data[i].Skillsets[0].node) {
         		skills.push("Node"); 
         	}
         	if(data[i].Skillsets[0].mysql) {
         		skills.push("Mysql"); 
         	}
         	if(data[i].Skillsets[0].express) {
         		skills.push("Express"); 
         	}
         	if(data[i].Skillsets[0].react) {
         		skills.push("React"); 
         	}
         	if(data[i].Skillsets[0].mongodb) {
         		skills.push("Mongodb"); 
         	}
         	if(data[i].Skillsets[0].python) {
         		skills.push("Python"); 
         	}
         	if(data[i].Skillsets[0].angular) {
         		skills.push("Angular"); 
         	}
         	if(data[i].Skillsets[0].ruby) {
         		skills.push("Ruby"); 
         	}
         	if(data[i].Education[0].highSchool) {
         		edu.push("HighSchool"); 
         	}
         	if(data[i].Education[0].college) {
         		edu.push("College"); 
         	}
         	if(data[i].Education[0].compScience) {
         		edu.push("Computer Science Degree"); 
         	}
         	if(data[i].Education[0].masters) {
         		edu.push("Masters Degree"); 
         	}
         	if(data[i].Education[0].bootcamp) {
         		edu.push("Coding Bootcamp"); 
         	}
         	if(data[i].Education[0].selftaught) {
         		edu.push("Self-Taught"); 
         	}
         	if(data[i].Experience.novice) {
         		experiencia.push("No experience"); 
         	}
         	if(data[i].Experience.junior) {
         		experiencia.push("1-3 years"); 
         	}
         	if(data[i].Experience.midLevel) {
         		experiencia.push("4-6 years"); 
         	}
         	if(data[i].Experience.senior) {
         		experiencia.push("7-9 years"); 
         	}
         	if(data[i].Experience.allpro) {
         		experiencia.push("10+ years"); 
         	}
	         
     
          }

	          for(i=0;i<data.length;i++) {
	          	
	          var name = $("<div>");
	          var email = $("<div>");
	          var linkedin = $("<div>");
	          var github = $("<div>");
	          var languages = $("<div>");
	          var education = $("<div>");
	          var exp = $("<div>");
	          var spacer = $("<hr>");



	          name.text("Name: " + data[i].name);
	          email.text("Email: " + data[i].email);
	          linkedin.html("Linkedin: " + "<a class='linkedinURL' href='" + data[i].linkedin + "'>" + data[i].linkedin);
	          github.html("Github: " + "<a class='githubURL' href='" + data[i].github + "'>" + data[i].github);
	          languages.text("Proficient in: " + skills);
	          education.text("Education: " + edu);
	          exp.text("Experience: " + experiencia);


	          $("#candidates").prepend(name,email,linkedin,github,languages,education,exp,spacer);

              }


	         

		});

		

	});



// JOB SEEKER

	$("#seekerButton").on("click", function () {

		var count = 37;
		count++;
		$("#siteCounter").html(count);

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
			highSchool: checkedEducation[0],
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
		$(".modal-seekerFinished").text("YOUR APPLICATION WAS SUCCESSFULLY SUBMITTED!")
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









