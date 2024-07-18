
import { createFakeContact } from '../utils/createFakeContact.js';
import {
  readContactsFromFile,
    writeContactsToFile,
} from '../utils/fileOperations.js';


export const addOneContact = async () => {
  const contacts = await readContactsFromFile();
  const newContacts = Array.from({ length: 1 }, () => createFakeContact());
  const updatedContacts = contacts.concat(newContacts);
  await  writeContactsToFile( updatedContacts);
};

addOneContact();
