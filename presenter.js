import { ListView } from './listview.js';
import { Model } from './model.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    const personen = this.model.readAllPersons();

    this.view = new ListView(this);
    this.view.render(personen);
  }
}
