import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Card} from 'react-native-paper';

import HistoryScreenHeader from '../components/historyTab/HistoryScreenHeader';
import HistoryList from '../components/historyTab/HistoryList';



export default function HistoryScreen() {

    return (
        <View style={styles.container}>

            <HistoryScreenHeader />
            <Divider style={{ height: 2 }} />

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


            <ScrollView>
                <HistoryList />
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
    },
    cardTitle: {
        alignSelf: 'center',
    }
});
