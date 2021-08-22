module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define(
    'Director',
    {
      directorId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      firstName: DataTypes.STRING,
      middleName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      hooks: {
        beforeCreate: createUser
      }
    }
  );

  Director.associate = function(models) {
    Director.belongsTo(models.School, {
      foreignKey: 'school',
      constraints: false
    });
    Director.belongsTo(models.Address, {
      foreignKey: 'address'
    });
  };

  return Director;
};

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.directorId;
  candidateuser.role = 'director';
  candidateuser.school = user.school;
  candidateuser.password = user.directorId;
  await AutCon.register(candidateuser);
  return;
}
