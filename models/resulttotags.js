'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResultToTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ResultToTags.init({
    result_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ResultToTags',
  });
  ResultToTags.removeAttribute('id')
  ResultToTags.removeAttribute('createdAt')
  ResultToTags.removeAttribute('updatedAt')
  return ResultToTags;
};
