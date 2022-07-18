module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define(
    'Section',
    {
      sectionId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
      },
      sectionName: DataTypes.STRING,
      noOfStudents: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        defaultValue: 0
      },
      noOfMaleStudents: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        defaultValue: 0
      },
      noOfFemaleStudents: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        defaultValue: 0
      },
      gradeNo: {
        type: DataTypes.INTEGER(2),
        validate: { min: -3, max: 12 }
        // -3 nursary    -2 kg-1 -1 kg-2 0 kg-3  12 last
      },

      isNatuarScience: {
        type: DataTypes.BOOLEAN
      },
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      getterMethods: {
        noOfStudents() {
          return this.noOfFemaleStudents + this.noOfMaleStudents;
        }
      },
      hooks: {
        afterCreate: createSection
      }
    }
  );

  Section.associate = function(models) {
    Section.belongsToMany(models.Student, { through: 'studentInSection' });
    Section.belongsTo(models.Teacher, { foreignKey: 'homeroomTeacher' });
    Section.belongsTo(models.School, { foreignKey: 'school' });
    Section.belongsTo(models.Grade, { foreignKey: 'grade' });
    Section.belongsTo(models.ClassYearMap, { foreignKey: 'classYear' });
  };
  return Section;
};

async function createSection(section) {
  const TCS = require('../controllers/manageTeacherCouresSection');

  const tsc = {};
  tsc.school = section.school;
  tsc.section = section.id;

  tsc.softDelete = false;
  console.log('+++++++sssssssssssssssssssssssssssssssssssssssssssssssssssss+++++');

  console.log(section.school, section.gradeNo);
  const ff = await getCourseList(section.school, section.gradeNo);
  console.log('+++++++sssssssssssssssssssssssssssssssssssssssssssssssssssss+++++');
  for (let index = 0; index < ff.length; index++) {
    tsc.course = ff[index].courseId;
    await TCS.assignCourse(tsc);
    console.log('hoooooooooooooooooooooooooooooook');
  }
  return;
}

async function getCourseList(school, gradeNo) {
  const Grade = require('../controllers/manageGrade');
  const courseList = await Grade.getCourseGrade(school, gradeNo);
  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
  return courseList.Courses;
}
