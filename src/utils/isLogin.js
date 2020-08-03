import jwt from "jsonwebtoken";

// checks if there is authentication data saved locally and if the jwt is still valid
function isLogin() {
  let authData;
  var dateNow = new Date();

  // checks temporary session storage first for valid token
  if (JSON.parse(window.sessionStorage.getItem("authData"))) {
    authData = JSON.parse(sessionStorage.getItem("authData"));
    let token = authData.token;
    // console.log(token);
    var decodedToken = jwt.decode(token, { complete: true });

    if (decodedToken.exp < dateNow.getTime()) {
      // token is expired
    } else {
      return true;
    }
  }
  // then checks "permanent" local storage for valid token
  if (JSON.parse(localStorage.getItem("authData")) !== null) {
    authData = JSON.parse(localStorage.getItem("authData"));
    let token = authData.token;
    // console.log(token);
    var decodedToken = jwt.decode(token, { complete: true });

    if (decodedToken.exp < dateNow.getTime()) {
      // token is expired
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export default isLogin;
