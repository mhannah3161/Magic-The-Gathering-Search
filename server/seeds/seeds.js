const mongoose = require('mongoose');
const UserInfo = require('../../server/models/Profile'); 
const Collection = require('../../server/models/Collections');

const users = [
    {
        _id: 1,
        username: "Jimmy",
        email: "ABC123",
        password: "Timmy123"
    },
    {
        _id: 2,
        username: "Stan",
        email: "XYZ123",
        password: "Kyle123"
    },
    {
        _id: 3,
        username: "Kenny",
        email: "Kenny@kenny.com",
        password: "Kenny123"
    },
    {
        _id: 4,
        username: "Cartman",
        email: "Cartman@Cartman.com",
        password: "Cartman123"
    },
    {
        _id: 5,
        username: "Butters",
        email: "Butters@butters.com",
        password: "Butters123"
    }
];

const cards = [
    {
        card_name: 'Lightning Bolt',
        card_type: 'Instant',
        card_subtype: '',
        card_mana: '1',
        card_rarity: 'Common',
        card_pt: '',
        card_pic: './seedIMG/Lightning_Bolt.jpg',
        card_artist: 'Christopher Rush',
        card_cost: '0.01',
    },
    {
        card_name: 'Dark Confidant',
        card_type: 'Creature',
        card_subtype: 'Human Wizard',
        card_mana: '2',
        card_rarity: 'Rare',
        card_pt: '2/1',
        card_pic: './seedIMG/Dark_Confidant.jpg',
        card_artist: 'Ron Spears',
        card_cost: '29.99',
    },
    {
        card_name: 'Silverback Elder',
        card_set: 'Dominaria United',
        card_type: 'Creature',
        card_subtype: 'Ape Shaman',
        card_mana: '5',
        card_rarity: 'Mythic Rare',
        card_pt: '5/7',
        card_pic: './seedIMG/SB_Elder.jpg',
        card_artist: 'Alexander Mokhov',
        card_cost: '2.99',
    },
];

const seedDatabase = async () => {
  try {
    // Clear existing data
    await UserInfo.deleteMany({});
    await Collection.deleteMany({});
    await Profile.deleteMany({});

    // Seed users
    const seededUsers = await UserInfo.create(users);

    // Seed collections (assuming you have a Collection model)
    const seededCollections = await Collection.create(cards);

    // Seed profiles
    const seededProfiles = await Profile.create([
      {
        UserInfo_id: seededUsers[0]._id, // Assuming UserInfo_id is related to a user
        deck_id: mongoose.Types.ObjectId(), // Auto-generate ObjectId
        collection_id: seededCollections[0]._id, // Assuming collection_id is related to a collection
      },
      // ... other profiles
    ]);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the MongoDB connection when seeding is complete
    mongoose.connection.close();
  }
};

// Call the seeding function
seedDatabase();