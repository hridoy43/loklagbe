import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, } from 'react-native-paper'

const ServiceSecondHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.greeting}>
                    Hello! Wahiduzzaman Hridoy <br />
                    Good Morning
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require(assets /)} />
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
    imageContainer: {
        flex: 1,
        flexDirection: 'column'
    },

})