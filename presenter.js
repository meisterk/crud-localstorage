import { ListView } from './listview.js';
import { InputView } from './inputview.js';
import { Model } from './model.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    const personen = this.model.readAllPersons();

    this.view = new ListView(this);
    this.view.render(personen);
  }

  buttonNewClicked() {
    this.view = new InputView(this);
    this.view.render();
  }

  buttonSaveClicked() {
    console.log('Button Save');
  }

  buttonCancelClicked() {
    this.view = new ListView(this);
    this.view.render(personen);
  }

  buttonDeleteClicked(index) {
    console.log(index);
  }
}
