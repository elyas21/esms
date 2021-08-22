const { Section, ClassYearMap, School, Student } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Section);
      const section = await Section.findAll();
      res.send(section);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchoolGrade(req, res) {
    console.log(req.params);
    try {
      const sections = await Section.findAll({
        where: {
          school: req.params.school,
          grade: req.params.grade
        }
      });
      if (sections) {
        res.status(200).send(sections);
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
  async getAllBySchoolClassYear(req, res) {
    try {
      const sections = await Section.findAll({
        where: {
          school: req.params.school,
          classYear: req.params.classYear
        }
      });
      if (sections) {
        res.status(200).send(sections);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `This email account is already in use`
      });
    }
  },
  async getOneBySchoolGradeClassYear(req, res) {
    console.log(req.params);
    try {
      const section = await Section.findOne({
        where: {
          id: req.params.section
        },
        include: [
          {
            model: School
          },
          {
            model: Student,
            attributes: ['studentId', 'sex'],
            through: {
              attributes: ['studentId']
            }
          }
        ]
      });
      if (section) {
        console.log(section);
        res.status(200).send(section);
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
  async getAllBySchoolGradeClassYear(req, res) {
    console.log(req.params);
    try {
      const sections = await Section.findAll({
        where: {
          school: req.params.school,
          classYear: req.params.classYear,
          gradeNo: req.params.grade
        }
        // include:[
        //   {
        //     model: ClassYearMap,
        //     where: { classYear: req.params.classYear}
        //   }
        // ]
      });
      if (sections) {
        res.status(200).send(sections);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const sections = await Section.findAll({
        where: {
          school: req.params.school
        }
      });
      if (sections) {
        res.status(200).send(sections);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOneBySchool(req, res) {
    console.log(req.params);
    try {
      const section = await Section.findOne({
        where: {
          school: req.params.school,
          sectionId: req.params.section
        }
      });
      if (section) {
        res.status(200).send({ section, found: true });
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
      const section = await Section.findOne({
        where: {
          id: req.params.sectionId
        },
        include: [
          {
            model: School
          },
          {
            model: Student,
            attributes: ['studentId'],
            through: {
              attributes: ['studentId']
            }
          }
        ]
      });
      if (section) {
        console.log(section);
        res.status(200).send({ section, found: true });
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
    // console.log(req.body)
    try {
      const exissting = await Section.findOne({
        where: {
          sectionId: req.body.sectionId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Section.update(newUser, {
          where: {
            sectionId: req.body.sectionId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          section: exissting.toJSON()
        });
      }

      const section = await Section.create(req.body);

      res.send({
        section: section.toJSON(),
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
      const section = await Section.update(req.body, {
        where: {
          sectionId: req.body.sectionId
        }
      });
      if (section[0]) {
        res.send({
          section,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update section got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const section = await Section.update(req.body, {
        where: {
          sectionId: req.body.sectionId
        }
      });
      if (section[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the section'
      });
    }
  }
};
