const { sequelize, Teacher } = require('../../model');

const Promise = require('bluebird');
const teacher = require('./teacher');

sequelize.sync().then(async function() {
  await Promise.all(
    teacher.map(teacher => {
      Teacher.create(teacher);
    })
  );
});
