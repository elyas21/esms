module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    1: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'], //absent sick holiday weekEnd Present F=>perimision
      defaultValue: 'P'
    },
    2: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    3: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    4: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    5: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    6: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    7: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    8: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    9: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    10: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    11: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    12: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    13: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    14: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    15: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    16: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    17: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    18: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    19: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    20: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    21: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    22: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    23: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    24: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    25: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    26: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    27: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    28: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    29: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    30: {
      type: DataTypes.ENUM,
      values: ['A', 'S', 'H', 'W', 'P', 'F', 'L'],
      defaultValue: 'P'
    },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    date: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    month: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    },
    monthStart: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5', '6', '7']
    }
  });

  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Student, { foreignKey: 'student' });
    Attendance.belongsTo(models.Section, { foreignKey: 'section' });
    Attendance.belongsTo(models.ClassYearMap, { foreignKey: 'classYear' });
    Attendance.belongsTo(models.School, { foreignKey: 'school' });
    Attendance.belongsTo(models.Teacher, { foreignKey: 'teacher' });
  };

  return Attendance;
};
