const mongoDB = require('../db');

async function getAllContacts() {
  return mongoDB.getDb()
    .db('contacts-cse341')
    .collection('contacts')
    .find()
    .toArray();
}

async function getContactById(id) {
  return mongoDB
    .getDb()
    .db('contacts-cse341')
    .collection('contacts')
    .find({
      _id: id
    })
    .toArray();
}

module.exports = { getAllContacts, getContactById };
