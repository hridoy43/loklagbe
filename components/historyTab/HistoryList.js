import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, Avatar, Headline, Divider } from 'react-native-paper';
import Icon from '../common/Icon';

export default class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList: [
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
                { package: 'Platinum Pack', imgSrc: '', location: 'Shekertek, Dhaka, BD' },
            ]
        };
    }

    generateHistoryView = (historyList) => {
        return <View>
            {historyList.map(singleHistoryItem => {
                return <View>
                    <View style={styles.listContainer}>
                        {/* header_Image */}
                        <View style={styles.headerAvatar}>
                            <Avatar.Image
                                source={__DEV__ ? require('../../assets/images/robot-dev.png') : require('../../assets/images/robot-prod.png')}
                                size={54}
                            />
                        </View>

                        {/* Header Text */}
                        <View style={styles.headerText}>
                            <Headline style={styles.headline}>{singleHistoryItem.package}</Headline>
                            <View style={styles.location}>
                                <Icon fontName="materialIcons" name='location-on' />
                                <Text style={styles.locationText}>{singleHistoryItem.location}</Text>
                            </View>
                        </View>
                    </View>
                    <Divider style={{ height: 10 }} />
                </View>
            })}
        </View>
    }

    render() {
        return (

            <View>
                <Divider style={{ height: 10 }} />
                {this.generateHistoryView(this.state.historyList)}
            </View>

        )
    }
}


const styles = StyleSheet.create({
    listContainer: {
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
        fontSize: 24,
        fontWeight: "600",
        marginLeft: 8
    },
    location: {
        flexDirection: 'row',
    },
    locationText: {
        marginTop: 8
    },

});