const { Collection, Profile, UserInfo } = require('../models');

const resolvers = {
  Query: {
    Collections: async () => {
      return await Collection.find({}).populate('UserInfo').populate('card_id');
    },
    Profile: async () => {
      return await Profile.find({}).populate('UserInfo_id').populate('collection_id').populate('deck_id');
    },
    UserInfo: async (parent, { UserInfo_id }) => {
      if (UserInfo_id) {
        return UserInfo.findById(UserInfo_id);
      }
        return UserInfo.find({});
    },
  },
  Mutation: {
    addCollection: async (parent, args) => {
      const collection = await Collection.create(args);
      return collection;
    },
    addCard: async (parent, { _id }) => {
      const userInfo = await UserInfo.findOneAndUpdate(
        { _id },
        { new: true }
      );
      return UserInfo;
    },
  },
};

module.exports = resolvers;
