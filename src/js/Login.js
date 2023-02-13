import AbstractView from "./AbstractView.js";
// import "../css/Login.css";
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    return `
  <body>
    <div class="container">
<!--      <img class="login-logo" src="/src/public/images/medilogo.png" alt="logo"/>-->
      <h2>반갑습니다!</h2>
      <input placeholder="아이디를 입력해 주세요." />
      <input placeholder="비밀번호를 입력해 주세요." />
      <div class="auto-login">
        <input type="checkbox" />
        <div>자동 로그인</div>
      </div>
      <button class="login-button">로그인</button>
    </div>
  </body>
      `;
  }
}
