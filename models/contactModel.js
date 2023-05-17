const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'Please Add the Contact Name'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Please Add the Contact Email Address'],
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
      required: [true, 'Please Add the Contact Phone Number'],
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);
