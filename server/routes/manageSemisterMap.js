const { SemisterMap, Grade, Course } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(SemisterMap);
      const section = await SemisterMap.findAll();
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
      const sections = await SemisterMap.findAll({
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
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const sections = await SemisterMap.findAll({
        where: {
          school: req.params.school
        }
      });
      if (sections) {
        console.log(sections);
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
  async getOneBySchool(req, res) {
    console.log(req.params);
    try {
      const section = await SemisterMap.findOne({
        where: {
          school: req.params.school
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
      const section = await SemisterMap.findOne({
        where: {
          id: req.params.id
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
  async add(req, res) {
    console.log(req.body);
    try {
      const section = await SemisterMap.create(req.body);

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
    console.info(req.body);
    try {
      const section = await SemisterMap.update(req.body, {
        where: {
          id: req.body.id
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
      console.log(e);
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
      const section = await SemisterMap.update(req.body, {
        where: {
          id: req.body.id
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
  },
  async addSemister(semister) {
    try {
      console.log(semister);
      await SemisterMap.create(semister);
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
