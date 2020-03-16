export class InputView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
    console.log('InputView');
  }

  render() {
    let html = `
  <h2>Neue Person erstellen</h2>
  <fieldset>
    <legend>Vorname</legend>
    <input id="inputVorname" type="text"></input>
  </fieldset>
  <fieldset>
    <legend>Nachname</legend>
    <input id="inputNachname" type="text"></input>
  </fieldset>
  <fieldset>
    <legend>Geburtsdatum</legend>
    <input id="inputGeburtsdatum" type="date"></input>
  </fieldset>
  <button id="buttonSave">Speichern</button>
  <button id="buttonCancel">Abbrechen</button>`;
    this.app.innerHTML = html;
    // Eventhandler
  }
}
