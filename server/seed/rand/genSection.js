    // a = section {
//     "sectionId": "sec-1-0-1-b",
//     "sectionName": "grade 1 b",
//     "grade": "G-1",
//     "classYear": 1,
//     "school": "school-0",
//     "gradeNo": 2,
//     "isNatuarScience": false,
//   },
schools = ['sc-00', 'sc-01', 'sc-02'];
grades = [9, 10, 11, 12];
// generate section foreach grade [9 -12] for 11 and 12 create two sections socal and natural each
// generate section foreach grade [9 -12] for 9 and 10 create three section
function genSectioforeachschoolgrade(school, grade) {}

function createGrades() {
    let schools = ['sc-00', 'sc-01', 'sc-02'];
    let grades = [9, 10, 11, 12];
    let newGrades = [];
  
    schools.forEach(school => {
      grades.forEach(grade => {
        let newGrade = {
          gradeId: `${school}-${grade}`,
          grade: grade,
          gradeName: `${school}-${grade}`,
          school: school
        };
        if (grade < 11 && grade > 8) {
          newGrade.courses = courses;
        } else if (grade < 13 && grade > 10) {
          newGrade.courses = natural_social_courses;
        } else {
          newGrade.courses = elementary_courses;
        }
  
        newGrades.push(newGrade);
      });
    });
    return newGrades;
  }
  
  module.exports = createGrades;
  
  