const { Staff } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Staff);
      const staff = await Staff.findAll();
      res.send(staff);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getAllBySchool(req, res) {
    console.log(req.params);
    try {
      const staff = await Staff.findAll({
        where: {
          school: req.params.school
        }
      });
      if (staff) {
        res.status(200).send(staff);
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
      const staff = await Staff.findOne({
        where: {
          staffId: req.params.staffId
        }
      });
      if (staff) {
        res.status(200).send({ staff, found: true });
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
      const exissting = await Staff.findOne({
        where: {
          staffId: req.body.staffId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Staff.update(newUser, {
          where: {
            staffId: req.body.staffId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          staff: exissting.toJSON()
        });
      }

      const staff = await Staff.create(req.body);
      //   const schoolJson = staff.toJSON();

      res.send({
        staff: staff.toJSON(),
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
      const staff = await Staff.update(req.body, {
        where: {
          staffId: req.body.staffId
        }
      });
      if (staff[0]) {
        res.send({
          staff,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update staff got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const staff = await Staff.update(dd, {
        where: {
          staffId: req.params.staffId
        }
      });
      if (staff[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.params.staffId;
        isUsrde = await AutCon.remove(candidateuser);
        console.log(isUsrde);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the staff'
      });
    }
  }
};
