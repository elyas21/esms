const crypto = require('crypto');
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define(
    'Schedule',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      date: {
        type: DataTypes.DATEONLY
      },
      googleCalId: {
        type: DataTypes.UUID
      },
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
      day: { type: DataTypes.INTEGER(1).UNSIGNED, validate: { min: 0, max: 6 } }, // 0 sun ... to 1 fri
      scheduleFor: {
        type: DataTypes.ENUM,
        values: ['class', 'makUp', 'meeting', 'exam', 'gstudy', 'study', 'homeWork', 'other'],
        defaultValue: 'class'
      },
      summary: {
        type: DataTypes.STRING
      },
      note: {
        type: DataTypes.TEXT
      },
      softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
      section: {
        type: DataTypes.STRING,
        references: {
          model: 'Section',
          key: 'sectionId'
        }
      },
      scheduleVersion: {
        type: DataTypes.INTEGER,
        references: {
          model: 'SudoSchedule',
          key: 'id'
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
        beforeCreate: createID,
        // beforebulk
        // afterCreate: createGradeing
      }
    }
  );

  Schedule.associate = function(models) {};

  return Schedule;
};
function createID(user, options) {
  id = crypto.randomUUID();
  return user.setDataValue('id', id);
}
