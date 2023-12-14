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
    _id: ID
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
    getUserByUsername(username: String!): User
    getCollection(username: String!): [Collection]
    getDeck(username: String!): [Deck]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    createCollection(username: String! collectionName: String!): Collection
    addCardToCollection(collectionId: ID!, card: CardInput): CardInfo
    createDeck(_id: ID!, deckName: String!): Deck
    addCardToDeck(deckId: ID!, card: CardInput): CardInfo
    login(username: String!, password: String!): TokenResponse
  }

  type TokenResponse {
    token: String
  }
`;

module.exports = typeDefs;