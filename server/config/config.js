module.exports = {
  port: process.env.PORT || 8082,
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  type: {
    lecture: 1,
    departmentHead: 2,
    collegeHead: 1 | 3,
    cdem: 1 | 4,
    admin: 5 | 1
  },
  couresType: {
    normalCourse: 1,
    engineeringCoures: 2,
    languageCoures: 3
  }
};
