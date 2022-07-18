const crypto = require('crypto');

// {
//     "currentGrade": "4",
//     "lastGrade": "4",
//     "studentId": "stu-00",
//     "studentName": "stu-ela-0",
//     "school": "school-0"
// },

function createStudents() {
  let schools = ['sc-00', 'sc-01', 'sc-02'];
  let grades = [9, 10, 11, 12];
  let students = [];
  let sex;
  let isNatuarScience;
  schools.forEach(school => {
    grades.forEach(grade => {
      for (i = 0; i < 40; i++) {
        if (crypto.randomInt(10) > 5) {
          sex = 'male';
        } else {
          sex = 'female';
        }
        let student = {
          currentGrade: grade,
          lastGrde: grade,
          studentId: `${school}-${grade}-${i}`,
          school: school,
          sex: sex
        };
        if (grade > 10) {
          if (crypto.randomInt(10) > 5) {
            student.isNatuarScience = false;
          } else {
            student.isNatuarScience = true;
          }
        }

        students.push(student);
      }
    });
  });
  return students;
}

module.exports = createStudents;
