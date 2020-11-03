'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnswersToTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AnswersToTag.init({
    answer_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AnswersToTag',
  });
  AnswersToTag.removeAttribute('id')
  AnswersToTag.removeAttribute('createdAt')
  AnswersToTag.removeAttribute('updatedAt')

  return AnswersToTag;
};
