const { Attendance } = require('../model');

module.exports = {
  // get day Attendance by stuid
  // get  month attend -Paginate
  // get attendanc by section -Paginate by day and weeks 1...4
  // fill attendace get arry of objectOfStat

  //   updateAteendace
  async update(req, res) {
    try {
      console.log(req.body);
      const attd = await Attendance.update(req.body, {
        where: {
          id: req.body.id
        }
      });
      if (attd[0]) {
        res.send({
          update: 'ok'
        });
      }
      console.log(attd);
      res.send({ update: 'bad' });
    } catch (e) {
      console.log(e);
      res.status(500).send({
        error: `${e} update attd got an error`
      });
    }
  },
  async createAttendace(attendace) {
    const ok = await Attendance.create(attendace);
    return ok ? true : false;
  },
  async removeAttendace(attendace) {
    const ok = await Attendance.destroy({
      where: {
        student: attendace.student,
        section: attendace.section
      }
    });
    return ok ? true : false;
  },
  async getAttendaceBySectionDayClassYear(req, res) {
    try {
      console.log(req.params);
      const attd = await Attendance.findAll({
        attributes: ['student', 'id', req.params.day, 'section', 'month'],
        where: {
          school: req.params.school,
          month: req.params.month,
          section: req.params.section
        }
      });
      if (attd) {
        res.status(200).send(attd);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        err: 'internal error'
      });
    }
  },
  async getAllByMonth(req, res) {
    try {
      console.log(req.params);
      const attd = await Attendance.findOne({
        where: {
          school: req.params.school,
          month: req.params.month,
          student: req.params.student
        }
      });
      if (attd) {
        res.status(200).send(attd);
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      console.log(e);
      res.status(500).send({
        err: 'internal error'
      });
    }
  }
};
