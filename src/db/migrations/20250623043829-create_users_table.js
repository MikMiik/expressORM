"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,

      email: { type: Sequelize.STRING(191), allowNull: false, unique: true },

      password: {
        type: Sequelize.STRING,
      },

      role: {
        type: Sequelize.ENUM("Admin", "Viewer", "Moderator"),
        defaultValue: "Viewer",
      },

      username: Sequelize.STRING,

      birthday: Sequelize.DATE,

      avatar: Sequelize.STRING,

      status: Sequelize.STRING,

      phone: Sequelize.STRING,

      gender: Sequelize.ENUM("male", "female", "other"),

      relStatus: Sequelize.STRING,

      bio: Sequelize.TEXT,

      address: Sequelize.STRING,

      blockedAt: Sequelize.DATE,

      verifiedAt: Sequelize.DATE,

      deletedAt: Sequelize.DATE,

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
