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
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportcar.jpg',
        description: 'Your choice is a sports car'
      },
      {
        test_id: 1,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/suv.jpg',
        description: 'Your choice is a SUV'
      },
      {
        test_id: 1,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/truck.jpg',
        description: 'Your choice is a truck'
      },
      {
        test_id: 1,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/family_car.jpg',
        description: 'Your choice is a family car'
      },
      {
        test_id: 2,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sea+creatures.jpg',
        description: 'You are a sea creature'
      },
      {
        test_id: 2,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/birds.jpeg',
        description: 'You are a bird'
      },
      {
        test_id: 2,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/reptiles.jpg',
        description: 'You are a reptile'
      },
      {
        test_id: 2,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/mammals.jpg',
        description: 'You are a pet'
      },
      {
        test_id: 3,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/soldier.jpg',
        description: 'You are a soldier'
      },
      {
        test_id: 3,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/builder.jpg',
        description: 'You are a builder'
      },
      {
        test_id: 3,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/doctor.jpg',
        description: 'You are a doctor'
      },
      {
        test_id: 3,
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportsman.jpg',
        description: 'You are a sportsman'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/notfound.png',
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
