const typeDefs = `
  type Collection {
    _id: ID
    username: String
    card_id: Int
  }

  type Profile {
    user_id: ID
    username: String
    collection_id: Int
    deck_id: Int
  }

  type UserInfo {
    _id: ID
    username: String
    email: string
    password: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }
`;

module.exports = typeDefs;
