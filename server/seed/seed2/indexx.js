const { sequelize, Section } = require('../../model');

const Promise = require('bluebird');
const section = require('../section.json');

sequelize.sync().then(async function() {
  await Promise.all(
    section.map(section => {
      Section.create(section);
    })
  );
});
