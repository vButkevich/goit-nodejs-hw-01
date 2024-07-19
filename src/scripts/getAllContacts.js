import {
    readContactsFromFile,
} from '../utils/fileOperations.js';

export const getAllContacts = async () => {
    return await readContactsFromFile();
};

console.log(await getAllContacts());
