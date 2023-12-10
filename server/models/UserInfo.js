const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const isPassword = (value) => {
  return /^[a-zA-Z0-9]+$/.test(value) && value.length >= 5;
};

const userInfoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 5,
      match: /^[a-zA-Z0-9]+$/, 
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return /\S+@\S+\.\S+/.test(value); 
        },
        message: 'Invalid email address',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      validate: {
        validator: isPassword,
        message: 'Password must contain at least 5 alphanumeric characters',
      },
    },
  },
  {
    timestamps: true,
  }
);

userInfoSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

module.exports = UserInfo;
