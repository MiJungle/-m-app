import AbstractView from "./AbstractView.js";
// import "../css/login.css";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Login");
  }

  async getHtml() {
    return `
    <div class="login">
    <div class="container">
      <img class="login-logo" src="/img/medilogo.png" alt="logo"/>
      <h2 class="login-text">반갑습니다!</h2>
      <input class="login-email" placeholder="아이디를 입력해 주세요." />
      <input class="login-pwd" placeholder="비밀번호를 입력해 주세요." />
      <div class="auto-login">
        <input type="checkbox" />
        <div>자동 로그인</div>
      </div>
      <button class="login-button" onclick="sendLoginInfo()">로그인</button>
    </div>
    </div>
      `;
  }
}
