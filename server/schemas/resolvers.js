const { Collection, Profile, UserInfo, CardInfo } = require('../models');

const resolvers = {
  Query: {
    Collections: async () => {
      return await Collection.findById({}).populate('card_id');
    },
    Profile: async () => {
      return await Profile.find({}).populate('UserInfo_id').populate('collection_id').populate('deck_id');
    },
    UserInfo: async (parent, { _id }) => {
      if (_id) {
        return UserInfo.findById();
      }
        return UserInfo.find({});
    },
    CardInfo: async () => {
      return await CardInfo.find({});
    },
  },
  Mutation: {
    addCollection: async (parent, args) => {
      const collection = await Collection.create(args);
      const profile = await Profile.findOneAndUpdate(
        { _id: args.UserInfo_id },
        { $addToSet: { collection_id: collection._id } },
        { new: true }
      )
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
