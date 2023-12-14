import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }   
    // check if the user is still logged in
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        // use type coersion to check if token is NOT undefined and the token is NOT expired
        return !!token && !this.isTokenExpired(token);
    }
    
    // check if the token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            // Check if the token has an expiration date and if it's within the next 5 minutes
            if (decoded.exp && decoded.exp * 1000 < Date.now() + 5 * 60 * 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
    
    // retrieve token from localStorage
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }
    
    // set token to localStorage and reload page to homepage
    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    
        // Decode the token to get user information
        const userData = decode(idToken);
    
        // Save additional user information (e.g., username) to localStorage
        localStorage.setItem('user_data', JSON.stringify(userData));
    
        // Redirect to the homepage or handle the login completion as needed
        window.location.assign('/');
      }
    
      // get username from localStorage
      getUsername() {
        const userData = localStorage.getItem('user_data');
      
        // Check if userData exists and has a username field
        const username = userData ? (JSON.parse(userData).data.username || null) : null;
      
        console.log("username: ", username);
        return username;
      }
    
    
    // clear token from localStorage and force logout with reload
    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('user_data');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }
}

export default new AuthService;