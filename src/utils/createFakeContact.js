import { faker } from '@faker-js/faker';

export const createFakeContact = () => ({
  // id: faker.datatype.uuid(),
  // [@faker-js/faker]: faker.datatype.uuid() is deprecated since v8.0 and will be removed in v9.0. Please use faker.string.uuid() instead.
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
