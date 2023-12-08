const { Collection, Profile, UserInfo, User } = require('../models');

const resolvers = {
    Query: {
        Collections: async () => {
            return await Collection.find({}).populate('UserInfo').populate('card_id');
        },
        Profile: async () => {
            return await Profile.find({}).populate('UserInfo_id').populate('collection_id').populate('deck_id');
        },
        UserInfo: async (parent, { _id }) => {
            return await UserInfo.findById(_id).populate('UserInfo_id');
        },
    },
};

module.exports = resolvers;