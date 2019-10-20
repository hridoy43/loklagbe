import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Avatar, Button, TouchableRipple } from 'react-native-paper';

export default class Profile extends Component {
    state = {
        userProfileInfo: {
            name: 'Mistri Mama Sabbir',
            email: 'Sabbir@Mistrimama.com',
            phone: '01420420420',
            gender: 'Other',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Avatar.Image
                        source={__DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')}
                        size={90}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} label='Name' value={this.state.userProfileInfo.name} onChangeText={text => this.setState({ text })} />
                    <TextInput style={styles.textInput} label='Email' value={this.state.userProfileInfo.email} onChangeText={text => this.setState({ text })} />
                    <TextInput style={styles.textInput} label='Phone' value={this.state.userProfileInfo.phone} onChangeText={text => this.setState({ text })} />
                    <TextInput style={styles.textInput} label='Gender' value={this.state.userProfileInfo.gender} onChangeText={text => this.setState({ text })} />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableRipple>
                        <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} >Edit  Profile</Button>
                    </TouchableRipple>
                </View>
            </View>
        );
    }
}

Profile.navigationOptions = {
    title: 'Profile',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 10,
    },
    avatarContainer: {
        alignItems: 'flex-start',
        marginTop: 16,
    },
    inputContainer: {
        justifyContent: 'center',
    },
    textInput: {
        marginVertical: 6,
        backgroundColor: '#fff'
    },
    btnContainer: {
        justifyContent: 'flex-end',
    },
    btn: {
        marginTop: 15,
        fontSize: 50,
        fontWeight: "700",
        borderWidth: 1,
        borderRadius: 25,
    },
    btnProp: {
        height: 60,
    },
})