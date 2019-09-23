import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

class Login extends React.Component {
    state = {
        userName: '',
        password: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox} label='Email' placeholder='Email or Username' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ userName })} />
                <TextInput style={styles.inputBox} label='Password' type='password' mode='outlined' value={this.state.text} onChangeText={pass => this.setState({ pass })} />
                <Button mode='contained' style={styles.btn}>Login</Button>
            </View>
        );
    }
}

export default Login;

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
        marginTop: 10,
        borderRadius: 20,
    },
    btn: {
        marginTop: 10,
        fontSize: 50,
        height: 60,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25
    }
});