export class ListView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
  }

  render(personList) {
    // HTML
    let htmlTable = '<tr><th>Name</th><th>Birthday</th><th></th></tr>';
    for (let i = 0; i < personList.length; i++) {
      const person = personList[i];
      const htmlTr = `<tr>
              <td>${person.name}</td>
              <td>${person.birthday}</td>
              <td><button class="buttonUpdate">Update</button></td>
              <td><button class="buttonDelete">Delete</button></td>
          </tr>`;
      htmlTable += htmlTr;
    }

    const html = `
        <h2>ListView</h2>
        <table>
            ${htmlTable}
        </table>
        <button id="buttonNew">New</button>
        `;

    this.app.innerHTML = html;

    // Controls
    const buttonsUpdate = document.getElementsByClassName('buttonUpdate');
    const buttonsDelete = document.getElementsByClassName('buttonDelete');
    const buttonNew = document.getElementById('buttonNew');

    // Events
    for (let i = 0; i < buttonsUpdate.length; i++) {
      buttonsUpdate[i].addEventListener('click', () => {
        this.presenter.buttonUpdateClicked(i);
      });
    }

    for (let i = 0; i < buttonsDelete.length; i++) {
      buttonsDelete[i].addEventListener('click', () => {
        this.presenter.buttonDeleteClicked(i);
      });
    }

    buttonNew.addEventListener('click', () => {
      this.presenter.buttonNewClicked();
    });
  }
}
