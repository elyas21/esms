const { TCS, Teacher, Course, Section } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(TCS);
      const tcsa = await TCS.findAll();
      res.send(tcsa);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchoolSection(req, res) {
    console.log(req.params);
    try {
      const courses = await TCS.findAll({
        where: {
          school: req.params.school
        },
        include: [
          //   {
          //     model: Course
          //   },
          {
            model: Section,
            where: { sectionId: req.params.section }
          }
          //   {
          //     model: Teacher
          //   }
        ]
      });
      if (courses) {
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
  async getOne(req, res) {
    console.log(req.params);
    try {
      const tcsa = await TCS.findOne({
        where: {
          TCSId: req.params.TCSId
        }
      });
      if (tcsa) {
        res.status(200).send({ tcsa, found: true });
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
      const exissting = await TCS.findOne({
        where: {
          TCSId: req.body.TCSId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await TCS.update(newUser, {
          where: {
            TCSId: req.body.TCSId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          tcsa: exissting.toJSON()
        });
      }

      const tcsa = await TCS.create(req.body);
      //   const schoolJson = tcsa.toJSON();

      res.send({
        tcsa: tcsa.toJSON(),
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
      console.log(req.body);
      const tcsa = await TCS.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (tcsa[0]) {
        res.send({
          tcsa,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update tcsa got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const tcsa = await TCS.update(req.body, {
        where: {
          TCSId: req.body.TCSId
        }
      });
      if (tcsa[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the tcsa'
      });
    }
  },
  async assignCourse(tcs) {
    try {
      await TCS.create(tcs);
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getAllBySchoolSectionByLecture(req, res) {
    console.log(req.params);
    try {
      const courses = await TCS.findAll({
        where: {
          school: req.params.school
        },
        include: [
          //   {
          //     model: Course
          //   },
          // {
          //   model: Section,
          //   // where: { sectionId: req.params.section }
          // },
          {
            model: Teacher,
            where: { teacherId: req.params.lecture }
          }
        ]
      });
      if (courses) {
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
  async getAllCoursesByLectureSection(req, res) {
    console.log(req.params);
    try {
      const courses = await TCS.findAll({
        where: {
          school: req.params.school
        },
        include: [
          //   {
          //     model: Course
          //   },
          {
            model: Section
            // where: { sectionId: req.params.section }
          },
          {
            model: Teacher,
            where: { teacherId: req.params.lecture }
          }
        ]
      });
      if (courses) {
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
  }
};
