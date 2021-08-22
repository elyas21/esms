module.exports = (sequelize, DataTypes) => {
  const GradeMap = sequelize.define('GradeMap', {
    2012: {
      type: DataTypes.ENUM,
      values: [
        'G-1',
        'G-2',
        'G-3',
        'G-4',
        'G-5',
        'G-6',
        'G-7',
        'G-8',
        'G-9',
        'G-10',
        'G-11',
        'G-12',
        'G-kg-1',
        'G-kg-2',
        'G-kg-3'
      ]
    },
    2013: {
      type: DataTypes.ENUM,
      values: [
        'G-1',
        'G-2',
        'G-3',
        'G-4',
        'G-5',
        'G-6',
        'G-7',
        'G-8',
        'G-9',
        'G-10',
        'G-11',
        'G-12',
        'G-kg-1',
        'G-kg-2',
        'G-kg-3'
      ]
    },
    2014: {
      type: DataTypes.ENUM,
      values: [
        'G-1',
        'G-2',
        'G-3',
        'G-4',
        'G-5',
        'G-6',
        'G-7',
        'G-8',
        'G-9',
        'G-10',
        'G-11',
        'G-12',
        'G-kg-1',
        'G-kg-2',
        'G-kg-3'
      ]
    },
    2015: {
      type: DataTypes.ENUM,
      values: [
        'G-1',
        'G-2',
        'G-3',
        'G-4',
        'G-5',
        'G-6',
        'G-7',
        'G-8',
        'G-9',
        'G-10',
        'G-11',
        'G-12',
        'G-kg-1',
        'G-kg-2',
        'G-kg-3'
      ]
    },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    }
  });

  GradeMap.associate = function(models) {};

  return GradeMap;
};
