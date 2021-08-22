module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    },
    courseName: DataTypes.STRING,
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  Course.associate = function(models) {};

  return Course;
};
