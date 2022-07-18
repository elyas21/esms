const crypto = require('crypto');
const coursesModule = require('./genCourse');

// console.log('df')
function createGrades() {
  let schools = ['sc-00', 'sc-01', 'sc-02'];
  let grades = [9, 10, 11, 12];
  let newGrades = [];

  let courses = coursesModule();

  schools.forEach(school => {
    grades.forEach(grade => {
      let newGrade = {
        gradeId: `${school}-${grade}`,
        grade: grade,
        gradeName: `${school}-${grade}`,
        school: school
      };

      let regex_910 = new RegExp(`${school}-${grade}.`, 'g');
      let regex_1112 = new RegExp(`${school}-${grade}-(ss|ns)-.`, 'g');
      let regex_8 = new RegExp(`${school}-${grade}.`, 'g');
      // filter by grade and school
      newGrade.courses = courses
        .filter(c => c.grade == grade && c.school === school)
        .map(c => c.courseId);

      // filter using regex
      // if (grade < 11 && grade > 8) {
      //   // use regx at ${course}
      //   // filter courses by courseId which match school and grade

      //   newGrade.courses = courses.filter(c => regex_910.test(c.courseId)).map(m=>m.courseId);
      // } else if (grade < 13 && grade > 10) {
      //   // if match `${school}-${grade}-ns-${course}` use regx at course
      //   newGrade.courses = courses.filter(c => regex_1112.test(c.courseId)).map(m=>m.courseId);

      //   // newGrade.courses = natural_social_courses;
      // } else {
      //   // newGrade.courses = elementary_courses;
      //   // use regx at ${course}
      //   newGrade.courses = courses.filter(c => regex_8.test(c.courseId)).map(m=>m.courseId);
      // }
      // // console.log(courses.filter(c => regex_910.test(c.courseId)));
      // console.log(courses);
      newGrades.push(newGrade);
    });
  });
  return newGrades;
}
// console.log(createGrades())
// createGrades();
module.exports = createGrades;
