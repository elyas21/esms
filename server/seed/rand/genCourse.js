let courses = [
  'maths',
  'english',
  'amharic',
  'civc',
  'biology',
  'chemistry',
  'physics',
  'hp',
  'ict',
  'geograpy',
  'history'
];
let normalcourses = [
  'maths',
  'english',
  'amharic',
  'civc',
  'biology',
  'chemistry',
  'physics',
  'hp',
  'history'
];
let natural_courses = [
  'maths',
  'english',
  'amharic',
  'civc',
  'biology',
  'chemistry',
  'physics',
  'hp',
  'ict'
];
let social_courses = [
  'maths',
  'english',
  'amharic',
  'civc',
  'ecomomics',
  'bussines',
  'history',
  'hp',
  'geography'
];
let newCourses = [];
let newCourse = {};

// function createCourses(grades) {
//   let schools = ['sc-00', 'sc-01', 'sc-02'];
//   // get courses for each grade by each school from courses array
//   // getCoursesByGradeandSchool([9,10,11], ['sc-00', 'sc-01', 'sc-02'])
//   function getCoursesByGradeandSchool(grades, schools) {
//     schools.forEach(school => {
//       grades.forEach(grade => {
//         if (grade < 11 && grade > 8) {
//           courses.forEach(course => {
//             newCourse = {
//               courseId: `${school}-${grade}-${course}`,
//               school: school
//             };
//             newCourses.push(newCourse);
//           });
//         } else if (grade > 10 && grade <= 12) {
//           social_courses.forEach(course => {
//             newCourse = {
//               courseId: `${school}-${grade}-ns-${course}`,
//               school: school
//             };
//             newCourses.push(newCourse);
//           });
//           natural_courses.forEach(course => {
//             newCourse = {
//               courseId: `${school}-${grade}-sc-${course}`,
//               school: school
//             };
//             newCourses.push(newCourse);
//           });
//         } else {
//           normalcourses.forEach(course => {
//             newCourse = {
//               courseId: `${school}-${grade}-${course}`,
//               school: school
//             };
//             newCourses.push(newCourse);
//           });
//         }

//         newCourses.push(newCourse);
//       });
//     });
//     console.log(newCourses);
//     return newCourses;
//   }

//   // generate courses for each grade and school by calling getCoursesByGradeandSchool function
//   // get courses for each grade by each school from courses array
//   // genCourseForGrade([9,10,11], ['sc-00', 'sc-01', 'sc-02'])
schools = ['sc-00', 'sc-01', 'sc-02'];
grades = [9, 10, 11, 12];
function genCourseForGrade() {
  ['sc-00', 'sc-01', 'sc-02'].forEach(school => {
    [9, 10, 11, 12].forEach(grade => {
      
      if (grade < 11 && grade > 8) {
        courses.forEach(course => {
          newCourse = {
            courseId: `${school}-${grade}-${course}`,
            courseName: `${school}-${grade}-${course}`,
            grade: grade,
            school: school
          };
          newCourses.push(newCourse);
        });
      } else if (grade > 10 && grade <= 12) {
        social_courses.forEach(course => {
          newCourse = {
            courseName: `${school}-${grade}-ss-${course}`,
            grade: grade,
            courseId: `${school}-${grade}-ss-${course}`,
            school: school,
            isNatuarScience: false
          };
          newCourses.push(newCourse);
        });
        natural_courses.forEach(course => {
          newCourse = {
            courseName: `${school}-${grade}-ns-${course}`,
            grade: grade,
            courseId: `${school}-${grade}-ns-${course}`,
            school: school,
            isNatuarScience: true
          };
          newCourses.push(newCourse);
        });
      } else {
        normalcourses.forEach(course => {
          newCourse = {
            courseName: `${school}-${grade}-${course}`,
            grade: grade,
            courseId: `${school}-${grade}-${course}`,
            school: school
          };
          newCourses.push(newCourse);
        });
      }

    });
  });
  // console.log(newCourses);
  return newCourses;
}

module.exports = genCourseForGrade;
