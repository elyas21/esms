const { Schedule } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Schedule);

      const schedule = await Schedule.findAll();
      res.send(schedule);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const schedule = await Schedule.findAll({
        where: {
          school: req.params.school
        }
      });
      if (schedule) {
        res.status(200).send(schedule);
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
      const Schedule = await Schedule.findOne({
        where: {
          school: req.params.school,
          id: req.params.id
        }
      });
      if (Schedule) {
        res.status(200).send({ Schedule, found: true });
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
      const schedule = await Schedule.findAll({
        where: {
          Schedule: req.params.Schedule,
          section: req.params.section
        }
      });
      if (schedule) {
        res.status(200).send({ schedule, found: true });
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
      const schedule = await Schedule.findOne({
        where: {
          id: req.params.id
        }
      });
      if (schedule) {
        res.status(200).send({ schedule, found: true });
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
      // const exissting = await Schedule.findOne({
      //   where: {
      //     id: req.body.id
      //   }
      // });
      // if (exissting) {
      //   newUser = req.body;
      //   newUser.softDelete = false;
      //   await Schedule.update(newUser, {
      //     where: {
      //       id: req.body.id
      //     }
      //   });
      //   return res.status(200).send({
      //     regsterd: 'ok',
      //     schedule: exissting.toJSON()
      //   });
      // }

      const schedule = await Schedule.create(req.body);
      //   const schoolJson = schedule.toJSON();
      if (schedule) {
        res.send({
          schedule: schedule.toJSON(),
          regsterd: 'ok'
        });
      } else {
        res.send({
          schedule: schedule.toJSON(),
          regsterd: 'bad'
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async update(req, res) {
    try {
      const schedule = await Schedule.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (schedule[0]) {
        res.send({
          schedule,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update schedule got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;

      console.log(dd);
      dd.softDelete = true;
      const schedule = await Schedule.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (schedule[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the schedule'
      });
    }
  }
};
