const { ObjectId } = require('mongodb');

class Podcast {
    constructor(db) {
        this.collection = db.collection('podcasts');
    }

    async create(podcastData) {
        return await this.collection.insertOne(podcastData);
    }

    async findById(id) {
        return await this.collection.findOne({ _id: ObjectId(id) });
    }

    // Add other CRUD methods as needed
}

module.exports = Podcast;