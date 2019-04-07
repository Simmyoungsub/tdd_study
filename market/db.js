import { MongoClient } from 'mongodb';

export class CustomConnection {
    static async init() {
        this._connection = await MongoClient.connect('mongodb://192.168.122.128:27017');
        this._db = await connection.db('market');
    }

    static getConnection() {
        return this._db;
    }

    static async close() {
        this._db = null;
        await this._connection.close();
    }
}

CustomConnection.init();
