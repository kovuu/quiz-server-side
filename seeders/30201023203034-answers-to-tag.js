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

    await queryInterface.bulkInsert('AnswersToTags', [
      {
        answer_id: 1,
        tag_id: 1
      },
      {
        answer_id: 2,
        tag_id: 1
      },
      {
        answer_id: 2,
        tag_id: 2
      },
      {
        answer_id: 2,
        tag_id: 3
      },
      {
        answer_id: 3,
        tag_id: 2
      },
      {
        answer_id: 4,
        tag_id: 3
      },
      {
        answer_id: 5,
        tag_id: 4
      },
      {
        answer_id: 6,
        tag_id: 4
      },
      {
        answer_id: 6,
        tag_id: 5
      },
      {
        answer_id: 6,
        tag_id: 6
      },
      {
        answer_id: 7,
        tag_id: 5
      },
      {
        answer_id: 8,
        tag_id: 6
      },
      {
        answer_id: 9,
        tag_id: 7
      },
      {
        answer_id: 10,
        tag_id: 7
      },
      {
        answer_id: 10,
        tag_id: 8
      },
      {
        answer_id: 10,
        tag_id: 9
      },
      {
        answer_id: 11,
        tag_id: 8
      },
      {
        answer_id: 12,
        tag_id: 9
      },
      {
        answer_id: 13,
        tag_id: 10
      },
      {
        answer_id: 14,
        tag_id: 11
      },
      {
        answer_id: 15,
        tag_id: 12
      },
      {
        answer_id: 16,
        tag_id: 13
      },
      {
        answer_id: 17,
        tag_id: 14
      },
      {
        answer_id: 18,
        tag_id: 15
      },
      {
        answer_id: 19,
        tag_id: 14
      },
      {
        answer_id: 19,
        tag_id: 15
      },
      {
        answer_id: 19,
        tag_id: 16
      },
      {
        answer_id: 20,
        tag_id: 16
      },
      {
        answer_id: 21,
        tag_id: 17
      },
      {
        answer_id: 22,
        tag_id: 18
      },
      {
        answer_id: 23,
        tag_id: 19
      },
      {
        answer_id: 24,
        tag_id: 20
      },
      {
        answer_id: 25,
        tag_id: 21
      },
      {
        answer_id: 26,
        tag_id: 22
      },
      {
        answer_id: 27,
        tag_id: 23
      },
      {
        answer_id: 28,
        tag_id: 24
      },
      {
        answer_id: 29,
        tag_id: 25
      },
      {
        answer_id: 30,
        tag_id: 26
      },
      {
        answer_id: 31,
        tag_id: 27
      },
      {
        answer_id: 32,
        tag_id: 28
      },
      {
        answer_id: 33,
        tag_id: 29
      },
      {
        answer_id: 34,
        tag_id: 30
      },
      {
        answer_id: 35,
        tag_id: 31
      },
      {
        answer_id: 36,
        tag_id: 32
      },
      {
        answer_id: 37,
        tag_id: 33
      },
      {
        answer_id: 38,
        tag_id: 34
      },
      {
        answer_id: 39,
        tag_id: 35
      },
      {
        answer_id: 40,
        tag_id: 36
      },
      {
        answer_id: 41,
        tag_id: 37
      },
      {
        answer_id: 42,
        tag_id: 38
      },
      {
        answer_id: 43,
        tag_id: 39
      },
      {
        answer_id: 44,
        tag_id: 40
      },
      {
        answer_id: 45,
        tag_id: 41
      },
      {
        answer_id: 46,
        tag_id: 42
      },
      {
        answer_id: 47,
        tag_id: 43
      },
      {
        answer_id: 48,
        tag_id: 44
      },
      {
        answer_id: 49,
        tag_id: 45
      },
      {
        answer_id: 50,
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
