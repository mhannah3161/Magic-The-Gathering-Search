const { Collection, Deck, User, CardInfo } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    getUserById: async (parent, { _id }) => {
      try {
        // Find a user by _id
        const user = await User.find({ _id })
          .populate('collections')
          .populate('decks');

        // Return the user
        return user;
      } catch (error) {
        throw new Error(`Error fetching user by id: ${error.message}`);
      }
    },
  },
  Mutation: {
    createCollection: async (parent, { _id, collectionName }) => {
      try {
        // Create a new Collection
        const collection = new Collection({ _id, collectionName });

        // Save the Collection to the database
        await collection.save();

        // Return the Collection
        return collection;
      } catch (error) {
        throw new Error(`Error creating collection: ${error.message}`);
      }
    },
    addCardToCollection: async (parent, { collectionId, card }) => {
      try {
        // Find the Collection by collectionId
        const collection = await Collection.findById(collectionId);

        // Push the card to the Collection
        collection.collection_cards.push(card);

        // Save the Collection
        await collection.save();

        // Return the Collection
        return collection;
      } catch (error) {
        throw new Error(`Error adding card to collection: ${error.message}`);
      }
    },
    createDeck: async (parent, { _id, deckName }) => {
      try {
        // Create a new Deck
        const deck = new Deck({ _id, deckName });

        // Save the Deck to the database
        await deck.save();

        // Return the Deck
        return deck;
      } catch (error) {
        throw new Error(`Error creating deck: ${error.message}`);
      }
    },
    addCardToDeck: async (parent, { deckId, card }) => {
      try {
        // Find the Deck by deckId
        const deck = await Deck.findById(deckId);

        // Push the card to the Deck
        deck.deck_cards.push(card);

        // Save the Deck
        await deck.save();

        // Return the Deck
        return deck;
      } catch (error) {
        throw new Error(`Error adding card to deck: ${error.message}`);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    // Similar logic can be applied for creating a deck and adding cards to a deck
  },
};

module.exports = resolvers;