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
    course.map(course => {
      Course.create(course);
    })
  );
  await Promise.all(
    grade.map(gradee => {
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
    student.map(student => {
      Student.create(student);
    })
  );
  await Promise.all(
    parent.map(parent => {
      Parent.create(parent);
    })
  );
});
