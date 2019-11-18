import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, TextInput, Button, TouchableRipple, Snackbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import User from '../service/helper/User';

export default class Registration extends Component {

    state = {
        userDetails: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            city: '',
            po_box: '',
            password: '',
            password_confirmation: '',
        },
        visible: false,
        visibleSuccess: false,
        errorMsg: ''
    }

    onLogin = () => {
        this.props.navigation.navigate('Login')
    }

    onRegister = async () => {
        let submitData = this.state.userDetails;
        submitData.firstName = submitData.firstName.trim();
        submitData.lastName = submitData.lastName.trim()
        submitData.name = `${submitData.firstName} ${submitData.lastName}`

        let res = await User.register(submitData);

        console.log('Log: Registration -> onRegister -> res.status', res.status)
        if (res.status == 200) {
            this.setState({ visibleSuccess: true })
            setTimeout(() => {
                this.onLogin();
            }, 2000);
        }
        else if (res.status == 422) {
            let errorMsg = res.data.message;
            this.setState({ errorMsg })
            this.setState({ visible: true })
        }
        console.log('resFromServer', res);
        //this.setState({ visible: true })
    }

    onChangeformValue = (text, name) => {
        let { userDetails } = this.state;
        userDetails[name] = text;
        this.setState({ userDetails });
    }

    render() {
        let { userDetails } = this.state;

        return (
            <KeyboardAvoidingView behavior="margin" enabled>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.loginHeaderText}>Registration</Text>
                        <TextInput style={styles.inputBox} label='First Name' mode='outlined' value={userDetails.firstName} onChangeText={text => this.onChangeformValue(text, 'firstName')} />
                        <TextInput style={styles.inputBox} label='Last Name' mode='outlined' value={userDetails.lastName} onChangeText={text => this.onChangeformValue(text, 'lastName')} />
                        <TextInput style={styles.inputBox} label='Phone Number' type="number" mode='outlined' value={userDetails.phone} onChangeText={text => this.onChangeformValue(text, 'phone')} />
                        <TextInput style={styles.inputBox} label='Email' mode='outlined' value={userDetails.email} onChangeText={text => this.onChangeformValue(text, 'email')} />

                        <View style={styles.inputBoxRow}>
                            <TextInput style={styles.inputBoxinRow} label='City' type="number" mode='outlined' value={userDetails.city} onChangeText={text => this.onChangeformValue(text, 'city')} />
                            <TextInput style={styles.inputBoxinRow} label='P.O Box' mode='outlined' value={userDetails.po_box} onChangeText={text => this.onChangeformValue(text, 'po_box')} />
                        </View>

                        <TextInput secureTextEntry={true} style={styles.inputBox} label='Password' type='password' mode='outlined' value={userDetails.password} onChangeText={pass => this.onChangeformValue(pass, 'password')} />
                        <TextInput secureTextEntry={true} style={styles.inputBox} label='Confirm Password' type='password' mode='outlined' value={userDetails.password_confirmation} onChangeText={pass => this.onChangeformValue(pass, 'password_confirmation')} />

                        <TouchableRipple>
                            <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onRegister} >Register</Button>
                        </TouchableRipple>

                        <Text style={styles.registrationText}>Already have an account?</Text>
                        <TouchableRipple>
                            <Text style={styles.linkRegistrationText} onPress={this.onLogin} >Login Here</Text>
                        </TouchableRipple>

                        <Snackbar
                            visible={this.state.visible}
                            onDismiss={() => this.setState({ visible: false })}
                            style={styles.snackbarDenger}
                        >
                            {this.state.errorMsg || 'Server Response Faild! Please Try Again.'}
                        </Snackbar>

                        <Snackbar
                            visible={this.state.visibleSuccess}
                            onDismiss={() => this.setState({ visibleSuccess: false })}
                            style={styles.snackbarSuccess}
                        >
                            User Successfully Crated.
                    </Snackbar>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        )

    }
}

Registration.navigationOptions = {
    header: null,
};


const styles = StyleSheet.create({
    keyboardAvoidingContainer: {
        flex: 1
    },
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
    },
    snackbarDenger: {
        color: "#fff",
        backgroundColor: "#EA2027"
    },
    snackbarSuccess: {
        color: "#fff",
        backgroundColor: "#26ae60"
    }
});