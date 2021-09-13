module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    'Staff',
    {
      staffId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      staffFirstName: DataTypes.STRING(20),
      staffMiddleName: DataTypes.STRING(20),
      staffLastName: DataTypes.STRING(20),
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
      school: {
        type: DataTypes.STRING,
        references: {
          model: 'School',
          key: 'SchoolId'
        }
      },
      role: {
        type: DataTypes.ENUM,
        values: ['finace', 'admin', 'director', 'registra', 'lecture', 'student', 'parent']
      }
    },

    {
      hooks: {
        beforeCreate: createUser
      }
    }
  );

  Staff.associate = function(models) {};

  return Staff;
};

// school reference for token genration rather than joing table

async function createUser(user) {
  const AutCon = require('../controllers/autCon');

  const candidateuser = {};
  candidateuser.userId = user.staffId;
  // console.log(user.role)
  // console.log(user)
  candidateuser.role = user.role;
  candidateuser.softDelete = false;
  candidateuser.school = user.school;
  candidateuser.password = user.staffId;
  await AutCon.register(candidateuser);
  return;
}
