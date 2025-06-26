"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("posts", "topic", {
      type: Sequelize.STRING,
      after: "slug",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("posts", "topic");
  },
};
