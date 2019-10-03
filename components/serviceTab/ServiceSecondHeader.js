import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, } from 'react-native-paper'
import ServicePageGreetingIcon from '../../assets/images/ServicePageGreetingIcon'


const ServiceSecondHeader = () => {
    return (
        <View style={styles.container}>

            <View style={styles.nameContainer}>
                <Text style={styles.greetingText}>
                    Hello! Mr. Hridoy {"\n"}
                    Good Morning
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

export default ServiceSecondHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 2
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
        lineHeight: 30

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