const { CourseGradeing, Student, Section, Teacher } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(CourseGradeing);
      const courseGrading = await CourseGradeing.findAll();
      res.send(courseGrading);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const couresgradings = await CourseGradeing.findAll({
        where: {
          school: req.params.school
        }
      });
      if (couresgradings) {
        res.status(200).send(couresgradings);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e + 'ddddddd');
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOneBySchool(req, res) {
    console.log(req.params);
    try {
      const courseGrading = await CourseGradeing.findOne({
        where: {
          school: req.params.school,
          couresGradeingId: req.params.couresGradeingId
        }
      });
      if (courseGrading) {
        res.status(200).send({ courseGrading, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchoolSection() {
    console.log(req.params);
    try {
      const couresgradings = await CourseGradeing.findAll({
        where: {
          school: req.params.school,
          section: req.params.section
        }
      });
      if (couresgradings) {
        res.status(200).send({ couresgradings, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const courseGrading = await CourseGradeing.findOne({
        where: {
          couresGradeingId: req.params.couresGradeingId
        }
      });
      if (courseGrading) {
        res.status(200).send({ courseGrading, found: true });
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
      const exissting = await CourseGradeing.findOne({
        where: {
          couresGradeingId: req.body.couresGradeingId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await CourseGradeing.update(newUser, {
          where: {
            couresGradeingId: req.body.couresGradeingId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          courseGrading: exissting.toJSON()
        });
      }

      console.log(req.body.school + 'dddddddddddd');
      const courseGrading = await CourseGradeing.create(req.body);
      const schoolJson = courseGrading.toJSON();

      res.send({
        courseGrading: schoolJson,
        regsterd: 'ok'
      });
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async update(req, res) {
    try {
      const total = 0;
      CourseGradeing.update(req.body, {
        where: {
          id: req.body.id
        }
      }).then(g => {
        CourseGradeing.update(
          {
            sttudentGrade:
              parseInt(req.body.midExam) +
              parseInt(req.body.finalExam) +
              parseInt(req.body.assignment)
          },
          {
            where: {
              id: req.body.id
            }
          }
        );
        console.log(g);
        res.send({
          g,
          update: 'ok'
        });
      });
      // if (courseGrading[0]) {

      // } else {
      //   res.send({ update: "bad" });
      // }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: `${e} update courseGrading got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      dd.softDelete = true;
      console.log(req.body);
      const courseGrading = await CourseGradeing.update(dd, {
        where: {
          couresGradeingId: req.body.couresGradeingId
        }
      });
      console.log(courseGrading);
      if (courseGrading[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.body.couresGradeingId;
        await AutCon.remove(candidateuser);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the courseGrading'
      });
    }
  },
  async addGradeing(courseGradeing) {
    try {
      console.log(CourseGradeing);
      await CourseGradeing.create(courseGradeing);
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getAllStuGradeingBySchoolCourseLecture(req, res) {
    console.log(req.params);
    try {
      const courses = await CourseGradeing.findAll({
        where: {
          school: req.params.school,
          course: req.params.course
          // section: req.params.section
        },
        include: [
          //     {
          //       model: Course,
          //     },
          {
            model: Section,
            where: { sectionId: req.params.section }
          }
          //   {
          //     model: Teacher,
          //       where: { teacherId: req.params.lecture }
          //   }
        ]
      });
      if (courses) {
        console.log(courses);
        res.status(200).send(courses);
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
  async getAllStuGradeingBySchoolCourseLectureTerm(req, res) {
    console.log(req.params);
    try {
      const courses = await CourseGradeing.findAll({
        where: {
          school: req.params.school,
          section: req.params.section,
          course: req.params.course,
          term: req.params.term
        },
        include: [
          //     {
          //       model: Course,
          //     },
          // {
          //   model: Section,
          //   where: { sectionId: req.params.section }
          // }
          //   {
          //     model: Teacher,
          //       where: { teacherId: req.params.lecture }
          //   }
        ]
      });
      if (courses) {
        // console.log(courses);
        res.status(200).send(courses);
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
  async getGradeBySchoolSectionTermCourse(req, res) {
    console.log(req.params);
    try {
      const coursesGrade = await CourseGradeing.findAll({
        where: {
          school: req.params.school,
          section: req.params.section,
          term: req.params.term,
          course: req.params.course
        },
        include: [
          //     {
          //       model: Course,
          //     },
          // {
          //   model: Student,
          //   where: { studentId: req.params.student }
          // }
          //   {
          //     model: Teacher,
          //       where: { teacherId: req.params.lecture }
          //   }
        ]
      });
      if (coursesGrade) {
        console.log(coursesGrade);
        // console.log(coursesGrade);
        res.status(200).send(coursesGrade);
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
  async getGradeBySchoolStuClassYearTerm(req, res) {
    console.log(req.params);
    try {
      const coursesGrade = await CourseGradeing.findAll({
        where: {
          school: req.params.school,
          classYear: req.params.classYear,
          term: req.params.term
        },
        include: [
          //     {
          //       model: Course,
          //     },
          {
            model: Student,
            where: { studentId: req.params.student }
          }
          //   {
          //     model: Teacher,
          //       where: { teacherId: req.params.lecture }
          //   }
        ]
      });
      if (coursesGrade) {
        console.log(coursesGrade);
        // console.log(coursesGrade);
        res.status(200).send(coursesGrade);
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
  async removeCourseGrading(couresGrading) {
    try {
      await CourseGradeing.destroy({
        where: {
          student: couresGrading.studentId,
          section: couresGrading.section
        }
      });
    } catch (e) {
      console.log(e);
      res.status(500).send('error');
    }
  }
};
