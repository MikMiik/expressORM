"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("posts", "publishedAt", {
      type: Sequelize.DATE,
      after: "createdAt",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("posts", "publishedAt");
  },
};
