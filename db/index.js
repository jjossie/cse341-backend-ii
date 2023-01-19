require('dotenv').config();

const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI);

let _db;


const initDb = (callback) => {
  if (_db) {
    console.log('Database already initialized');
    return callback(null, _db);
  } else {
    client.connect()
      .then(client => {
        _db = client;
        callback(null, _db);
      })
      .catch(err => {
        callback(err);
      });
  }
};

const getDb = () => {
  if (_db)
    return _db;
  else
    throw Error('Database not initialized');
}

// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log('Databases:');
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

// async function mongo_connect() {
//   try {
//     await client.connect();
//
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

module.exports = { initDb, getDb };
