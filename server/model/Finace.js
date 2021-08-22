module.exports = (sequelize, DataTypes) => {
  const Finace = sequelize.define(
    'Finace',
    {
      finaceId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      finaceName: DataTypes.STRING,
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
      school: {
        type: DataTypes.STRING,
        references: {
          model: 'School',
          key: 'SchoolId'
        }
      }
    },
    {
      hooks: {
        beforeCreate: createUser
      }
    }
  );

  Finace.associate = function(models) {};

  return Finace;
};

// school reference for token genration rather than joing table

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.finaceId;
  candidateuser.role = 'finace';
  candidateuser.softDelete = false;
  candidateuser.school = user.school;
  candidateuser.password = user.finaceId;
  await AutCon.register(candidateuser);
  return;
}
