import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, TouchableRipple } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

export default class Registration extends Component {

    state = {

        userDetails: {
            firstName: '',
            lastName: '',
            phone: ''
        }

    }

    onLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.loginHeaderText}>Registration</Text>
                    <TextInput style={styles.inputBox} label='First Name' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ firstName })} />
                    <TextInput style={styles.inputBox} label='Last Name' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ lastName })} />
                    <TextInput style={styles.inputBox} label='Phone Number' type="number" mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ lastName })} />
                    <TextInput style={styles.inputBox} label='Occupation' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ lasttName })} />

                    <View style={styles.inputBoxRow}>
                        <TextInput style={styles.inputBoxinRow} label='City' type="number" mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ lastName })} />
                        <TextInput style={styles.inputBoxinRow} label='P.O Box' mode='outlined' value={this.state.text} onChangeText={userName => this.setState({ lasttName })} />
                    </View>

                    <TextInput style={styles.inputBox} label='Password' type='password' mode='outlined' value={this.state.text} onChangeText={pass => this.setState({ pass })} />

                    <TouchableRipple>
                        <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} >Register</Button>
                    </TouchableRipple>

                    <Text style={styles.registrationText}>Already have an account?</Text>
                    <TouchableRipple>
                        <Text style={styles.linkRegistrationText} onPress={this.onLogin} >Login Here</Text>
                    </TouchableRipple>
                </View>
            </ScrollView>
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
    inputBoxRow: {
        flexDirection: 'row',
    },
    inputBoxinRow: {
        flex: 1,
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