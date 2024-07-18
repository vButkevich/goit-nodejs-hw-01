import fs from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const readContactsFromFile = () => {
  const data = fs.readFileSync(PATH_DB, 'utf8');
  return JSON.parse(data);
};

export const writeContactsToFile = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
};
