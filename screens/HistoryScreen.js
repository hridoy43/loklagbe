import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Card, Avatar, Text } from 'react-native-paper';

import HistoryScreenHeader from '../components/historyTab/HistoryScreenHeader';
import { ExpoLinksView } from '@expo/samples';



export default function HistoryScreen() {

    const getServiceHistoryList = () => {
        return <View>
            <Text>Test Data</Text>
        </View>
    }

    return (
        <View style={styles.container}>

            <HistoryScreenHeader />
            <Divider style={{ height: 2 }} />

            {/* Call_Card */}
            <View style={styles.cardContainer}>
                <View style={styles.singleCardContainer}>
                    <TouchableOpacity>
                        <Card>
                            <Card.Title title="CALL NANY" style={styles.cardTitle} />
                        </Card>
                    </TouchableOpacity>
                </View>

                <View style={styles.singleCardContainer}>
                    <TouchableOpacity>
                        <Card>
                            <Card.Title title="CALL DOCTOR" style={styles.cardTitle} />
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>

            <Divider style={{ height: 2 }} />


            <ScrollView>
                {getServiceHistoryList()}
            </ScrollView>
        </View>
    )
}





HistoryScreen.navigationOptions = {
    //title: 'History',     //Header_Title
    header: null
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
        textAlign: 'center',
    },
    cardTitle: {
        alignSelf: 'center',
    }
});
