module.exports = (sequelize, DataTypes) => {
  const Parente = sequelize.define(
    'Parent',
    {
      parentId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      parentName: DataTypes.STRING,
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      hooks: {
        beforeCreate: createUser
      }
    }
  );

  Parente.associate = function(models) {
    Parente.belongsToMany(models.Student, { through: 'studentParetingId' });
  };

  return Parente;
};

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.parentId;
  candidateuser.role = 'parent';
  candidateuser.softDelete = false;
  candidateuser.password = user.parentId;
  await AutCon.register(candidateuser);
  return;
}
