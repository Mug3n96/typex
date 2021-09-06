import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <article class="game">
        <header id="game_head">WPM: 90</header>
        <main id="game_main">
          <p id="placeholder">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
        </main>
        <footer id="game_footer">
          <div id="game_diagramm" class="game-diagramm"></div>
          <div class="game-footer-text__group">
            <p>Words Typed: <span id="game_words_typed">100</span></p>
            <p>Failures: <span id="game_failures">10</span></p>
          </div>
        </footer>
      </article>
    `;
  }
}
