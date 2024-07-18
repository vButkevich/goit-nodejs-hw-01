
import { createFakeContact } from '../utils/createFakeContact.js';

import {
  readContactsFromFile,
    writeContactsToFile,
} from '../utils/fileOperations.js';


const generateContacts = async (number) => {
  const contacts = await readContactsFromFile();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = contacts.concat(newContacts);
  await writeContactsToFile(updatedContacts);
};

generateContacts(5);
