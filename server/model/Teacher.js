module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define(
    'Teacher',
    {
      teacherId: {
        type: DataTypes.STRING(40),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      teacherName: DataTypes.STRING,
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

  Teacher.associate = function(models) {};

  return Teacher;
};

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.teacherId;
  candidateuser.role = 'lecture';
  candidateuser.school = user.school;
  candidateuser.softDelete = false;
  candidateuser.password = user.teacherId;
  await AutCon.register(candidateuser);
  return;
}
