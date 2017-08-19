var db = require("../models");

module.exports = function(app){
    app.post("/api/data", function(req,res){
        db.Jobseeker.create({
            name: req.body.name,
            email: req.body.email,
            github: req.body.github,
            linkedin: req.body.linkedin
        })
        .then(function(result) {
            //console.log(result.dataValues.id);
            var newseekerId = result.dataValues.id;

            db.Project.create({
                url: req.body.projectURL1,
                description: req.body.projectDescription1,
                JobseekerId: newseekerId
            });

            db.Project.create({
                url: req.body.projectURL2,
                description: req.body.projectDescription2,
                JobseekerId: newseekerId
            });

            console.log('create new jobseeker with id: ' + newseekerId + '!!')
          });
    });
};