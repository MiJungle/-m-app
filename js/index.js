// import Landing from "./Landing.js";
// import Login from "./Login.js";
// import DetailPage from "./DetailPage.js";
// import SearchResult from "./SearchResult.js";
// const pathToRegex = (path) =>
//   new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
// function sendLoginInfo() {
//   const email = $(".login-email").val();
//   const pwd = $(".login-pwd").val();
//   const loginInfo = { email: email, password: pwd };
//   console.log("email", email);
//   console.log("password", pwd);
//   try {
//     window.webkit.messageHandlers.login.postMessage(loginInfo);
//   } catch (err) {
//     console.log("error");
//   }
// }
// const getParams = (match) => {
//   const values = match.result.slice(1);
//   const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
//     (result) => result[1]
//   );
//
//   return Object.fromEntries(
//     keys.map((key, i) => {
//       return [key, values[i]];
//     })
//   );
// };
//
// const navigateTo = (url) => {
//   history.pushState(null, null, url);
//   router();
// };
//
// const router = async () => {
//   const routes = [
//     { path: "/", view: Landing },
//     { path: "/dp", view: DetailPage },
//     { path: "/login", view: Login },
//     { path: "/searchResult", view: SearchResult },
//   ];
//
//   // Test each route for potential match
//   const potentialMatches = routes.map((route) => {
//     return {
//       route: route,
//       result: location.pathname.match(pathToRegex(route.path)),
//     };
//   });
//
//   let match = potentialMatches.find(
//     (potentialMatch) => potentialMatch.result !== null
//   );
//
//   if (!match) {
//     match = {
//       route: routes[0],
//       result: [location.pathname],
//     };
//   }
//
//   const view = new match.route.view(getParams(match));
//
//   document.querySelector("#app").innerHTML = await view.getHtml();
// };
//
// window.addEventListener("popstate", router);
//
// document.addEventListener("DOMContentLoaded", () => {
//   document.body.addEventListener("click", (e) => {
//     if (e.target.matches("[data-link]")) {
//       e.preventDefault();
//       navigateTo(e.target.href);
//     }
//   });
//
//   router();
// });
