const { School, Address, Director } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      const school = await School.findAll();
      res.send(school);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    try {
      console.log(req.params);
      const school = await School.findOne({
        where: {
          schoolId: req.params.schoolId
        },
        include: [
          {
            model: Address
            // where: { id: '1'   }
          },
          {
            model: Director
            // where: { id: '1'   }
          }
        ]
      });
      if (school) {
        res.status(200).send(school);
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
  async add(req, res) {
    try {
      console.log(req.body);
      schoolInfo = {
        schoolId: req.body.schoolId,
        schoolName: req.body.schoolName
      };

      dataAddress = req.body.schoolAddress;
      // dataAddress =
      //  {
      //   region: req.body.schoolAddress.region,
      //   zone: req.body.schoolAddress.zone,
      //   city: req.body.schoolAddress.city,
      //   kfleketema: req.body.schoolAddress.kfleketema,
      //   wereda: req.body.schoolAddress.wereda,
      //   kebele: req.body.schoolAddress.kebele,
      //   houseNo: req.body.schoolAddress.houseNo,
      //   phoneNo: req.body.schoolAddress.phoneNo,
      //   poBox: req.body.schoolAddress.poBox,
      //   email: req.body.schoolAddress.email,
      // };
      const school = await School.create(schoolInfo);
      const schoolJson = school.toJSON();

      // if school add succsesfully then add addres to table and atach to school
      if (school) {
        console.log(dataAddress);
        address = await Address.create(dataAddress);

        School.update(
          { address: address.id },
          {
            where: {
              schoolId: schoolInfo.schoolId
            }
          }
        );
      }

      res.send({
        school: schoolJson,
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
    console.log(req.body);
    try {
      const school = await School.update(req.body, {
        where: {
          schoolId: req.body.school
        }
      });
      if (school[0]) {
        res.send({
          school,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update school got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(req.body);
      dd.softDelete = true;
      const school = await School.update(req.body, {
        where: {
          schoolId: req.body.schoolId
        }
      });
      if (school[0] == 1) {
        res.send({ removed: 'ok' });
      } else {
        return res.status(403).send({
          error: 'you do not have access to this school'
        });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the school'
      });
    }
  }
};
