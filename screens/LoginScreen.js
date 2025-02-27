import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { TextInput, Button, Text, TouchableRipple, Snackbar, HelperText } from 'react-native-paper';
import User from '../components/service/helper/User';

class LoginScreen extends React.Component {
    state = {
        phone: '',
        password: '',
        visible: false
    }

    onLogin = async () => {
        let user = {
            phone: this.state.phone,
            password: this.state.password
        }

        const status = await User.login(user);
        //this.props.navigation.navigate('Main')
        if (status) {
            let user = AsyncStorage.getItem('user')
            console.log('Log: LoginScreen -> onLogin -> AsyncStorageUser', user)
            this.props.navigation.navigate('Main')
        } else {
            this.setState({ visible: true })
        }
    }

    onRegister = () => {
        this.props.navigation.navigate('Register')
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="margin" enabled>
                <Text style={styles.loginHeaderText}>Log In</Text>

                <View style={styles.inputBoxContainer}>
                    <TextInput
                        style={styles.inputBox}
                        label='Phone Number'
                        mode='outlined'
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />

                    <HelperText type="error" visible={isNaN(this.state.phone)} >
                        Only number can be applied with Phone Number!
                    </HelperText>

                    <TextInput style={styles.inputBox} secureTextEntry={true} label='Password' type='password' mode='outlined' value={this.state.password} onChangeText={password => this.setState({ password })} />

                    <HelperText type="error" visible={this.state.password && (this.state.password.length < 6)} >
                        Passwords must be at least 6 characters in length!
                    </HelperText>
                </View>

                <Text style={styles.linkText}>Forgot Password?</Text>
                {console.log(this.props.navigation.navigate)}
                <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onLogin}>Login</Button>
                <Text style={styles.registrationText}>Don't you have any account yet?</Text>
                <TouchableRipple>
                    <Text style={styles.linkRegistrationText} onPress={this.onRegister} >Register Here</Text>
                </TouchableRipple>

                <Snackbar
                    visible={this.state.visible}
                    onDismiss={() => this.setState({ visible: false })}
                    style={styles.snackbarDenger}
                >
                    Invalid Credential! Please Try Again With Valid Data.
                </Snackbar>
            </KeyboardAvoidingView>
        );
    }
}

LoginScreen.navigationOptions = {
    header: null,
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 20
    },

    inputBox: {
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
    },
    inputBoxContainer: {
        marginTop: 10,
        marginBottom: 2,
    },
    btn: {
        marginTop: 15,
        fontSize: 50,
        fontWeight: "700",
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25
    },
    btnProp: {
        height: 60,
    },
    loginHeaderText: {
        fontSize: 24,
        color: 'rgba(0,0,0,0.6)',
        fontWeight: 'bold'
    },
    linkText: {
        fontSize: 18,
        fontWeight: "500",
        color: '#2e78b7',
        textAlign: 'right',
        opacity: 0.8
    },
    registrationText: {
        fontSize: 14,
        fontWeight: "500",
        color: '#7B8788',
        textAlign: 'center',
        padding: 10,
        paddingTop: 30
    },
    linkRegistrationText: {
        fontSize: 18,
        fontWeight: "600",
        color: '#2e78b7',
        textAlign: 'center',
    },
    snackbarDenger: {
        color: "#fff",
        backgroundColor: "#EA2027"
    }
});