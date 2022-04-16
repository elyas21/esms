const { User, School, Student, Section } = require('../model');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

module.exports = {
  async remove(user) {
    try {
      user.softDelete = true;
      const isRemoved = await User.update(user, {
        where: {
          userId: user.userId
        }
      });
      if (isRemoved[0] == 1) {
        // res.send({ removed: "ok" });
        return true;
      } else {
        return false;
      }
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async register(user) {
    try {
      console.log(user);
      const exisstinguser = await User.findOne({
        where: {
          userId: user.userId
        }
      });
      if (exisstinguser) {
        newUser = user;
        console.log(user);
        newUser.softDelete = false;
        await User.update(newUser, {
          where: {
            userId: user.userId
          }
        });
        return;
      }
      console.log(user);
      await User.create(user);
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async login(req, res) {
    try {
      console.log(req.body);
      const { userId, password } = req.body;
      const user = await User.findOne({
        where: {
          userId: userId
        },
        include: [
          {
            model: School
          }
        ]
      });

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        });
      }

      const isPasswordValid = await user.comparePassword(password);
      console.log(isPasswordValid);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect(password)'
        });
      }

      const userJson = user.toJSON();
      userJson.token = jwtSignUser(userJson);

      /*  if user is a Teacher and assign as homeroom 
          teacher 4 this school year find those or that section 
          and pass as Techer info object
     */
      if (user.role == 'lecture') {
        sections = await homeroomeResolve(user);
        userJson.sections = sections;
      }

      if (user.role == 'student') {
        sections = await sectionResolve(user);
        userJson.Studentsections = sections;
      }
      req.session.user = userJson;
      req.session.userInfo = userJson;
      res.status(200).send(
        userJson

        // token: jwtSignUser(userJson)
      );
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: err
      });
    }
  },
  async glogin(req, res, next) {
    try {
      console.log(req.body);
      const { userId, password } = req.body;
      const user = await User.findOne({
        where: {
          userId: userId
        },
        include: [
          {
            model: School
          }
        ]
      });

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        });
      }

      const isPasswordValid = await user.comparePassword(password);
      console.log(isPasswordValid);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect(password)'
        });
      }

      const userJson = user.toJSON();
      userJson.token = jwtSignUser(userJson);

      /*  if user is a Teacher and assign as homeroom 
          teacher 4 this school year find those or that section 
          and pass as Techer info object
     */
      if (user.role == 'lecture') {
        sections = await homeroomeResolve(user);
        userJson.sections = sections;
      }

      if (user.role == 'student') {
        sections = await sectionResolve(user);
        userJson.Studentsections = sections;
      }

      // res.status(200).send(
      //   userJson

      //   // token: jwtSignUser(userJson)
      // );
      next(userJson);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: err
      });
    }
  }
};

/* 
        if user is a Teacher and assign as homeroom 
        teacher 4 this school year find those or that section 
        and pass as Techer info object
   */
async function homeroomeResolve(user) {
  if (user.role == 'lecture') {
    // find all section by this year
    // find all sections where user.id = section.homeroomTeacher
    sections = await Section.findAll({
      where: {
        school: user.school,
        classYear: user.School.currentClassYear,
        homeroomTeacher: user.userId
      }
    });
  }
  // console.log(sections)
  return sections;
}

async function sectionResolve(user) {
  if (user.role == 'student') {
    x = await Student.findOne({
      where: {
        studentId: user.userId
      },
      attributes: ['currentSection']
    });
  }
  return x.currentSection;
}
