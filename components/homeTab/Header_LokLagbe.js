import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Text, View } from 'react-native-paper'

export default class Header_LokLagbe extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>

                {/* Header Text */}
                <View>
                    <Text style={styles.header}> LOKLAGBE </Text>
                    <Text> Yes, We Care! </Text>
                </View>

                {/* header_Image */}
                <View>
                    <Avatar.Image
                        source={__DEV__ ? require('../assets/images/robot-dev.png') : require('../assets/images/robot-prod.png')}
                        style={styles.welcomeImage}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});