import decode from "jwt-decode";
import { LOGIN, LOGOUT } from "../context/actions";

// delete this comment later! just trying to repush my changes

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  // login & logout converted into reducers
  // additional utils folder under the name "context" created to keep tracks of global variables

  logout(dispatch) {
    // using context's dispatch
    dispatch({ type: LOGOUT });
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
