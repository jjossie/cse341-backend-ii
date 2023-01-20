require('dotenv').config();

const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Database already initialized');
    return callback(null, _db);
  } else {
    client
      .connect()
      .then((client) => {
        _db = client;
        callback(null, _db);
      })
      .catch((err) => {
        callback(err);
      });
  }
};

const getDb = () => {
  if (_db) return _db;
  else throw Error('Database not initialized');
};

module.exports = { initDb, getDb, ObjectId };
