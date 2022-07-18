module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    courseId: {
      type: DataTypes.STRING,
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
    isNatuarScience: {
      type: DataTypes.BOOLEAN
    },
    grade: {
      type: DataTypes.INTEGER(2),
      validate: { min: -3, max: 12 }
      // -3 nursary    -2 kg-1 -1 kg-2 0 kg-3  12 last
    },
    courseName: DataTypes.STRING,
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  Course.associate = function(models) {};

  return Course;
};
