import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native';

export default class Profile extends Component {
    state = {
        userProfileInfo: {
            name: '',
            email: '',
            phone: '',
            gender: '',
        }
    }

    render() {
        return (
            <View>
                <TextInput label='Email' value={this.state.text} onChangeText={text => this.setState({ text })} />
            </View>
        );
    }
}

Profile.navigationOptions = {
    title: 'Profile',
    tabBarVisible: false,
    tabBarButtonComponent: () => null

};