import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "random@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Jane Doe",
    email: "ahsaan@example.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
