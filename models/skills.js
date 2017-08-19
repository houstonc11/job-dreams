module.exports = function(sequelize, DataTypes) {
  var skills = sequelize.define("skills", {
    html: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    css: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    javascript: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    bootstrap: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    jquery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    node: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    mysql: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    express: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    react: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    mongodb: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    ajax: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    angular: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    } 
  });

  skills.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    skills.belongsTo(models.jobSeeker, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return skills;
};
