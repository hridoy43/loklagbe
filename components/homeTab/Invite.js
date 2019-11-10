import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Headline, TextInput, Button, Card } from 'react-native-paper'
import Layout from '../../constants/Layout'
//import ShareBgIcon from '../../assets/images/ShareBgIcon'

export default class Invite extends Component {
    render() {
        console.log('ScreenWidth', Layout.window.width);
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/images/SharewithFriendsBg.png')} style={styles.thumbnail}></Image>
                <Headline style={styles.HeadingText}>Invite Friends And Get Discount</Headline>
                <Text style={styles.subHeadingText}>Invite Friends And Get Discount!</Text>
                <Text style={styles.paragraph}>Share this code with your two friend and ask them two use this code on their  First Request and your both friend will get amazing discount. You will get your discount on finishing their first service.</Text>

                <View style={styles.invitationCodeContainer}>
                    <Text style={styles.inviteBoxLabelText}>Your invitation code</Text>
                    <View style={styles.inviteButtonContainer}>
                        <View style={styles.discountContainer}>
                            <Text style={styles.discountText}>Discount4C</Text>
                            <Button>Copy</Button>
                        </View>
                        <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onShare}>Share</Button>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 10,
        fontWeight: "600",
        color: 'rgba(0,0,0,0.4)',
        backgroundColor: "#fff"
    },
    thumbnail: {
        resizeMode: 'stretch',
        height: 200,
        width: Layout.window.width - 32,
    },
    HeadingText: {
        fontSize: 20,
        fontWeight: "700",
        color: 'rgba(0,0,0,0.7)',
    },
    subHeadingText: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
        marginBottom: 14
    },
    paragraph: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
    },
    invitationCodeContainer: {
        marginVertical: 10,
    },
    inviteBoxLabelText: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
    },
    inviteButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    discountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 2,
        borderRadius: 14,
        borderColor: '#ccc',
        width: '70%'

    },
    discountText: {
        fontSize: 18,
        fontWeight: "700",
        color: 'rgba(0,0,0,0.3)',
        width: '70%',
        textAlign: 'center',
        alignSelf: 'center'
    },
    btn: {
        fontSize: 50,
        fontWeight: "700",
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 14
    },
    btnProp: {
        height: 40,
    },

})