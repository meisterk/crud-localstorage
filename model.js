export class Model {
  constructor() {
    this.personList = [
      { name: 'Anna Arm', birthday: '2001-12-24' },
      { name: 'Berta Bein', birthday: '1993-07-12' },
      { name: 'Carla Copf', birthday: '1980-03-07' }
    ];
  }

  // CREATE
  addPerson(person) {
    this.personList.push(person);
  }

  // READ
  getAllPersons() {
    return this.personList;
  }

  getPerson(index) {
    return this.personList[index];
  }

  // UPDATE
  updatePerson(index, newPerson) {
    this.personList[index] = newPerson;
  }

  // DELETE
  deletePerson(index) {
    this.personList.splice(index, 1);
  }
}
