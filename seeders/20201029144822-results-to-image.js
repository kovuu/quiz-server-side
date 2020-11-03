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
        await queryInterface.bulkInsert('ResultsToImages',
            [
                {
                    result_id: 1,
                    image_id: 1
                },
                {
                    result_id: 1,
                    image_id: 2
                },
                {
                    result_id: 2,
                    image_id: 3
                },
                {
                    result_id: 2,
                    image_id: 4
                },
                {
                    result_id: 3,
                    image_id: 5
                },
                {
                    result_id: 3,
                    image_id: 6
                },
                {
                    result_id: 4,
                    image_id: 7
                },
                {
                    result_id: 4,
                    image_id: 8
                },
                {
                    result_id: 5,
                    image_id: 9
                },
                {
                    result_id: 5,
                    image_id: 10
                },
                {
                    result_id: 6,
                    image_id: 11
                },
                {
                    result_id: 6,
                    image_id: 12
                },
                {
                    result_id: 7,
                    image_id: 13
                },
                {
                    result_id: 7,
                    image_id: 14
                },
                {
                    result_id: 8,
                    image_id: 15
                },
                {
                    result_id: 8,
                    image_id: 16
                },
                {
                    result_id: 9,
                    image_id: 17
                },
                {
                    result_id: 9,
                    image_id: 18
                },
                {
                    result_id: 10,
                    image_id: 19
                },
                {
                    result_id: 10,
                    image_id: 20
                },
                {
                    result_id: 11,
                    image_id: 21
                },
                {
                    result_id: 11,
                    image_id: 22
                },
                {
                    result_id: 12,
                    image_id: 23
                },
                {
                    result_id: 12,
                    image_id: 24
                },
                {
                    result_id: 13,
                    image_id: 25
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
