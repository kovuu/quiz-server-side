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
    await queryInterface.bulkInsert('ResultToTags', [
      {
        result_id: 1,
        tag_id: 1,
      },
      {
        result_id: 1,
        tag_id: 6
      },
      {
        result_id: 1,
        tag_id: 7
      },
      {
        result_id: 1,
        tag_id: 11
      },
      {
        result_id: 1,
        tag_id: 16
      },
      {
        result_id: 2,
        tag_id: 2,
      },
      {
        result_id: 2,
        tag_id: 5
      },
      {
        result_id: 2,
        tag_id: 8
      },
      {
        result_id: 2,
        tag_id: 12
      },
      {
        result_id: 2,
        tag_id: 14
      },
      {
        result_id: 3,
        tag_id: 3,
      },
      {
        result_id: 3,
        tag_id: 4
      },
      {
        result_id: 3,
        tag_id: 7
      },
      {
        result_id: 3,
        tag_id: 10
      },
      {
        result_id: 3,
        tag_id: 14
      },
      {
        result_id: 4,
        tag_id: 2,
      },
      {
        result_id: 4,
        tag_id: 5
      },
      {
        result_id: 4,
        tag_id: 9
      },
      {
        result_id: 4,
        tag_id: 13
      },
      {
        result_id: 4,
        tag_id: 15
      },
      {
        result_id: 5,
        tag_id: 17,
      },
      {
        result_id: 5,
        tag_id: 20
      },
      {
        result_id: 5,
        tag_id: 24,
      },
      {
        result_id: 5,
        tag_id: 28
      },
      {
        result_id: 5,
        tag_id: 31
      },
      {
        result_id: 6,
        tag_id: 18,
      },
      {
        result_id: 6,
        tag_id: 21
      },
      {
        result_id: 6,
        tag_id: 25
      },
      {
        result_id: 6,
        tag_id: 29
      },
      {
        result_id: 6,
        tag_id: 32
      },
      {
        result_id: 7,
        tag_id: 18,
      },
      {
        result_id: 7,
        tag_id: 22
      },
      {
        result_id: 7,
        tag_id: 26
      },
      {
        result_id: 7,
        tag_id: 28
      },
      {
        result_id: 7,
        tag_id: 33
      },
      {
        result_id: 8,
        tag_id: 19,
      },
      {
        result_id: 8,
        tag_id: 23
      },
      {
        result_id: 8,
        tag_id: 27
      },
      {
        result_id: 8,
        tag_id: 30
      },
      {
        result_id: 8,
        tag_id: 34
      },
      {
        result_id: 9,
        tag_id: 35
      },
      {
        result_id: 9,
        tag_id: 39
      },
      {
        result_id: 9,
        tag_id: 43
      },
      {
        result_id: 10,
        tag_id: 36
      },
      {
        result_id: 10,
        tag_id: 40
      },
      {
        result_id: 10,
        tag_id: 44
      },
      {
        result_id: 11,
        tag_id: 37
      },
      {
        result_id: 11,
        tag_id: 41
      },
      {
        result_id: 11,
        tag_id: 45
      },
      {
        result_id: 12,
        tag_id: 38
      },
      {
        result_id: 12,
        tag_id: 42
      },
      {
        result_id: 12,
        tag_id: 46
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
