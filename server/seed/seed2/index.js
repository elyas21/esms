const { sequelize, Section, School, Grade } = require('../../model');

const Promise = require('bluebird');
// const director = require("./director.json");
// const admin = require("./admin.json");
// const course = require("./course.json");
const grade = require('../grade.json');
// const parent = require("./parent.json");
// const payment = require("./payment.json");
// const registra = require("./registra.json");
// const school = require("./school.json");
// const section = require('../section.json');
// const student = require("./student.json");
// const teacher = require("./teacher.json");
// const tsc = require("./tsc.json");
// const finace = require("./finace.json");
// const classYearMap = require('./classYearMap.json');

sequelize.sync().then(async function() {
  // await Promise.all(
  //   school.map(data =>
  //     School.update(data , data.schoolId)
  //     )
  // )

  await Promise.all(
    grade.map(data => {
      Grade.findOne({
        where: {
          gradeId: data.gradeId
        }
      }).then(g => {
        g.addCourse(data.courses);
      });
    })
  );
  // await Promise.all(
  //   section.map(section => {
  //     Section.create(section);
  //   })
  // );
});
