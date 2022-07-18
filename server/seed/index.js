const {
  sequelize,
  Admin,
  Course,
  Parent,
  Payment,
  Director,
  ClassYearMap,
  Grade,
  Registra,
  School,
  Section,
  Student,
  Teacher,
  TCS,
  Finace,
  User
} = require('../model');

const Promise = require('bluebird');
const director = require('./director.json');
const admin = require('./admin.json');
const course = require('./course.json');
const grade = require('./grade.json');
const parent = require('./parent.json');
const payment = require('./payment.json');
const registra = require('./registra.json');
const school = require('./school.json');
const section = require('./section.json');
const student = require('./student.json');
const teacher = require('./teacher.json');
const tsc = require('./tsc.json');
const finace = require('./finace.json');
const classYearMap = require('./classYearMap.json');
const studentsArray = require('./rand/RandGen');
const coursesArray = require('./rand/genCourse');

const gradeArray = require('./rand/genGrade');
fs = require('fs');
function consoleLogToFile(log) {
  console.log(log);
  fs.appendFile('log.txt', `${log}\n`, function(err) {
    if (err) {
      console.log(err);
    }
  });
}
var dateNow = new Date();
// var timeNow = dateNow.getHours() + '-' + dateNow.getMinutes();
// var logPath = 'log/' + dateNow.toDateString() + ' -' + ' Start Time - ' + timeNow + '.log';
consoleLogToFile('Start Time - ' + dateNow);
sequelize.sync({ force: true }).then(async function() {
  await Promise.all(
    school.map(school => {
      School.create(school);
    })
  );
  await Promise.all(
    director.map(director => {
      Director.create(director);
    })
  );
  await Promise.all(
    admin.map(admin => {
      Admin.create(admin);
    })
  );
  await Promise.all(
    classYearMap.map(classYear => {
      ClassYearMap.create(classYear);
    })
  );
  await Promise.all(
    coursesArray.map(course => {
      Course.create(course);
    })
  );
  await Promise.all(
    gradeArray.map(gradee => {
      Grade.create(gradee);
    })
  );

  await Promise.all(
    finace.map(finace => {
      Finace.create(finace);
    })
  );
  await Promise.all(
    registra.map(registra => {
      Registra.create(registra);
    })
  );
  await Promise.all(
    teacher.map(teacher => {
      Teacher.create(teacher);
    })
  );

  await Promise.all(
    studentsArray().map(student => {
      Student.create(student);
    })
  );
  await Promise.all(
    parent.map(parent => {
      Parent.create(parent);
    })
  );
});
