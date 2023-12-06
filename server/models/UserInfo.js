const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const isPassword = (value) => {
  return /^[a-zA-Z0-9]+$/.test(value) && value.length >= 6;
};

const userInfoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        ispassword: isPassword,
        is: /^[0-9a-zA-Z_@./#&+!-]*$/i,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
  }
);

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
