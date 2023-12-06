onst { Collection, Profile, UserInfo, User } = require('../models');

const resolvers = {
    Query: {
        Collections: async () => {
            return await Collection.find({}).populate('UserInfo').populate('card_id');
        },
        Profile: async () => {
            return await Profile.find({}).populate('user_id').populate('collection_id').populate('deck_id');
        },
        UserInfo: async (parent, { _id }) => {
            return await UserInfo.findById(_id).populate('user_id');
        },
        User: async () => {
            return await User.find({}).populate('username');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email }) => {
          // Create and return the new School object
          return await School.create({ username, email });
        },
        addCollection: async (parent, { user_id, card_id }) => {
            // Create and return the new School object
            return await School.create({ user_id, card_id });
        },
        addCard: async (parent, { card_name, card_set, card_type, card_subtype, card_mana, card_rarity, card_pt, card_pic, card_artist }) => {
            // Create and return the new School object
            return await School.create({ card_name, card_set, card_type, card_subtype, card_mana, card_rarity, card_pt, card_pic, card_artist  });
        },
        addDeck: async (parent, { user_id, card_id }) => {
            // Create and return the new School object
            return await School.create({ user_id, card_id });
        },
      },
};

module.exports = resolvers;