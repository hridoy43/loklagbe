import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, Avatar } from 'react-native-paper'

export default class CallCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>


                    <View style={styles.cardContainer}>
                        <TouchableOpacity>
                            <Card>
                                <Card.Title title="Call Nany" subtitle="Choose Package" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardContainer}>
                    <TouchableOpacity>
                        <Card>
                            <Card.Title title="Call Doctor" subtitle="Choose Package" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
                        </Card>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column'
    }
})