import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Text, Avatar } from 'react-native-paper'
import Icon from '../common/Icon';

export default class HomeScreenHeader extends Component {
    render() {
        return (
            <View style={styles.homeContainer} elevation={10}>

                {/* Header Text */}
                <View style={styles.headerText}>
                    <Text style={styles.mainHeaderText}> Be Care </Text>
                    <Text style={styles.subHeaderText}> Yes, Be Care! </Text>
                    <View style={styles.location}>
                        <Icon focused={true} fontName="materialIcons" name={Platform.OS === 'ios' ? `location-on` : 'location-on'} />
                        <Text style={styles.locationText}> Shekertek, Dhaka, BD </Text>
                    </View>

                </View>

                {/* header_Image */}
                <View style={styles.headerAvatar}>
                    <Avatar.Image
                        source={__DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')}
                        size={44}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#fff',
    },
    headerText: {
        textAlign: 'left',
        flex: 1,
        flexDirection: 'column',
        color: '#333333'

    },
    mainHeaderText: {
        fontSize: 24,
        fontWeight: "600",
    },
    subHeaderText: {
        fontSize: 14,
        fontWeight: "500",
        paddingLeft: 2,

    },
    location: {
        flexDirection: 'row',
        marginTop: 8,
    },
    locationText: {
        marginTop: 8
    },
    headerAvatar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "flex-end",
    },
});