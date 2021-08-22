module.exports = (sequelize, DataTypes) => {
  const CourseGradeing = sequelize.define('CourseGradeing', {
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    },
    // course: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: "Course",
    //     key: "courseId"
    //   }
    // },
    assignment: { type: DataTypes.INTEGER(5).UNSIGNED, defaultValue: 0 },
    term: { type: DataTypes.INTEGER(1).UNSIGNED, defaultValue: 0 },
    midExam: { type: DataTypes.INTEGER(5).UNSIGNED, defaultValue: 0 },
    finalExam: { type: DataTypes.INTEGER(5).UNSIGNED, defaultValue: 0 },
    sttudentGrade: { type: DataTypes.INTEGER(5).UNSIGNED, defaultValue: 0 },
    expectedGrade: DataTypes.INTEGER(5).UNSIGNED,
    status: {
      type: DataTypes.ENUM,
      values: [
        'opend',
        'staged-h',
        'approve-h',
        'deny-h',
        'approve-d',
        'deny-d',
        'approve-p',
        'deny-p',
        'closed'
      ],
      defaultValue: 'opend'
    },

    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }

    // yearGradeMap Foriegn key
  });

  CourseGradeing.associate = function(models) {
    CourseGradeing.belongsTo(models.Student, { foreignKey: 'student' });
    CourseGradeing.belongsTo(models.ClassYearMap, { foreignKey: 'classYear' });
    CourseGradeing.belongsTo(models.Section, { foreignKey: 'section' });
    CourseGradeing.belongsTo(models.Course, { foreignKey: 'course' });
  };

  return CourseGradeing;
};
