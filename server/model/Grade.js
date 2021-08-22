module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      unique: true,
      autoIncrement: true
    },
    gradeId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    grade: {
      type: DataTypes.INTEGER(2),
      validate: { min: -3, max: 12 }
      // -3 nursary    -2 kg-1 -1 kg-2 0 kg-3  12 last
    },

    gradeName: DataTypes.STRING,
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    }
  });

  Grade.associate = function(models) {
    Grade.belongsToMany(models.Course, { through: 'courseGrade' });
  };

  return Grade;
};
