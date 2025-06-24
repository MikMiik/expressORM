const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const generator = require("generate-password");
const generateUniqueSlug = require("./generateUniqueSlug");

// Cấu hình faker cho tiếng Việt (tùy chọn)
faker.locale = "vi";

// Hàm tạo slug từ tên
function createUsernameSlug(name, slugs) {
  return generateUniqueSlug(name, slugs);
}

// Hàm hash password
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Hàm tạo dữ liệu user giả
async function generateUsers(count = 100) {
  const users = [];
  const slugs = new Set();
  const usedEmails = new Set();
  const usedPhones = new Set();

  const relStatus = [
    "Single",
    "In a relationship",
    "Engaged",
    "Married",
    "Divorced",
    "Widowed",
    "It's complicated",
  ];

  for (let i = 0; i < count; i++) {
    let email, phone;
    const name = faker.person.fullName();
    // Đảm bảo email unique
    do {
      email = faker.internet.email();
    } while (usedEmails.has(email));
    usedEmails.add(email);

    // Đảm bảo phone unique
    do {
      phone = faker.phone.number("#### ### ###");
    } while (usedPhones.has(phone));
    usedPhones.add(phone);

    const user = {
      name,
      email,
      password: await hashPassword(
        generator.generate({
          length: 10,
          numbers: true,
        })
      ),
      role: faker.helpers.arrayElement(["Admin", "Viewer", "Moderator"]),
      username: createUsernameSlug(name, slugs),
      birthday: faker.date.birthdate({ min: 18, max: 80, mode: "age" }),
      avatar: `https://i.pravatar.cc/150?u=${email}`,
      status: faker.helpers.arrayElement(["Active", "Inactive", "Pending"]),
      phone,
      gender: faker.helpers.arrayElement(["male", "female", "other"]),
      relStatus: faker.helpers.arrayElement(relStatus),
      bio: faker.lorem.sentences(3, " "),
      address: faker.location.streetAddress(true),
      blockedAt: faker.datatype.boolean(0.1) ? faker.date.recent() : null, // 10% chance bị block
      createdAt: faker.date.between({
        from: "2022-01-01T00:00:00.000Z",
        to: "2025-06-14T00:00:00.000Z",
      }),
      verifiedAt: faker.datatype.boolean(0.8) ? faker.date.recent() : null, // 80% chance được verify
      updatedAt: faker.date.recent(),
    };

    users.push(user);
  }
  return users;
}

module.exports = generateUsers;
