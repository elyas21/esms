module.exports = (sequelize, DataTypes) => {
  const SectionMap = sequelize.define('SectionMap', {
    // 2012: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Section",
    //     key: "id"
    //   }
    // },
    // 2013: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Section",
    //     key: "id"
    //   }
    // },
    // 2014: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Section",
    //     key: "id"
    //   }
    // },
    // 2015: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Section",
    //     key: "id"
    //   }
    // },
    softDelete: { type: DataTypes.BOOLEAN, defaultValue: false },
    school: {
      type: DataTypes.STRING,
      references: {
        model: 'School',
        key: 'SchoolId'
      }
    }
  });

  SectionMap.associate = function(models) {};

  return SectionMap;
};
