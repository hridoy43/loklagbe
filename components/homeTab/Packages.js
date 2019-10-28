import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Card } from 'react-native-paper';

import HistoryScreenHeader from '../historyTab/HistoryScreenHeader';

export default class Packages extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <HistoryScreenHeader />
                {/* Call_Card */}
                <View style={styles.cardContainer}>
                    <View style={styles.singleCardContainer}>
                        <TouchableOpacity>
                            <Card>
                                <Card.Title titleStyle={{ textAlign: 'center' }} title="CALL NANY" style={styles.cardTitle} />
                            </Card>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.singleCardContainer}>
                        <TouchableOpacity>
                            <Card style={styles.cardContent}>
                                <Card.Title titleStyle={{ textAlign: 'center' }} title="CALL DOCTOR" style={styles.cardTitle} />
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>

                <Divider style={{ height: 2 }} />


                <View>

                </View>
            </View>
        )
    }
}

Packages.navigationOptions = {
    //title: 'History',     //Header_Title
    // headerStyle: {
    //     height: 100,
    //     position: 'absolute',
    //     backgroundColor: 'transparent',
    //     zIndex: 100,
    //     top: 0,
    //     left: 0,
    //     right: 0
    // }
    headerTransparent: true
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    cardContainer: {
        flexDirection: 'row'
    },
    singleCardContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    cardTitle: {
        alignSelf: 'center',
    }
});
