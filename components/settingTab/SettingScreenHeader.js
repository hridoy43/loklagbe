import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Avatar, Headline, Chip } from 'react-native-paper';
import Colors from '../../constants/Colors';
import Icon from '../common/Icon';

export default class SettingScreenHeader extends Component {
    render() {
        return (
            <View style={styles.headerContainer} elevation={8}>
                {/* header_Image */}
                <View style={styles.headerAvatar}>
                    <Avatar.Image
                        source={__DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')}
                        size={60}
                    />
                </View>

                {/* Header Text */}
                <View style={styles.headerText}>
                    <Headline style={styles.headline}>{"Wahiduzzaman Hridoy"}</Headline>
                    <View style={styles.chipContainer}>
                        <Text style={styles.phnNumber}>{"01727665348"}</Text>
                        <Chip textStyle={{ color: '#fff' }} style={styles.chipStyle}><Icon name="star" fontName="fontAwesome" color="#fff" size={16} style={styles.chipIcon} /> {"Silver User"}</Chip>
                    </View>
                </View>
            </View >
        )
    }
}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
    },
    headerAvatar: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        textAlign: 'left',
        flex: 3,
        flexDirection: 'column',
        color: '#333333',
        justifyContent: 'center',
        alignItems: 'flex-start'

    },
    headline: {
        fontSize: 20,
        fontWeight: "600",
    },
    phnNumber: {
        fontSize: 14,
        fontWeight: "500",
        marginTop: -4
    },
    chipStyle: {
        height: 22,
        justifyContent: 'center',
        marginLeft: -2,
        marginTop: 2,
        backgroundColor: Colors.tintColor,
        color: '#fff',
    },
    chipIcon: {
        paddingRight: 4
    }
});