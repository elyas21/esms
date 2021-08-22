module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'Admin',
    {
      adminId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      adminName: DataTypes.STRING
    },
    {
      hooks: {
        beforeCreate: createUser
      }
    }
  );

  Admin.associate = function(models) {};

  return Admin;
};
async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.adminId;
  candidateuser.role = 'admin';
  candidateuser.softDelete = false;
  candidateuser.password = user.adminId;
  await AutCon.register(candidateuser);
  return;
}
