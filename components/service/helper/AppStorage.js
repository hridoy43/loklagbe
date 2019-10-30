import { AsyncStorage } from 'react-native';

class AppStorage {
    storeToken(token) {
        AsyncStorage.setItem('token', token);
    }

    storeUser(user) {
        AsyncStorage.setItem('user', user);
    }

    store(user, token) {
        this.storeToken(token)
        this.storeUser(user)
    }

    clear() {
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('user')
    }

    getToken() {
        return AsyncStorage.getItem('token')
    }

    getUser() {
        return AsyncStorage.getItem('user')
    }
}

export default AppStorage = new AppStorage()