
const {MongoClient} = require('mongodb');
require('dotenv');

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function mongo_connect(){
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }

}

module.exports = { mongo_connect };