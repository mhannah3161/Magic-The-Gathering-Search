const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const isPassword = (value) => {
  return /^[a-zA-Z0-9]+$/.test(value) && value.length >= 5;
};

const cardInfoSchema = new mongoose.Schema({
  card_name: {
    type: String,
    required: true,
  },
  card_set: {
    type: String,
    required: true,
  },
  card_type: {
    type: String,
    required: true,
  },
  card_subtype: {
    type: String,
  },
  card_mana: {
    type: String,
    required: true,
  },
  card_rarity: {
    type: String,
    required: true,
  },
  card_pt: {
    type: String,
  },
  card_pic: {
    type: String,
    required: true,
  },
  card_artist: {
    type: String,
    required: true,
  }
});

const collectionSchema = new mongoose.Schema({
  collection_name: String,
  collection_cards: [cardInfoSchema],
});

const deckSchema = new mongoose.Schema({
  deck_id: mongoose.Schema.Types.ObjectId,
  deck_name: String,
  deck_cards: [cardInfoSchema],
});


const userSchema = new mongoose.Schema(
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
      }
    },
    collections: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Collection',
    }],
    decks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Deck',
    }],
    timestamp: {
      type: Date,
      default: Date.now,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
