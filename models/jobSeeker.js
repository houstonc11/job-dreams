module.exports = function(sequelize, DataTypes) {
  var jobSeeker = sequelize.define("jobSeeker", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    github: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    linkedin: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  jobSeeker.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    jobSeeker.hasMany(models.skills, {
      onDelete: "cascade"
    });
  };


  return jobSeeker;
};
