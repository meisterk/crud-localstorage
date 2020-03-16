import { Person } from './person.js';

export class Model {
  constructor() {
    this.personen = [];
    this.personen.push(new Person());
    this.personen.push(new Person());
    this.personen.push(new Person());
  }

  // CRUD-Methoden
  // CREATE
  createPerson(person) {
    this.personen.push(person);
  }

  // READ
  readAllPersons() {
    return this.personen;
  }

  getText() {
    return 'Hello from Model!';
  }

  // UPDATE

  // DELETE
}
