import Token from './Token'
import AppStorage from './AppStorage'
import axios from 'axios';

class User {

    login(data) {
        return axios.post('http://fineartproducts.shop/api/login', data)
            .then(res => {
                if (res.data.message == "Invalid credentials") {
                    console.log("Invalid credentials")
                    return false;
                } else {
                    this.responseAfterLogin(res);
                    return true;
                }

            })
            .catch(error => console.log('error', error.response.data))
    }

    responseAfterLogin(res) {

        const token = res.data.access_token
        const user = res.data.user
        AppStorage.store(user, token)

        // if (Token.isValid(token)) {
        //     AppStorage.store(user, token)
        //     window.location = '/forum'
        // }

    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : this.logout()
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    logout() {
        AppStorage.clear()
        //window.location = '/forum'
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser()
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }


    //registration
    register(data) {
        return axios.post('http://fineartproducts.shop/api/register', data)
            .then(res => {
                console.log('Log: User -> register -> res', res)
                return res;
            })
            .catch(error => {
                console.log('error', error.response.data)
                return error.response
            })
    }
}

export default User = new User()