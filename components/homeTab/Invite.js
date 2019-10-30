import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, } from 'react-native-paper'
import ShareBgIcon from '../../assets/images/ShareBgIcon'

export default class Invite extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ShareBgIcon />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        width: 100,
    }

})