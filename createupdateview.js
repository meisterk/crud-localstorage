export class CreateUpdateView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
  }

  render(index, person) {
    // HTML
    const html = `
        <h2>CreateUpdateView</h2>
        <fieldset>
          <legend>Name</legend>
            <input id="inputName" type="text"></input>
        </fieldset>
        <fieldset>
          <legend>Birthday</legend>
            <input id="inputBirthday" type="date"></input>
        </fieldset>
        <button id="buttonSave">Save</button>
        <button id="buttonCancel">Cancel</button>
        `;

    this.app.innerHTML = html;

    // Controls
    this.inputName = document.getElementById('inputName');
    this.inputBirthday = document.getElementById('inputBirthday');
    const buttonSave = document.getElementById('buttonSave');
    const buttonCancel = document.getElementById('buttonCancel');

    // Values
    this.inputName.value = person.name;
    this.inputBirthday.value = person.birthday;

    // Events
    buttonSave.addEventListener('click', () => {
      this.presenter.buttonSaveClicked(index);
    });

    buttonCancel.addEventListener('click', () => {
      this.presenter.buttonCancelClicked();
    });
  }

  getName() {
    return this.inputName.value;
  }

  getBirthday() {
    return this.inputBirthday.value;
  }
}
