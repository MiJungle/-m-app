import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
        <h1>Recent Posts</h1>
        <p>
            아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말아무말
        </p>
        <p>
           궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁궁시렁
        </p>
      `;
  }
}
