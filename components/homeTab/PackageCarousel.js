import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, Button, TouchableRipple } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from '../common/Icon';

export default class PackageCarousel extends Component {
    state = {
        carouselItems: [
            {
                title: "Package 1"
            },
            {
                title: "Package 2"
            },
            {
                title: "Package 3"
            },
            {
                title: "Package 4"
            },
            {
                title: "Package 5"
            }
        ],
        activeIndex: 1
    };

    _renderItem({ item, index }) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#333' }} >{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>


                <View style={styles.carouselContainer}>
                    <TouchableOpacity onPress={() => { this.carousel.snapToItem(this.state.activeIndex - 1) }}>
                        <Icon name="ios-arrow-back" size={46} />
                    </TouchableOpacity>

                    <View>
                        <Carousel

                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={250}
                            itemWidth={250}
                            renderItem={this._renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })}
                        />
                    </View>

                    <TouchableOpacity onPress={() => { this.carousel.snapToItem(this.state.activeIndex + 1) }}>
                        <Icon name="ios-arrow-forward" size={46} />
                    </TouchableOpacity>
                </View>


                <View style={styles.btnContainer}>
                    <TouchableRipple>
                        <Button mode='contained' contentStyle={styles.btnProp} style={styles.btn} onPress={this.onEdit}>Request Package</Button>
                    </TouchableRipple>
                </View>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 10,
    },
    carouselContainer: {
        flex: 3,
        flexDirection: 'row', //add this
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    btn: {
        marginTop: 15,
        fontSize: 50,
        fontWeight: "700",
        borderWidth: 1,
        borderRadius: 25,
    },
    btnProp: {
        height: 60,
    },
});