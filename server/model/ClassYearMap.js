module.exports = (sequelize, DataTypes) => {
  const ClassYearMap = sequelize.define(
    'ClassYearMap',
    {
      name: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
        unique: true
      },
      start: {
        type: DataTypes.DATEONLY
      },
      end: {
        type: DataTypes.DATEONLY
      },
      isClosed: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      semisterType: { type: DataTypes.INTEGER(1).UNSIGNED, defaultValue: 2 },
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false }
    },
    {
      hooks: {
        beforeCreate: createSemisters
        // afterCreate: createGradeing
      }
    }
  );

  ClassYearMap.associate = function(models) {
    ClassYearMap.belongsToMany(models.SemisterMap, {
      through: 'semistersInfo',
      constraints: false
    });

    ClassYearMap.belongsTo(models.School, {
      foreignKey: 'school',
      constraints: false
    });
  };

  return ClassYearMap;
};

function createSemisters(classYear) {
  const SemisterMap = require('../controllers/manageSemisterMap');

  for (let index = 0; index < classYear.semisterType; index++) {
    semister = { name: '', classYear: '' };
    semister.name = index + 1;
    semister.classYear = classYear.name;
    SemisterMap.addSemister(semister);
  }
}
