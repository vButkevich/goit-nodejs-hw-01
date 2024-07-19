
import { readContactsFromFile ,writeContactsToFile} from '../utils/fileOperations.js';

export const removeLastContact = async () => {
  const contacts = readContactsFromFile();

  if (contacts.length === 0) {
    console.log('Nothing to remove.');
    return;
  }
  contacts.pop();
  writeContactsToFile(contacts);
  console.log('Last contact has been removed.');
};

removeLastContact();
