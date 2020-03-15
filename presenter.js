import { StartView } from './startview.js';
import { Model } from './model.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    const text = this.model.getText();

    this.view = new StartView(this);
    this.view.render(text);
  }
}
