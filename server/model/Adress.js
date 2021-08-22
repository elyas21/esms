module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    region: { type: DataTypes.STRING },
    zone: { type: DataTypes.STRING },
    kifleKetema: { type: DataTypes.STRING },
    wereda: { type: DataTypes.STRING },
    kebele: { type: DataTypes.INTEGER(2).UNSIGNED },
    houseNo: { type: DataTypes.INTEGER(5).UNSIGNED },
    phoneNo: { type: DataTypes.INTEGER(15).UNSIGNED },
    email: { type: DataTypes.STRING(50) },
    poBox: { type: DataTypes.STRING },
    emergencyContactName: { type: DataTypes.STRING(50) },
    emPhoneNoe: { type: DataTypes.INTEGER(15).UNSIGNED },
    homephno: { type: DataTypes.INTEGER(12) }
  });

  Address.associate = function(models) {
    // Address.hasOne(models.School , {as: 'scAddress'})
  };

  return Address;
};
