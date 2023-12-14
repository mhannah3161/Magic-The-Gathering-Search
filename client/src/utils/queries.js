import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      _id
      username
      email
      password
    } 
  }`;

export const QUERY_COLLECTION = gql`
query getCollection($username: String!) {
    getCollection(username: $username) {
      username
      collections {
        collection_id
        collectionName
        collection_cards {
          card_name
          card_set
          card_type
          card_subtype
          card_mana
          card_rarity
          card_pt
          card_pic
          card_artist
        }
      }
    }
  }`;

export const QUERY_DECK = gql`
query getDeck($username: String!) {
    getDeck(username: $username) {
      username
      decks {
        deck_id
        deckName
        deck_cards {
          card_name
          card_set
          card_type
          card_subtype
          card_mana
          card_rarity
          card_pt
          card_pic
          card_artist
        }
      }
    }
  }`;