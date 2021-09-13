const { Teacher } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Teacher);
      const teacher = await Teacher.findAll();
      res.send(teacher);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const teachers = await Teacher.findAll({
        where: {
          school: req.params.school
        }
      });
      if (teachers) {
        res.status(200).send(teachers);
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
      const teacher = await Teacher.findOne({
        where: {
          school: req.params.school,
          teacherId: req.params.lecture
        }
      });
      if (teacher) {
        res.status(200).send({ teacher, found: true });
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
      const teacher = await Teacher.findOne({
        where: {
          teacherId: req.params.teacherId
        }
      });
      if (teacher) {
        res.status(200).send({ teacher, found: true });
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
      const exissting = await Teacher.findOne({
        where: {
          teacherId: req.body.teacherId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Teacher.update(newUser, {
          where: {
            teacherId: req.body.teacherId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          teacher: exissting.toJSON()
        });
      }

      const teacher = await Teacher.create(req.body);
      //   const schoolJson = teacher.toJSON();

      res.send({
        teacher: teacher.toJSON(),
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
      const teacher = await Teacher.update(req.body, {
        where: {
          teacherId: req.body.teacherId
        }
      });
      if (teacher[0]) {
        res.send({
          teacher,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update teacher got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const teacher = await Teacher.update(dd, {
        where: {
          teacherId: req.params.teacherId
        }
      });
      if (teacher[0] == 1) {
        const autCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.params.teacherId;
        await autCon.remove(candidateuser);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the teacher'
      });
    }
  }
};
