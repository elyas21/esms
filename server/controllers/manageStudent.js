const { Student, School, Section } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Student);
      const student = await Student.findAll();
      res.send(student);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    pageSize = parseInt(req.params.pageSize);
    page = parseInt(req.params.page);

    offset = page * pageSize;
    limit = pageSize;

    console.log(req.params);
    try {
      const students = await Student.findAndCountAll({
        where: {
          school: req.params.school
        },
        offset,
        limit
      });
      if (students) {
        console.log(students.rows);
        console.log(students.count);
        res.status(200).send({ students: students.rows, count: students.count });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOneBySchool(req, res) {
    console.log(req.params);
    try {
      const student = await Student.findOne({
        where: {
          school: req.params.school,
          studentId: req.params.student
        }
      });
      if (student) {
        res.status(200).send(student);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOneBySchoolClassYear(req, res) {
    console.log(req.params);
    try {
      const student = await Student.findOne({
        where: {
          school: req.params.school,
          studentId: req.params.student
        },
        include: [
          {
            model: Section,
            where: {
              classYear: req.params.currentClassYear
            }
          }
        ]
      });
      if (student) {
        res.status(200).send(student);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchoolSection() {
    console.log(req.params);
    try {
      const students = await Student.findAll({
        where: {
          school: req.params.school,
          section: req.params.section
        }
      });
      if (students) {
        res.status(200).send({ students, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getCandidateBySchoolGradeClassYear(req, res) {
    console.log(req.params);
    try {
      const students = await Student.findAll({
        where: {
          school: req.params.school,
          currentGrade: req.params.grade,
          regCandidate: true
        },
        include: [
          {
            model: School,
            where: {
              lastClassYear: req.params.lastClassYear
            }
          }
        ]
      });
      if (students) {
        res.status(200).send(students);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getallRegisterdStudentsByGradeClassYear(req, res) {
    console.log(req.params);
    try {
      const students = await Student.findAll({
        where: {
          school: req.params.school,
          currentGrade: req.params.grade,
          regCandidate: false
        },
        include: [
          {
            model: School,
            where: {
              currentClassYear: req.params.currentClassYear
            }
          },
          {
            model: Section,
            where: {
              classYear: req.params.currentClassYear
            }
          }
        ]
      });
      if (students) {
        res.status(200).send(students);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const student = await Student.findOne({
        where: {
          studentId: req.params.studentId
        }
      });
      if (student) {
        res.status(200).send({ student, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async add(req, res) {
    try {
      const exissting = await Student.findOne({
        where: {
          studentId: req.body.studentId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Student.update(newUser, {
          where: {
            studentId: req.body.studentId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          student: exissting.toJSON()
        });
      }

      console.log(req.body.school + 'dddddddddddd');
      const student = await Student.create(req.body);
      const schoolJson = student.toJSON();

      res.send({
        student: schoolJson,
        regsterd: 'ok'
      });
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },

  async update(req, res) {
    try {
      const student = await Student.update(req.body, {
        where: {
          studentId: req.body.studentId
        }
      });
      if (student[0]) {
        const AutCon = require('../controllers/autCon');

        // const candidateuser = {};
        // candidateuser.userId = user.studentId;
        // candidateuser.role = "student";
        // candidateuser.softDelete = false;
        // candidateuser.password = user.studentId;
        // await AutCon.register(candidateuser);

        res.send({
          student,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: `${e} update student got an error`
      });
    }
  },
  async assignToSection(req, res) {
    try {
      const student = await Student.findOne({
        where: {
          studentId: req.body.studentId
        },
        include: [
          {
            model: School,
            where: {
              currentClassYear: req.body.currentClassYear
            }
          }
        ]
      });
      if (student) {
        const addSection = await student.addSection(req.body.section);

        /*
            use async await
            generate attendacy 4 this year 4 each stu
            incrment student current grade by 1
        */

        const stuUpdate = await Student.update(
          { regCandidate: false, currentSection: req.body.section },
          {
            where: {
              studentId: req.body.studentId
            }
          }
        );

        /*
            if student found and current grade upated
            set current section also
        */

        if (stuUpdate) {
          const sectionUpdate = await Section.findOne({
            where: {
              id: req.body.section
            }
          });

          /*
              if current section updated
              add students into section and increment noStus in section
          */

          if (sectionUpdate) {
            sectionUpdate.addStudent(req.body.studentId).then(s => {
              if ((req.body.sex = 'male')) {
                Section.update(
                  { noOfMaleStudents: sectionUpdate.noOfMaleStudents + 1 },
                  {
                    where: {
                      id: req.body.section
                    }
                  }
                );
              }
              if ((req.body.sex = 'female')) {
                Section.update(
                  { noOfFemaleStudents: sectionUpdate.noOfFemaleStudents + 1 },
                  {
                    where: {
                      id: req.body.section
                    }
                  }
                );
              } else {
                console.log('noSeX');
              }
            });
          }

          /* create student grading */
          await createGradeing(
            req.body.studentId,
            req.body.section,
            req.body.currentGrade,
            req.body.school,
            req.body.classYear
          );

          /* create student attendance */
          await createAttendace(
            req.body.studentId,
            req.body.section,
            req.body.school,
            req.body.classYear
          );

          res.send(addSection);
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: `${e} update student got an error`
      });
    }
  },
  async removeFromSection(req, res) {
    try {
      console.log(req.body);
      const student = await Student.findOne({
        where: {
          studentId: req.body.studentId
        },
        include: [
          {
            model: School,
            where: {
              currentClassYear: req.body.currentClassYear
            }
          }
        ]
      });
      if (student) {
        const addSection = await student.removeSection(req.body.section);

        /*
            use async await
            generate attendacy 4 this year 4 each stu
            incrment student current grade by 1
        */

        const stuUpdate = await Student.update(
          { regCandidate: true, currentGrade: student.lastGrade },
          {
            where: {
              studentId: req.body.studentId
            }
          }
        );

        /*
            if student found and current grade upated
            set current section also
        */

        if (stuUpdate) {
          const sectionUpdate = await Section.findOne({
            where: {
              id: req.body.section
            }
          });

          /*
              if current section updated
              add students into section and increment noStus in section
          */

          if (sectionUpdate) {
            sectionUpdate.removeStudent(req.body.studentId).then(s => {
              if ((req.body.sex = 'male')) {
                Section.update(
                  { noOfMaleStudents: sectionUpdate.noOfMaleStudents - 1 },
                  {
                    where: {
                      id: req.body.section
                    }
                  }
                );
              }
              if ((req.body.sex = 'female')) {
                Section.update(
                  { noOfFemaleStudents: sectionUpdate.noOfFemaleStudents - 1 },
                  {
                    where: {
                      id: req.body.section
                    }
                  }
                );
              } else {
                console.log('noSeX');
              }
            });
          }

          await removeGradeing(req.body.studentId, req.body.section, req.body.school);

          /* create student attendance */
          await removeAttendace(req.body.studentId, req.body.section);
          res.send({ removed: true });
        }
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: `${e} update student got an error`
      });
    }
  },
  async unAssignFromSection(req, res) {},
  async remove(req, res) {
    try {
      const dd = req.body;
      dd.softDelete = true;
      // console.log(req.body);
      const student = await Student.update(dd, {
        where: {
          studentId: req.body.studentId
        }
      });
      // console.log(student);
      if (student[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.body.studentId;
        await AutCon.remove(candidateuser);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the student'
      });
    }
  }
};

async function createGradeing(studentId, section, gradeId, school, classYear) {
  const couresGradeing = require('../controllers/manageCouresGrade');

  const candidate = {};
  candidate.school = school;

  candidate.section = section;
  candidate.softDelete = false;
  candidate.student = studentId;
  candidate.expectedGrade = 100;
  candidate.classYear = classYear;
  // console.log(school);
  // console.log(gradeId);
  if (school && gradeId) {
    const ff = await getCourseList(school, gradeId);
    const term = await getSemisterType(classYear);
    // console.log(ff + term);
    for (let index = 0; index < term; index++) {
      candidate.term = index + 1;

      for (let j = 0; j < ff.length; j++) {
        candidate.course = ff[j].courseId;
        // console.log(ff[j]);
        await couresGradeing.addGradeing(candidate);
      }
    }
  }
}
async function removeGradeing(studentId, section, school) {
  const couresGradeing = require('../controllers/manageCouresGrade');

  // drop couresGradeing where stuid = studentId and section-=sectionId
  await couresGradeing.removeCourseGrading({ studentId, section });
}

async function getCourseList(school, currentGrade) {
  const Grade = require('../controllers/manageGrade');
  const courseList = await Grade.getCourseGrade(school, currentGrade);
  console.log(school + '  ' + currentGrade);
  console.log(courseList.Courses);
  return courseList.Courses;
}
async function getSemisterType(id) {
  const cym = require('../controllers/manageClassYear');
  const terms = await cym.getClassYearSemister(id);
  return terms;
}

async function createAttendace(student, section, school, classYear) {
  const attendaceManager = require('./manageAttendance');
  attendace = {};
  attendace.school = school;
  attendace.student = student;
  attendace.classYear = classYear;
  attendace.section = section;

  for (let index = 1; index < 13; index++) {
    attendace.month = index;

    for (let days = 1; days < 31; days++) {
      attendace.days = 'P';
      // console.log(attendace.days + attendace.month)
    }
    attendaceManager.createAttendace(attendace);
  }
}

async function removeAttendace(student, section, school) {
  const attendaceManager = require('./manageAttendance');
  //  drop attendace where stuId = sectionID
  attendaceManager.removeAttendace({ student, section });
}
