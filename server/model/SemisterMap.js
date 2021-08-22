module.exports = (sequelize, DataTypes) => {
  const SemisterMap = sequelize.define('SemisterMap', {
    name: {
      type: DataTypes.STRING
    },
    semisterStart: {
      type: DataTypes.DATEONLY
    },
    semisterClassEnd: {
      type: DataTypes.DATEONLY
    },
    semisterEnd: {
      type: DataTypes.DATEONLY
    },
    isClosed: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  SemisterMap.associate = function(models) {
    SemisterMap.belongsTo(models.School, { foreignKey: 'school' });

    SemisterMap.belongsTo(models.ClassYearMap, {
      foreignKey: 'semisterClassYear'
      // constraints: false
    });
  };

  return SemisterMap;
};
