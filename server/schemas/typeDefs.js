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

  type CardInfo {
    card_name: String
    card_type: String
    card_subtype: String
    card_mana: String
    card_rarity: String
    card_pt: String
    card_pic: String
    card_artist: String
    card_cost: String
  }

  type UserInfo {
    UserInfo_id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    Collections: [Collection]
    Profile: Profile
    UserInfo: [UserInfo]
    CardInfo: [CardInfo]
  }

  type Mutation {
    addCollection(username: String, card_id: Int): Collection
    addCard(_id: ID): UserInfo
  }
`;

module.exports = typeDefs;
