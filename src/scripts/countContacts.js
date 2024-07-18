import {
  readContactsFromFile,
} from '../utils/fileOperations.js';

export const countContacts = async () => {
  const contacts = await readContactsFromFile();
  return contacts.length;
};

console.log(await countContacts());

