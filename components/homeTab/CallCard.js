import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Avatar, Headline, Text } from 'react-native-paper'
import Icon from '../common/Icon';

export default class CallCard extends Component {
    render() {
        return (

            <View style={styles.container}>
                <Headline style={styles.headlineText}>What can I help?</Headline>
                <View style={styles.callContainer}>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity>
                            <Card.Title title="Call Nany" subtitle={<Text onPress={e => this.props.navigation.navigate('Packages')}>Choose Package</Text>} left={(props) => <Avatar.Image {...props} source={require('../../assets/images/nanny.png')} />} />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.borderView} />
                    <View style={styles.cardContainer}>
                        <TouchableOpacity>
                            <Card.Title title="Call Doctor" subtitle={<Text onPress={e => this.props.navigation.navigate('Packages')}>Choose Package</Text>} left={(props) => <Avatar.Image {...props} source={require('../../assets/images/doctor.png')} />} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15,

    },
    headlineText: {
        fontWeight: "500"
    },
    callContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 15,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: -5
    },
    borderView: {
        flexDirection: 'column',
        height: 50,
        width: 1,
        borderWidth: 2,
        borderColor: '#ccc',
        alignSelf: 'center'

    }

})