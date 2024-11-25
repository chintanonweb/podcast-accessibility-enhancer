const { MongoClient } = require('mongodb');

const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri);

module.exports = {
    connect: async () => {
        try {
            await client.connect();
            console.log("Connected to MongoDB");
            return client.db('podcastDB');
        } catch (err) {
            console.error("Failed to connect to MongoDB", err);
            throw err;
        }
    }
};