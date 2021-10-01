const { SudoSchedule } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(SudoSchedule);

      const schedule = await SudoSchedule.findAll();
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
      const schedule = await SudoSchedule.findAll({
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
      const SudoSchedule = await SudoSchedule.findOne({
        where: {
          school: req.params.school,
          id: req.params.id
        }
      });
      if (SudoSchedule) {
        res.status(200).send({ SudoSchedule, found: true });
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
  async getAllBySchoolSection(req, res) {
    console.log(req.params);
    try {
      const schedule = await SudoSchedule.findAll({
        where: {
          school: req.params.school,
          section: req.params.section
        }
      });
      if (schedule) {
        res.status(200).send(schedule);
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
      const schedule = await SudoSchedule.findOne({
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
      // const exissting = await SudoSchedule.findOne({
      //   where: {
      //     id: req.body.id
      //   }
      // });
      // if (exissting) {
      //   newUser = req.body;
      //   newUser.softDelete = false;
      //   await SudoSchedule.update(newUser, {
      //     where: {
      //       id: req.body.id
      //     }
      //   });
      //   return res.status(200).send({
      //     regsterd: 'ok',
      //     schedule: exissting.toJSON()
      //   });
      // }

      const schedule = await SudoSchedule.create(req.body);
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
      rs;

      rs;
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async update(req, res) {
    try {
      const updateEvent = await SudoSchedule.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (updateEvent) {
        const event = await SudoSchedule.findOne({
          where: {
            id: req.body.id
          }
        });
        if (event) {
          res.status(200).send({ event: event, found: true });
        } else {
          res.send({ found: false });
        }
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
      const schedule = await SudoSchedule.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (schedule[0] == 1) {
        let updatedEvent = await SudoSchedule.findOne({ where: { id: req.body.id } });

        res.send(updatedEvent);
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the schedule'
      });
    }
  }
};
