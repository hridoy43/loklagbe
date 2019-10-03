import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, } from 'react-native-paper'

const ServiceSecondHeader = () => {
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <Text style={styles.greetingText}>
                    Hello! Sabbir Hossain {"\n"}
                    Good Morning
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.greetingImage} source={require('../../assets/images/greeting.png')} />
            </View>
        </View>
    )
}

export default ServiceSecondHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    nameContainer: {
        flex: 2,
        flexDirection: 'column'
    },
    greetingText: {
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, .2)',
        textShadowOffset: { width: -1, height: 2 },
        textShadowRadius: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    greetingImage: {
        height: 80,
        width: 80,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }

})