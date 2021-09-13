module.exports = (sequelize, DataTypes) => {
  const SudoSchedule = sequelize.define(
    'SudoSchedule',
    {
      classType: {
        type: DataTypes.ENUM,
        values: ['face2face', 'online'],
        defaultValue: 'face2face'
      },
      location: {
        type: DataTypes.STRING
      },
      end: {
        type: DataTypes.TIME
      },
      start: {
        type: DataTypes.TIME
      },
      classroomId: {
        type: DataTypes.STRING
      },
      driveUrl: {
        type: DataTypes.STRING
      },
      version: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day: { type: DataTypes.INTEGER(1).UNSIGNED, validate: { min: 0, max: 6 } }, // 0 sun ... to 1 fri
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
      section: {
        type: DataTypes.STRING,
        references: {
          model: 'Section',
          key: 'sectionId'
        }
      },
      school: {
        type: DataTypes.STRING,
        references: {
          model: 'School',
          key: 'schoolId'
        }
      },
      teacher: {
        type: DataTypes.STRING,
        references: {
          model: 'Teacher',
          key: 'teacherId'
        }
      },
      classYearMap: {
        type: DataTypes.INTEGER,
        references: {
          model: 'ClassYearMap',
          key: 'id'
        }
      }
    },

    {
      hooks: {
        // beforeCreate: createSemisters
        // afterCreate: createGradeing
      }
    }
  );

  SudoSchedule.associate = function(models) {};

  return SudoSchedule;
};
