import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, TouchableRipple } from 'react-native-paper';

export default class Registration extends Component {

state = {
    userName: '',
    password: '',
}

onRegister = () => {
    this.props.navigation.navigate('Login')
}

    render() {
    return (
        <View style={styles.container}>
          <Text style={styles.loginHeaderText}>Registration</Text>
        <TextInput style={styles.inputBox} label='Email' placeholder='Email or Username' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ userName })} />
        <TextInput style={styles.inputBox} label='Password' type='password' mode='outlined' value={this.state.text} onChangeText={pass => this.setState({ pass })} />
        <Text style={styles.linkText}>Forgot Password?</Text>
        {console.log(this.props.navigation.navigate)}
        <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onLogin}>Login</Button>
        <Text style={styles.registrationText}>Don't You Have Any Account Yet?</Text>
            <TouchableOpacity>
            <Text style={styles.linkRegistrationText} onPress={this.onRegister} >Register Here</Text>
            </TouchableOpacity>
        </View>
    )
    
} 
} 

Registration.navigationOptions = {
    header: null,
}; 


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
    }
});