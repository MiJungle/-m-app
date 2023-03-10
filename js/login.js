import "../css/login.css";
import "../img/medilogo.png";

window.sendLoginInfo = () => {
  const email = $(".login-email").val();
  const pwd = $(".login-pwd").val();
  const loginInfo = { email: email, password: pwd };
  console.log("email", email);
  console.log("password", pwd);
  try {
    window.webkit.messageHandlers.login.postMessage(loginInfo);
  } catch (err) {
    console.log("error");
  }
};
window.getLoginInfo = (jsonData) => {
  console.log("함수가 호출되었습니다.");
  const status = JSON.parse(jsonData);
  let userStatus = status["statusCode"];
  confirm(userStatus);
  if (userStatus == "200") {
    console.log("status 200 dp 이동");
    location.href = "../template/dp.html";
  }
  console.log("statusCode", userStatus);
};

window.goToLoginList = () => {
  console.log("goToLoginList 호출되었습니다.");
  try {
    window.webkit.messageHandlers.goToLoginList.postMessage("abc");
  } catch (err) {
    console.log("error");
  }
};
