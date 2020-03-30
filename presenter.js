import { Person } from './person.js';
import { ListView } from './listview.js';
import { Model } from './model.js';
import { CreateUpdateView } from './createupdateview.js';

export class Presenter {
  //------ S T A R T -------------
  constructor() {
    this.model = new Model();
    this._showListView();
  }

  _showListView() {
    const personList = this.model.getAllPersons();
    this.view = new ListView(this, personList);
  }

  //------ from ListView ----------
  buttonUpdateClicked(index) {
    const person = this.model.getPerson(index);
    this.view = new CreateUpdateView(this, index, person);
  }

  buttonNewClicked() {
    const person = new Person('Please insert name', '1999-12-24');
    this.view = new CreateUpdateView(this, -1, person);
  }

  buttonDeleteClicked(index) {
    this.model.deletePerson(index);
    this._showListView();
  }

  //------ from CreateUpdateView ------------
  buttonSaveClicked(index) {
    // read data from CreateUpdateView
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

    this._showListView();
  }

  buttonCancelClicked() {
    this._showListView();
  }
}
