'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Results', [
      {
        test_id: 1,
        description: 'Your choice is a sports car'
      },
      {
        test_id: 1,
        description: 'Your choice is a SUV'
      },
      {
        test_id: 1,
        description: 'Your choice is a truck'
      },
      {
        test_id: 1,
        description: 'Your choice is a family car'
      },
      {
        test_id: 2,
        description: 'You are a sea creature'
      },
      {
        test_id: 2,
        description: 'You are a bird'
      },
      {
        test_id: 2,
        description: 'You are a reptile'
      },
      {
        test_id: 2,
        description: 'You are a pet'
      },
      {
        test_id: 3,
        description: 'You are a soldier'
      },
      {
        test_id: 3,
        description: 'You are a builder'
      },
      {
        test_id: 3,
        description: 'You are a doctor'
      },
      {
        test_id: 3,
        description: 'You are a sportsman'
      },
      {
        description: 'No matching results'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
