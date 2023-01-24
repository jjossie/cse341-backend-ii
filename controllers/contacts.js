const {
  getCollection,
  ObjectId
} = require('../db');

async function getAllContacts() {
  return getCollection().find().toArray();
}

async function getContactById(contactId) {
  const objId = new ObjectId(contactId);
  return getCollection().findOne({
    _id: objId
  });
}

async function createContact(contact) {
  if (!(contact.firstName &&
    contact.lastName &&
    contact.email &&
    contact.favoriteColor &&
    contact.birthday)) {
    throw Error('Missing required contact info.');
  }
  const result = await getCollection().insertOne(contact);
  return result.insertedId;
}

async function updateContact(contactId, newContact) {
  const objId = new ObjectId(contactId);
  const filter = {_id: objId};
  // Replace the document (no special replace operator needed)
  await getCollection().replaceOne(filter, newContact);
}

async function deleteContact(contactId) {
  const objId = new ObjectId(contactId);
  return getCollection().deleteOne({
    _id: objId
  });
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};