const { Grade, Course } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Grade);
      const grade = await Grade.findAll();
      res.send(grade);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const grades = await Grade.findAll({
        where: {
          school: req.params.school
        }
      });
      if (grades) {
        res.status(200).send(grades);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchoolGrade(req, res) {
    console.log(req.params);
    try {
      const courses = await Grade.findAll({
        where: {
          school: req.params.school,
          gradeId: req.params.gradeId
        },
        include: [
          {
            model: Course,
            through: {
              attributes: ['courseId', 'courseName']
            }
          }
        ]
      });
      if (courses) {
        res.status(200).send({ courses, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getCourseList(req, res) {
    console.log(req.params);
    try {
      const courses = await Grade.findOne({
        where: {
          school: req.params.school,
          grade: req.params.grade
        },
        attributes: [],
        include: [
          {
            model: Course,
            through: {
              attributes: ['courseId', 'courseName']
            }
          }
        ]
      });
      if (courses) {
        res.status(200).send(courses.Courses);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOneBySchoolGrade(req, res) {
    console.log(req.params);
    try {
      const courses = await Grade.findOne({
        where: {
          school: req.params.school,
          gradeId: req.params.gradeId
        },
        include: [
          {
            model: Course,
            through: {
              attributes: ['courseId', 'courseName']
            }
          }
        ]
      });
      if (courses) {
        res.status(200).send(courses);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async assignCourse(req, res) {
    try {
      const grade = await Grade.findOne({
        where: {
          gradeId: req.body.gradeId
        }
      });
      if (grade) {
        const addCoures = await grade.addCourse(req.body.courses);
        console.log(addCoures);
        res.status(200).send({ addCoures, regsterd: true });
      } else {
        res.status(400).send({ regsterd: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async removeAssignCourse(req, res) {
    try {
      const grade = await Grade.findOne({
        where: {
          gradeId: req.params.gradeId
        }
      });
      if (grade) {
        const removeCoures = await grade.removeCourse(req.params.courseId);
        res.status(200).send({ removeCoures, removed: 'ok' });
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
      const grade = await Grade.findOne({
        where: {
          school: req.params.school,
          gradeId: req.params.grade
        }
      });
      if (grade) {
        res.status(200).send({ grade, found: true });
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
      const grade = await Grade.findOne({
        where: {
          gradeId: req.params.gradeId
        }
      });
      if (grade) {
        res.status(200).send({ grade, found: true });
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
      const exissting = await Grade.findOne({
        where: {
          gradeId: req.body.gradeId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Grade.update(newUser, {
          where: {
            gradeId: req.body.gradeId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          grade: exissting.toJSON()
        });
      }

      const grade = await Grade.create(req.body);
      //   const schoolJson = grade.toJSON();

      res.send({
        grade: grade.toJSON(),
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
      const grade = await Grade.update(req.body, {
        where: {
          gradeId: req.body.gradeId
        }
      });
      if (grade[0]) {
        res.send({
          grade,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update grade got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.params;
      console.log(dd);
      dd.softDelete = true;
      const grade = await Grade.update(dd, {
        where: {
          gradeId: req.params.gradeId
        }
      });
      if (grade[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the grade'
      });
    }
  },
  async getCourseGrade(school, grade) {
    try {
      const courses = await Grade.findOne({
        where: {
          school: school,
          grade: grade
        },
        include: [
          {
            model: Course,
            through: {
              attributes: ['courseId']
            }
          }
        ]
      });
      if (courses) {
        return courses;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};
