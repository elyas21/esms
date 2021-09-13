const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      if (user.role === 'student') {
        user.setDataValue('openPassword', user.password);
      }
      user.setDataValue('password', hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      role: {
        type: DataTypes.ENUM,
        values: ['finace', 'admin', 'director', 'registra', 'lecture', 'student', 'parent']
      },
      openPassword: {
        type: DataTypes.STRING
      },
      password: DataTypes.STRING,
      google_refresh_token: DataTypes.STRING,
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
      }
    }
  );

  User.prototype.comparePassword = async function(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  User.associate = function(models) {
    User.belongsTo(models.School, { foreignKey: 'school' });
  };
  return User;
};
