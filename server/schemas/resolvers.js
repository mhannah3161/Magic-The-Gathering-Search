const { Collection, Profile, UserInfo, User } = require('../models');

const resolvers = {
    Query: {
        collections: async () => {
            return await Collection.find({}).populate('userInfo').populate('card_id');
        },
        profiles: async () => {
            return await Profile.find({}).populate('user_id').populate('collection_id').populate('deck_id');
        },
        userInfo: async (parent, { _id }) => {
            return await UserInfo.findById(_id).populate('user_id');
        },
        User: async () => {
            return await User.find({}).populate('username');
        },
    },
};