import * as React from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

class LoginScreen extends React.Component {
    state = {
        userName: '',
        password: '',
    }

    onLogin = () => {
        this.props.navigation.navigate('Main')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginHeaderText}>Log In</Text>
                <TextInput style={styles.inputBox} label='Email' placeholder='Email or Username' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ userName })} />
                <TextInput style={styles.inputBox} label='Password' type='password' mode='outlined' value={this.state.text} onChangeText={pass => this.setState({ pass })} />
                <Text style={styles.linkText}>
                    Forgot Password?
                </Text>
                {console.log(this.props.navigation.navigate)}
                <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onLogin}>Login</Button>
            </View>
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
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 20,
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
        opacity: 0.9
    },
});