const { Course } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Course);
      const coures = await Course.findAll();
      res.send(coures);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const coures = await Course.findAll({
        where: {
          school: req.params.school
        }
      });
      if (coures) {
        res.status(200).send(coures);
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
      const course = await Course.findOne({
        where: {
          school: req.params.school,
          courseId: req.params.courseId
        }
      });
      if (course) {
        res.status(200).send({ course, found: true });
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
      const coures = await Course.findAll({
        where: {
          course: req.params.course,
          section: req.params.section
        }
      });
      if (coures) {
        res.status(200).send({ coures, found: true });
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
      const coures = await Course.findOne({
        where: {
          courseId: req.params.courseId
        }
      });
      if (coures) {
        res.status(200).send({ coures, found: true });
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
      const exissting = await Course.findOne({
        where: {
          courseId: req.body.courseId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Course.update(newUser, {
          where: {
            courseId: req.body.courseId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          coures: exissting.toJSON()
        });
      }

      const coures = await Course.create(req.body);
      //   const schoolJson = coures.toJSON();

      res.send({
        coures: coures.toJSON(),
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
      const coures = await Course.update(req.body, {
        where: {
          courseId: req.body.courseId
        }
      });
      if (coures[0]) {
        res.send({
          coures,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update coures got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const coures = await Course.update(req.body, {
        where: {
          courseId: req.body.courseId
        }
      });
      if (coures[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the coures'
      });
    }
  }
};
