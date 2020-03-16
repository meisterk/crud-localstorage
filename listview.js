export class ListView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
    console.log('ListView');
  }

  render(personen) {
    // Liste aller Personen
    let html = `
      <h2>Liste aller Personen</h2>
      <ul>`;
    let index = 0;
    personen.forEach(person => {
      const zeile = `<li>${person.vorname} 
      ${person.nachname}, Geb: 
      ${person.geburtsdatum} 
      <button id="buttonDelete${index}">X</button></li>`;
      html = html + zeile;
      index++;
    });

    // Button "Neu"
    html =
      html +
      `</ul>
    <button id="buttonNew">Neue Person</button>`;

    this.app.innerHTML = html;

    // Eventhandler
    const buttonNew = document.getElementById('buttonNew');
    buttonNew.addEventListener('click', () => {
      this.presenter.buttonNewClicked();
    });

    for (let i = 0; i < personen.length; i++) {
      const buttonId = `buttonDelete${i}`;
      const button = document.getElementById(buttonId);
      button.addEventListener('click', () => {
        this.presenter.buttonDeleteClicked(i);
      });
    }
  }
}
