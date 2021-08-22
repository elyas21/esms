module.exports = (sequelize, DataTypes) => {
  const Registra = sequelize.define(
    'Registra',
    {
      registraId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      registraName: DataTypes.STRING,
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

  Registra.associate = function(models) {};

  return Registra;
};

// school reference for token genration rather than joing table

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.registraId;
  candidateuser.role = 'registra';
  candidateuser.softDelete = false;
  candidateuser.school = user.school;
  candidateuser.password = user.registraId;
  await AutCon.register(candidateuser);
  return;
}
