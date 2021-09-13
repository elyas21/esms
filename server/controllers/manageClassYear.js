const { ClassYearMap, Grade, Course } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(ClassYearMap);
      const section = await ClassYearMap.findAll();
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
      const sections = await ClassYearMap.findAll({
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
      const sections = await ClassYearMap.findAll({
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
      const section = await ClassYearMap.findOne({
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
      const section = await ClassYearMap.findOne({
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
      const exissting = await ClassYearMap.findOne({
        where: {
          name: req.body.name
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await ClassYearMap.update(newUser, {
          where: {
            name: req.body.name
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          section: exissting.toJSON()
        });
      }

      const section = await ClassYearMap.create(req.body);

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
      console.log(req.body);
      const classYear = await ClassYearMap.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (classYear[0]) {
        res.send({
          classYear,
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
      const section = await ClassYearMap.update(req.body, {
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
  async getClassYearSemister(classYear) {
    try {
      const cym = await ClassYearMap.findOne({
        where: {
          id: classYear
        }
      });
      if (cym) {
        return cym.semisterType;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};
