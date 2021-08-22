module.exports = (sequelize, DataTypes) => {
  const TeacherCouresSectionAss = sequelize.define('TCS', {
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  TeacherCouresSectionAss.associate = function(models) {
    TeacherCouresSectionAss.belongsTo(models.Teacher, {
      foreignKey: 'teacher'
    });
    TeacherCouresSectionAss.belongsTo(models.Section, {
      foreignKey: 'section'
    });
    TeacherCouresSectionAss.belongsTo(models.Course, { foreignKey: 'course' });
  };

  return TeacherCouresSectionAss;
};
