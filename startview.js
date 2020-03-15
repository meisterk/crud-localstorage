export class StartView {
  constructor(presenter) {
    this.presenter = presenter;
    this.app = document.getElementById('app');
    console.log('StartView');
  }

  render(text) {
    const html = `<p>${text}</p>`;
    this.app.innerHTML = html;
  }
}
