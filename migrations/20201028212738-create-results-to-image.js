'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ResultsToImages', {
      result_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Results',
          key: 'id'
        }
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Images',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ResultsToImages');
  }
};
