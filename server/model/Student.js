module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    'Student',
    {
      id: {
        type: DataTypes.INTEGER(15).UNSIGNED,
        unique: true,
        autoIncrement: true
      },
      studentId: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING(20)
      },
      middleName: {
        type: DataTypes.STRING(20)
      },
      lastName: {
        type: DataTypes.STRING(20)
      },
      // lastGrade: {
      //   type: DataTypes.INTEGER(2),
      //   validate: { min: -3, max: 12 }
      // },
      currentGrade: {
        type: DataTypes.INTEGER(2),
        validate: { min: -3, max: 12 }
      },
      lastGrade: {
        type: DataTypes.INTEGER(2),
        validate: { min: -3, max: 12 }
      },
      sex: { type: DataTypes.ENUM, values: ['male', 'female'] },
      studentName: DataTypes.STRING,
      regCandidate: { type: DataTypes.BOOLEAN, defaultValue: true },
      isNatuarScience: { type: DataTypes.BOOLEAN },
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      hooks: {
        beforeCreate: createUser
        // afterCreate: createGradeing
      }
    }
  );

  Student.associate = function(models) {
    // Student.belongsTo(models.Grade, { foreignKey: "lastGrade" });
    // Student.belongsTo(models.Grade, { foreignKey: "currentGrade" });
    Student.belongsTo(models.School, { foreignKey: 'school' });
    Student.belongsToMany(models.Section, { through: 'sectionMapper' });
    Student.belongsTo(models.Section, { foreignKey: 'currentSection' });
    // Student.belongsToMany(models.Grade, { through: "sectionMapper" });
    // Student.belongsTo(models.Address, { foreignKey: "address" });
    // Student.belongsTo(models.SectionMap, { foreignKey: "sectionMap" });
    Student.belongsTo(models.ClassYearMap, { foreignKey: 'classYear' });
    Student.belongsTo(models.GradeMap, { foreignKey: 'gradeMap' });
    Student.belongsTo(models.Payment, {
      foreignKey: 'paymentInfo',
      constraints: false
    });
  };

  return Student;
};

async function createUser(user) {
  const AutCon = require('../controllers/autCon');
  const Payment = require('../controllers/managePayment');

  const candidateuser = {};
  candidateuser.userId = user.studentId;
  candidateuser.role = 'student';
  candidateuser.softDelete = false;
  candidateuser.school = user.school;
  candidateuser.password = user.studentId;
  await AutCon.register(candidateuser);

  // const payment = {};
  // payment.paymentId = "pay-" + user.studentId;
  // await Payment.initPayment(payment);

  return;
}
async function createGradeing(student) {
  const couresGradeing = require('../controllers/manageCouresGrade');

  const candidate = {};
  const terms = ['term-1', 'term-2', 'term-3', 'term-4'];
  candidate.school = student.school;

  candidate.section = student.section;
  candidate.softDelete = false;
  candidate.student = student.studentId;
  candidate.expectedGrade = 100;
  console.log(student.school + student.currentGrade + 'ggggggggggggggggggggggggggggggggggG');
  if (student.school && student.currentGrade) {
    const ff = await getCourseList(student.school, student.currentGrade);
    const term = await getSemisterType(student.classYear);
    console.log(ff + term);
    // for (let index = 0; index < terms.length; index++) {
    //   candidate.term = terms[index];

    //   for (let index = 0; index < ff.length; index++) {
    //     candidate.course = ff[index].courseId;
    //     await couresGradeing.addGradeing(candidate);
    //   }
    // }
  }
}

async function getCourseList(school, currentGrade) {
  const Grade = require('../controllers/manageGrade');
  const courseList = await Grade.getCourseGrade(school, currentGrade);
  return courseList.Courses;
}
async function getSemisterType(id) {
  const cym = require('../controllers/manageClassYear');
  const terms = await cym.getClassYearSemister(id);
  return terms;
}
