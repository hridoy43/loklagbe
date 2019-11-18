import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { TextInput, Avatar, Button, TouchableRipple } from 'react-native-paper';

let formEditable;
export default class Profile extends Component {
    state = {
        userProfileInfo: {
            name: '',
            email: '',
            phone: '',
            gender: '',
        },

        formEditable: false,
    }

    componentWillMount() {
        AsyncStorage.getItem('user')
            .then(res => this.setState({ userProfileInfo: JSON.parse(res) }))
    }

    onEdit = () => {
        this.setState({ formEditable: true })
    }

    onChangeformValue = (text, name) => {
        let { userProfileInfo } = this.state;
        userProfileInfo[name] = text;
        this.setState({ userProfileInfo });
    }

    render() {
        console.log(this.state.userProfileInfo);
        formEditable = this.state.formEditable;
        return (

            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.avatarContainer}>
                            <Avatar.Image
                                source={__DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')}
                                size={90}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                label='Name'
                                value={this.state.userProfileInfo.name}
                                disabled={!this.state.formEditable}
                                //editable={this.state.formEditable}
                                onChangeText={text => { this.state.formEditable && this.onChangeformValue(text, 'name') }}
                            />

                            <TextInput
                                style={styles.textInput}
                                label='Email'
                                value={this.state.userProfileInfo.email}
                                //editable={this.state.formEditable}
                                disabled={!this.state.formEditable}
                                onChangeText={text => { this.state.formEditable && this.onChangeformValue(text, 'email') }}
                            />

                            <TextInput
                                style={styles.textInput}
                                label='Phone'
                                value={this.state.userProfileInfo.phone}
                                //editable={this.state.formEditable}
                                disabled={!this.state.formEditable}
                                onChangeText={text => { this.state.formEditable && this.onChangeformValue(text, 'phone') }}
                            />

                            <TextInput
                                style={styles.textInput}
                                label='Gender'
                                value={this.state.userProfileInfo.gender}
                                //editable={this.state.formEditable}
                                disabled={!this.state.formEditable}
                                onChangeText={text => { this.state.formEditable && this.onChangeformValue(text, 'gender') }}
                            />
                        </View>
                    </View>
                </ScrollView>


                <View style={styles.btnContainer}>
                    <TouchableRipple>
                        {!this.state.formEditable ?
                            <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onEdit}>Edit Profile</Button> :
                            <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} >Update Profile</Button>
                        }
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
        justifyContent: 'flex-end'
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
        backgroundColor: '#fff',
        //borderBottomWidth: formEditable ? null : 1,
    },
    btnContainer: {
        flex: 1,
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