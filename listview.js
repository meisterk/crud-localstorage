export class ListView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
    console.log('ListView');
  }

  render(personen) {
    const vorname = personen[0].vorname;
    const html = `
      <h2>Liste aller Personen</h2>
      <ul>
        <li>Vorname: ${vorname} ...</li>
      </ul>
      `;
    this.app.innerHTML = html;
  }
}
