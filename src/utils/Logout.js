// checks if there is authentication data saved locally and if the jwt is still valid
function Logout() {
  try {
    localStorage.removeItem("authData");
    window.location.reload(false);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default Logout;
