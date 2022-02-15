const { Schedule } = require('../model');
const { Op } = require('sequelize');

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
  async getBySchoolSectionWeek(req,res) {
    // get-section-week/:school/:section/:start/:end
    console.log(req.params);
    try {

      const schedule = await Schedule.findAll({
        where: {
          section: req.params.section,
          date: { [Op.between]: [req.params.start, req.params.end] }
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
          schedule: schedule,
          regsterd: 'ok'
        });
      } else {
        res.send({
          schedule: schedule,
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
  async addBulk(req, res) {
    try {
      /*
      populate from sudo -schedule to schedule

      first we destroy all schedule in date range by that sectiotn id
      the populate acording the sudo schedule

      */

      /**find and drop by date range */
      /**
       
       
      previousSchedule = await Schedule.findAll({
        where: { date: { [Op.between]: [req.body.range.start, req.body.range.end] } }
      });

      if (previousSchedule) {
        Schedule.destroy({
          where: { date: { [Op.between]: [req.body.range.start, req.body.range.end] } }
        });
      }
    */

      // drop by date range
      upperRange = new Date(req.body.range.end);
      upperRange = upperRange.setDate(upperRange.getDate() + 1);

      dropSuccses = await Schedule.destroy({
        where: { date: { [Op.between]: [req.body.range.start, upperRange] } }
      });
      console.log(dropSuccses);
      // add bulk from post.events to schedue
      // req.body.events.forEach(element => {

      // });

      events = await createEvents(req.body);

      res.status(200).send({ events: events });
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

async function createEvents(req) {
  try {
    console.log('createEvents');
    const s = new Date(req.range.start);
    const e = new Date(req.range.end);

    let loop = new Date(s);
    eventss = req.events;
    eventsNestedByDay = [[], [], [], [], [], [], []];
    eventss.forEach(e => {
      let day = e.day;
      eventsNestedByDay[day].push(e);
    });
    let eventsToSave = [];
    while (loop <= e) {
      console.log(loop);
      day = loop.getDay();
      // newEvents.filter(e=>)
      eventsNestedByDay[day].forEach(element => {
        delete element.id;

        // element.start = getfFullTime(element.start);
        // element.end = getfFullTime(element.end);
        element.note = 'note';
        element.section = req.section
        element.school=req.school
        eventsToSave.push({ ...element, date: loop });
      });

      let newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
    console.log(eventsToSave);
    addBulk = await Schedule.bulkCreate(eventsToSave);
    return addBulk;
  } catch (error) {
    throw Error('can not add BULK' + error);
  }
  // console.log(addBulk);
}

function getfFullTime(t) {
  var today = new Date(t);
  var hours = ('00' + today.getHours()).slice(-2);
  var minutes = ('00' + today.getMinutes()).slice(-2);
  var seconds = ('00' + today.getSeconds()).slice(-2);

  return hours + ':' + minutes + ':' + seconds;
}
