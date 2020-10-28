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
    await queryInterface.bulkInsert('Tags', [
      {
        name: 'fast'
      },
      {
        name: 'mediumSpeed'
      },
      {
        name: 'lowSpeed'
      },
      {
        name: 'veryRoomy'
      },
      {
        name: 'roomy'
      },
      {
        name: 'noRoomy'
      },
      {
        name: 'highPrice'
      },
      {
        name: 'mediumPrice'
      },
      {
        name: 'lowPrice'
      },
      {
        name: 'transportation'
      },
      {
        name: 'racing'
      },
      {
        name: 'offRoad'
      },
      {
        name: 'city'
      },
      {
        name: 'superSafety'
      },
      {
        name: 'safety'
      },
      {
        name: 'danger'
      },
      {
        name: 'spawn'
      },
      {
        name: 'egg'
      },
      {
        name: 'bellyBirth'
      },
      {
        name: 'water'
      },
      {
        name: 'air'
      },
      {
        name: 'sand'
      },
      {
        name: 'house'
      },
      {
        name: 'fins'
      },
      {
        name: 'wings'
      },
      {
        name: 'mayBeNoLimbs'
      },
      {
        name: 'paws'
      },
      {
        name: 'scales'
      },
      {
        name: 'feathers'
      },
      {
        name: 'wool'
      },
      {
        name: 'swim'
      },
      {
        name: 'fly'
      },
      {
        name: 'crawl'
      },
      {
        name: 'run'
      },
      {
        name: 'homelandDefence'
      },
      {
        name: 'build'
      },
      {
        name: 'heal'
      },
      {
        name: 'compete'
      },
      {
        name: 'bigSalary'
      },
      {
        name: 'middleSalary'
      },
      {
        name: 'smallSalary'
      },
      {
        name: 'veryBigSalary'
      },
      {
        name: 'militaryTraining'
      },
      {
        name: 'college'
      },
      {
        name: 'university'
      },
      {
        name: 'training'
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
