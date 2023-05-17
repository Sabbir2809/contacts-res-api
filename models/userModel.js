const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Please add the username'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Please add the email Address'],
      unique: [true, 'Email Address already token'],
    },
    password: {
      type: String,
      required: [true, 'Please add the password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
