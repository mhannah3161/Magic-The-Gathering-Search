const typeDefs = `
  type Collection {
    _id: ID
    username: String
    card_id: Int
  }

  type Profile {
    UserInfo_id: ID
    username: String
    collection_id: Int
    deck_id: Int
  }

  type UserInfo {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    Collections: [Collection]
    Profile: Profile
    UserInfo(UserInfo_id: ID): UserInfo
  }

  type Mutation {
    addCollection(username: String, card_id: Int): Collection
    addCard(_id: ID): UserInfo
  }
`;

module.exports = typeDefs;
