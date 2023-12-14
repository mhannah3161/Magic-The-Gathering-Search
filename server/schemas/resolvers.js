const { Collection, Deck, User, CardInfo } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUserByUsername: async (parent, { username }) => {
      try {
        // Find the user by username and populate collections and decks
        const user = await User.findOne({ username })
          .populate({
            path: 'collections',
            populate: { path: 'collection_cards' }
          })
          .populate({
            path: 'decks',
            populate: { path: 'deck_cards' }
          });

        if (!user) {
          throw new AuthenticationError('No user found with this username');
        }

        return user;
      } catch (error) {
        throw new Error(`Error getting user by username: ${error.message}`);
      }
    },
    getCollection: async (parent, { username }) => {
      try {
        // Find the user by username and populate collections
        const user = await User.findOne({ username })
          .populate({
            path: 'collections',
            populate: { path: 'collection_cards' }
          });

        if (!user) {
          throw new AuthenticationError('No user found with this username');
        }

        return user.collections;
      } catch (error) {
        throw new Error(`Error getting collection: ${error.message}`);
      }
    }
  },
    Mutation: {
      createCollection: async (parent, { username, collectionName }) => {
        try {
          // Create a new Collection
          const collection = new Collection({ username, collectionName });

          // Save the Collection to the database
          await collection.save();

          // Push the Collection to the User's collections array
          await User.findOneAndUpdate(
            { username },
            { $push: { collections: collection._id } },
            { new: true }
          );

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
      login: async (parent, { username, password }) => {
        try {
          // Find the user by username
          const user = await User.findOne({ username });

          // If the user is not found or the password is incorrect, throw AuthenticationError
          if (!user || user.password !== password) {
            throw AuthenticationError;
          }

          // Generate and return a JWT token
          const token = signToken(user);
          return { token };
        } catch (error) {
          throw new Error(`Error during login: ${error.message}`);
        }
      },
    },
  };

  module.exports = resolvers;