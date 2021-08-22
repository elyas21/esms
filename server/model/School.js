module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    schoolId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    schoolName: DataTypes.STRING,
    // currentTerm: {
    //   type: DataTypes.ENUM,
    //   values: ['1', '2', '3', '4'],
    //   defaultValue: 1
    // },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  School.associate = function(models) {
    School.belongsTo(models.Director, { foreignKey: 'DirectorId' });
    School.belongsTo(models.ClassYearMap, { foreignKey: 'lastClassYear' });
    School.belongsTo(models.ClassYearMap, { foreignKey: 'currentClassYear' });
    School.belongsToMany(models.ClassYearMap, { through: 'schoolClassYear' });
    School.belongsTo(models.Address, { foreignKey: 'address' });
  };

  return School;
};
