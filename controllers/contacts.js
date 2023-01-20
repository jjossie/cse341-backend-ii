const {
  getDb,
  ObjectId
} = require('../db');

async function getAllContacts() {
  return getDb().db('contacts-cse341').collection('contacts').find().toArray();
}

async function getContactById(contactId) {
  const objId = new ObjectId(contactId);
  return getDb().db('contacts-cse341').collection('contacts').findOne({
    _id: objId
  });
}

module.exports = {
  getAllContacts,
  getContactById
};