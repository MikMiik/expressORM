"use strict";
const generatePosts = require("./helpers/generatePosts");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      `SELECT id FROM users;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    const userIds = users.map((user) => user.id);
    // SELECT	Truy vấn dữ liệu và trả về kết quả dạng array thuần { id: 1 }
    // INSERT	Trả về id mới thêm (nếu có)
    // UPDATE	Trả về số hàng bị ảnh hưởng
    // DELETE	Trả về số hàng đã xóa
    // RAW	Không xử lý gì, trả về mảng 2 phần tử: [results, metadata]
    try {
      console.log("Đang tạo dữ liệu posts...");
      const posts = await generatePosts(100, { userIds });
      console.log("Đã tạo xong dữ liệu posts!");
      await queryInterface.bulkInsert("posts", posts, {});
      console.log("Đã thêm dữ liệu posts vào bảng");
    } catch (error) {
      console.error("Lỗi khi tạo posts:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
