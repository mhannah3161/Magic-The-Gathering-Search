import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      }
  }`;

export const ADD_CARD = gql`
mutation saveCard($card: CardInput!) {
    saveCard(card: $card) {
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
  }`;

export const REMOVE_CARD = gql`
mutation removeCard($card_name: String!) {
    removeCard(card_name: $card_name) {
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
  }`;

export const ADD_COLLECTION = gql`
mutation createCollection($collectionName: String!) {
    createCollection(collectionName: $collectionName) {
      collectionName
      }
  }`;

export const ADD_DECK = gql`
mutation createDeck($deckName: String!) {
    createDeck(deckName: $deckName) {
      deckName
      }
  }`;

  export const ADD_USER = gql`
  mutation createUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      username
      password
      email
    }
  }`;

