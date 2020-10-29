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

    await queryInterface.bulkInsert('Images', [
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportcar.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportscar2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/suv.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/suv2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/truck.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/truck2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/family_car.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/familyCar2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sea+creatures.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sea2.jpeg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/birds.jpeg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/bird2.jpeg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/reptiles.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/snake2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/mammals.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/dog2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/soldier.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/soldier2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/builder.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/builder2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/doctor.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/doctor2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportsman.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/sportsman2.jpg'
      },
      {
        imageLink: 'https://quiz-test-2233.s3.eu-north-1.amazonaws.com/notfound.png'
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
