module.exports = function(sequelize, DataTypes) {
  var Jobseeker = sequelize.define("Jobseeker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],         
        notEmpty: true           
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [5],
        isEmail: true,    
        notEmpty: true      
      }
    },
    github: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10],          
        isUrl: true,   
        notEmpty: true      
      }
    },
    linkedin: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10],          
        isUrl: true,     
        notEmpty: true   
      }
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isNumeric: true   
      }
    }
  });

  //1 to many
  Jobseeker.associate = function(models) {
    Jobseeker.hasMany(models.SkillSet, {
      onDelete: "cascade"
    });
  };

  Jobseeker.associate = function(models) {
    Jobseeker.hasMany(models.Education, {
      onDelete: "cascade"
    });
  };

  //1 to 1
  Jobseeker.associate = function(models) {
    Jobseeker.hasOne(models.Experience, {
      onDelete: "cascade"
    });
  };

  Jobseeker.associate = function(models) {
    Jobseeker.hasOne(models.Education, {
      onDelete: "cascade"
    });
  };


  return Jobseeker;
};
