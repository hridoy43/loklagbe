import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Text, Button } from 'react-native-paper'
import Color from '../../constants/Colors'
import Icon from '../common/Icon';


export default class RemainingTimePage extends Component {
    state = {
        videoBanner: ''
    }

    onPlayVideo = () => {
        let { videoBanner } = this.state;
        if (videoBanner) {
            videoBanner = ''
        } else videoBanner = '../../assets/images/videoPlayBanner.jpg'

        this.setState({ videoBanner })
    }
    render() {
        return (
            <View style={styles.container} elevation={5}>
                <View style={styles.textRow}>
                    <Text style={styles.headText}>Remaining Service</Text>
                    <Text style={{ ...styles.coloredText, ...styles.headText }}>Platinum Pack</Text>
                </View>

                <View style={styles.timeContainer} >
                    <View><Text style={styles.timeNum} >02</Text><Text style={styles.timeString} >Hours</Text></View>
                    <View><Text style={styles.timeNum} >25</Text><Text style={styles.timeString} >Minutes</Text></View>
                    <View><Text style={styles.timeNum} >35</Text><Text style={styles.timeString} >Seconds</Text></View>
                </View>
                {this.state.videoBanner ?
                    <Image source={require(this.state.videoBanner)} style={styles.thumbnail} /> :
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1562887106-2588234e7b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80' }} style={styles.thumbnail} />
                }
                <View style={styles.bottomButtonContainer}>
                    <Button icon="call" Outlined>Call</Button>
                    <Button icon="camera" mode="outlined" onClick={this.onPlayVideo}>CCTV</Button>
                    <Button Outlined>Comment</Button>
                </View>
                <Text style={styles.arriveText}>Nanny arrived at 10:30 AM</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff"
    },
    textRow: {
        flexDirection: 'row',
    },
    headText: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        opacity: 0.9

    },
    coloredText: {
        flex: 1,
        textAlign: 'right',
        color: Color.tintColor
    },

    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    timeNum: {
        fontSize: 34,
        fontWeight: "500",
        textAlign: 'center'
    },
    timeString: {
        textAlign: 'center'
    },
    thumbnail: {
        resizeMode: 'cover',
        height: 200,
        paddingHorizontal: 20
    },
    arriveText: {
        textAlign: 'center',
        paddingVertical: 10
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        borderColor: "#466Df6",
        borderStyle: "solid"
    }
})