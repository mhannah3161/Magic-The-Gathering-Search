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
    email: String
    password: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Card {
    _id: ID
    card_name: String
    card_set: String
    card_type: String
    card_subtype: String
    card_mana: String
    card_rarity: String
    card_pt: String
    card_pic: String
    card_artist: String
  }

  type Deck {
    _id: ID
    user_id: ID
    card_id: Int
  }

  type Query {
    Collections: [Collection]
    Profile: Profile
    User(id: ID): User
    UserInfo(id: ID): UserInfo 
  }

  type Mutation {
    addUser(username: String, email: String): User
    addCollection(user_id: ID, card_id: Int): Collection
    addCard(card_name: String, card_set: String, card_type: String, card_subtype: String, card_mana: String, card_rarity: String, card_pt: String, card_pic: String, card_artist: String): Card
    addDeck(user_id: ID, card_id: Int): Deck
  }
`;

module.exports = typeDefs;
