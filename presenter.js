import { Person } from './person.js';
import { ListView } from './listview.js';
import { Model } from './model.js';
import { CreateUpdateView } from './createupdateview.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    const personList = this.model.getAllPersons();

    this.view = new ListView(this);
    this.view.render(personList);
  }

  buttonUpdateClicked(index) {
    const person = this.model.getPerson(index);
    this.view = new CreateUpdateView(this);
    this.view.render(index, person);
  }

  buttonDeleteClicked(index) {
    this.model.deletePerson(index);
    const personList = this.model.getAllPersons();
    this.view = new ListView(this);
    this.view.render(personList);
  }

  buttonNewClicked() {
    const newPerson = new Person('Please insert name', '1999-12-24');
    this.view = new CreateUpdateView(this);
    this.view.render(-1, newPerson);
  }

  buttonSaveClicked(index) {
    const newName = this.view.getName();
    const newBirthday = this.view.getBirthday();
    const newPerson = new Person(newName, newBirthday);

    if (index < 0) {
      // create new person
      this.model.addPerson(newPerson);
    } else {
      // update person
      this.model.updatePerson(index, newPerson);
    }

    const personList = this.model.getAllPersons();
    this.view = new ListView(this);
    this.view.render(personList);
  }

  buttonCancelClicked() {
    const personList = this.model.getAllPersons();

    this.view = new ListView(this);
    this.view.render(personList);
  }
}
