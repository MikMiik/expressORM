"use strict";
const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = await queryInterface.sequelize.query(
      `SELECT id FROM comments;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const commentIds = comments.map((comment) => comment.id);
    for (const id of commentIds) {
      const parentId = faker.datatype.boolean(0.5)
        ? faker.helpers.arrayElement(commentIds.filter((cid) => cid !== id))
        : null;

      await queryInterface.bulkUpdate("comments", { parentId }, { id });
      //   await queryInterface.bulkUpdate(
      //   tableName,       // string – tên bảng
      //   values,          // object – các cột cần cập nhật
      //   where,           // object – điều kiện WHERE
      //   options          // optional – các tùy chọn thêm
      // );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkUpdate("comments", { parentId: null });
  },
};
