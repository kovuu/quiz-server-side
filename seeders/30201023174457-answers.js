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
    await queryInterface.bulkInsert('Answers', [
      {
        question_id: 1,
        text: 'Yes, I like very fast cars',
      },
      {
        question_id: 1,
        text: 'Does not matter'
      },
      {
        question_id: 1,
        text: 'I prefer medium speed cars'
      },
      {
        question_id: 1,
        text: 'Better slow'
      },
      {
        question_id: 2,
        text: 'Yes, I need a lot of space in the car for cargo'
      },
      {
        question_id: 2,
        text: 'Does not matter'
      },
      {
        question_id: 2,
        text: 'You need a roomy car to make people comfortable'
      },
      {
        question_id: 2,
        text: 'No roominess needed'
      },
      {
        question_id: 3,
        text: 'I am very rich'
      },
      {
        question_id: 3,
        text: 'If I like the car, then I will find money for it.'
      },
      {
        question_id: 3,
        text: 'I want an average price'
      },
      {
        question_id: 3,
        text: 'I want cheaper'
      },
      {
        question_id: 4,
        text: 'I wish that I could transport goods on it'
      },
      {
        question_id: 4,
        text: 'I want to race'
      },
      {
        question_id: 4,
        text: 'I want a car that is comfortable off-road'
      },
      {
        question_id: 4,
        text: 'I want a car that is comfortable for city trips'
      },
      {
        question_id: 5,
        text: 'I want maximum safety'
      },
      {
        question_id: 5,
        text: 'Medium safety'
      },
      {
        question_id: 5,
        text: 'Does not matter'
      },
      {
        question_id: 5,
        text: 'I am not afraid of dangers'
      },
      {
        question_id: 6,
        text: 'from spawn'
      },
      {
        question_id: 6,
        text: 'from egg'
      },
      {
        question_id: 6,
        text: 'belly birth'
      },
      {
        question_id: 7,
        text: 'In the water'
      },
      {
        question_id: 7,
        text: 'In the air'
      },
      {
        question_id: 7,
        text: 'On the sand'
      },
      {
        question_id: 7,
        text: 'In the house'
      },
      {
        question_id: 8,
        text: 'a fins'
      },
      {
        question_id: 8,
        text: 'a wings'
      },
      {
        question_id: 8,
        text: 'may be no limbs'
      },
      {
        question_id: 8,
        text: 'a paws'
      },
      {
        question_id: 9,
        text: 'a scales'
      },
      {
        question_id: 9,
        text: 'a feathers'
      },
      {
        question_id: 9,
        text: 'a wool'
      },
      {
        question_id: 10,
        text: 'I can swim'
      },
      {
        question_id: 10,
        text: 'I can fly'
      },
      {
        question_id: 10,
        text: 'I can crawl'
      },
      {
        question_id: 10,
        text: 'I can run'
      },
      {
        question_id: 11,
        text: 'Defence motherland'
      },
      {
        question_id: 11,
        text: 'Build houses'
      },
      {
        question_id: 11,
        text: 'Heal people'
      },
      {
        question_id: 11,
        text: 'Participate in competitions'
      },
      {
        question_id: 12,
        text: 'Big salary'
      },
      {
        question_id: 12,
        text: 'Middle salary'
      },
      {
        question_id: 12,
        text: 'Small salary'
      },
      {
        question_id: 12,
        text: 'Very big salary'
      },
      {
        question_id: 13,
        text: 'At military training'
      },
      {
        question_id: 13,
        text: 'At the college'
      },
      {
        question_id: 13,
        text: 'At the university'
      },
      {
        question_id: 13,
        text: 'In training'
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
