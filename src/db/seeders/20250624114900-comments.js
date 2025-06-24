"use strict";

const generateComments = require("./helpers/generateComments");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const posts = await queryInterface.sequelize.query(
      `SELECT id FROM posts;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const userIds = users.map((user) => user.id);
    const postIds = posts.map((post) => post.id);
    // SELECT	Truy vấn dữ liệu và trả về kết quả dạng array thuần { id: 1 }
    // INSERT	Trả về id mới thêm (nếu có)
    // UPDATE	Trả về số hàng bị ảnh hưởng
    // DELETE	Trả về số hàng đã xóa
    // RAW	Không xử lý gì, trả về mảng 2 phần tử: [results, metadata]
    try {
      console.log("Đang tạo dữ liệu comments...");
      const comments = await generateComments(100, { userIds, postIds });
      console.log("Đã tạo xong dữ liệu comments!");
      await queryInterface.bulkInsert("comments", comments, {});
      console.log("Đã thêm dữ liệu comments vào bảng");
    } catch (error) {
      console.error("Lỗi khi tạo comments:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
