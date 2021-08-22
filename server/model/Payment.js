module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    paymentId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    term1: DataTypes.INTEGER(8).UNSIGNED,
    term2: DataTypes.INTEGER(8).UNSIGNED,
    term3: DataTypes.INTEGER(8).UNSIGNED,
    term4: DataTypes.INTEGER(8).UNSIGNED,
    term5: DataTypes.INTEGER(8).UNSIGNED,
    term6: DataTypes.INTEGER(8).UNSIGNED,
    term7: DataTypes.INTEGER(8).UNSIGNED,
    term8: DataTypes.INTEGER(8).UNSIGNED,
    term9: DataTypes.INTEGER(8).UNSIGNED,
    term10: DataTypes.INTEGER(8).UNSIGNED
  });

  Payment.associate = function(models) {
    Payment.belongsTo(models.ClassYearMap, { foreignKey: 'classYear' });
    Payment.belongsTo(models.School, { foreignKey: 'school' });
    Payment.belongsTo(models.Student, {
      foreignKey: 'student'
    });
  };

  return Payment;
};
