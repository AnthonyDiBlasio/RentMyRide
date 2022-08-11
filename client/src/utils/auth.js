import decode from 'jwt-decode';
import { LOGIN, LOGOUT } from '../context/actions';

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
        localStorage.removeItem('id_token');
        return true;
    }
    return false;
    }

    getToken() {
    return localStorage.getItem('id_token');
    }

    // login & logout converted into reducers 
    // additional utils folder under the name "context" created to keep tracks of global variables
    login(dispatch, idToken, formData, navigate) {
        // using context's dispatch
        dispatch({type: LOGIN, payload: formData.login.user});
        localStorage.setItem('id_token', idToken);

    // prevents a complete refresh of the site
    // allows react state to stay intact
    // it hooks in to react router provider to change the page
    navigate("/", {replace: true}) 
    // window.location.assign('/');
    }

    logout(dispatch) {
    // using context's dispatch
    dispatch({type: LOGOUT});
    localStorage.removeItem('id_token');
    window.location.reload();
    }
}

export default new AuthService();