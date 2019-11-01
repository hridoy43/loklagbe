import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default class HistoryScreenHeader extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>

                {/* Header Text */}
                <View style={styles.headerText}>
                    <Text style={styles.mainHeaderText}> We Care </Text>
                    <Text style={styles.subHeaderText}> Yes, We Care! </Text>
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
        flex: 1,
        flexDirection: 'column',
        color: '#333333',
        alignItems: 'center',
        justifyContent: 'center'

    },
    mainHeaderText: {
        fontSize: 24,
        fontWeight: "600",
    },
    subHeaderText: {
        fontSize: 18,
        fontWeight: "500",
        paddingLeft: 2,
        letterSpacing: 2
    }
});