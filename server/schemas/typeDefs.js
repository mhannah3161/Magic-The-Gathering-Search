const typeDefs = `
  type CardInfo {
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

  type Collection {
    collection_id: ID
    collectionName: String
    collection_cards: [CardInfo]
  }

  type Deck {
    deck_id: ID
    deckName: String
    deck_cards: [CardInfo]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    collections: [Collection]
    decks: [Deck]
  }

  input CardInput {
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

  type Query {
    getUserById(_id: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createCollection(_id: ID!, collectionName: String!): Collection
    addCardToCollection(collectionId: ID!, card: CardInput): CardInfo
    createDeck(_id: ID!, deckName: String!): Deck
    addCardToDeck(deckId: ID!, card: CardInput): CardInfo
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;