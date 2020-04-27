export class DetailView {
  constructor(presenter) {
    this.presenter = presenter;

    // HTML
    const html = `
        <h2>DetailView</h2>
        <fieldset>
          <legend>Name</legend>
            <input id="inputName" type="text">
        </fieldset>
        <fieldset>
          <legend>Birthday</legend>
            <input id="inputBirthday" type="date">
        </fieldset>
        <fieldset>
          <legend>T-Shirt-Größe</legend>
          <label for="radioS">S</label>
          <input id="radioS" type="radio" name="tshirt">

          <label for="radioM">M</label>
          <input id="radioM" type="radio" name="tshirt">

          <label for="radioL">L</label>
          <input id="radioL" type="radio" name="tshirt">

          <label for="radioXL">XL</label>
          <input id="radioXL" type="radio" name="tshirt">
        </fieldset>
        <button id="buttonSave">Save</button>
        <button id="buttonCancel">Cancel</button>
        `;
    const app = document.getElementById('app');
    app.innerHTML = html;

    // Controls
    this.inputName = document.getElementById('inputName');
    this.inputBirthday = document.getElementById('inputBirthday');
    this.radioS = document.getElementById('radioS');
    this.radioM = document.getElementById('radioM');
    this.radioL = document.getElementById('radioL');
    this.radioXL = document.getElementById('radioXL');


    // Events
    this._registerEvents();
  }

  _registerEvents() {
    const buttonSave = document.getElementById('buttonSave');
    buttonSave.addEventListener('click', () => {
      this.presenter.buttonSaveClicked();
    });

    const buttonCancel = document.getElementById('buttonCancel');
    buttonCancel.addEventListener('click', () => {
      this.presenter.buttonCancelClicked();
    });
  }

  // get values from controls
  getName() {
    return this.inputName.value;
  }

  getBirthday() {
    return this.inputBirthday.value;
  }

  getTshirt() {
    let tshirt;
    if (this.radioS.checked) {
      tshirt = 'S';
    } else if (this.radioM.checked) {
      tshirt = 'M';
    } else if (this.radioL.checked) {
      tshirt = 'L';
    } else {
      tshirt = 'XL';
    }

    return tshirt;
  }

  // set values to controls
  setName(name) {
    this.inputName.value = name;
  }

  setBirthday(birthday) {
    this.inputBirthday.value = birthday;
  }

  setTshirt(tshirt) {
    switch (tshirt) {
      case 'S':
        this.radioS.checked = true;
        break;
      case 'M':
        this.radioM.checked = true;
        break;
      case 'L':
        this.radioL.checked = true;
        break;
      case 'XL':
        this.radioXL.checked = true;
        break;
    }
  }
}
