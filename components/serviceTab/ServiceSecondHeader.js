import React, { Component } from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Text, } from 'react-native-paper'
import ServicePageGreetingIcon from '../../assets/images/ServicePageGreetingIcon'

let currentDate = new Date();
export default class ServiceSecondHeader extends Component {

    state = {
        userInfo: {}
    }
    componentWillMount() {
        AsyncStorage.getItem('user')
            .then(res => this.setState({ userInfo: JSON.parse(res) }))
    }

    render() {
        let name = this.state.userInfo.name;
        let lastName = '';
        if (name) { lastName = name.split(' ')[1] }

        let hours = currentDate.getHours();
        let greeting = ''
        if (5 <= hours >= 11) {
            greeting = "Morning"
        } else if (12 <= hours >= 16) {
            greeting = "Afternoon"

        } else greeting = "Evening"

        return (
            <View style={styles.container} elevation={5}>

                <View style={styles.nameContainer}>
                    <Text style={styles.greetingText}>
                        Hello! Mr. {lastName} {"\n"}
                        Good {greeting}
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.greetingImage}>
                        <ServicePageGreetingIcon />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 2,
        backgroundColor: "#fff"
    },
    nameContainer: {
        flex: 4,
        flexDirection: 'column',
        flexWrap: 'nowrap'
    },
    greetingText: {
        fontSize: 26,
        textShadowColor: 'rgba(0, 0, 0, .2)',
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10,
        fontWeight: "500",
        lineHeight: 30,
        //letterSpacing: 1

    },
    imageContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',

    },
    greetingImage: {
        height: 100,
        width: 100,
        marginTop: -10
    }

})