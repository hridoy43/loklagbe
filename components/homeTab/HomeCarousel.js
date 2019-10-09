import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
import { Headline } from 'react-native-paper';

const { width: screenWidth } = Dimensions.get('window')

export default class HomeCarousel extends Component {

    state = {
        entries: [
            { title: 'Nany - The Friend', thumbnail: 'https://images.unsplash.com/photo-1562887106-2588234e7b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80' },
            { title: 'Doctor - You Need', thumbnail: 'https://images.unsplash.com/photo-1562887194-a50958050e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80' },
            { title: 'Nany - The Friend', thumbnail: 'https://images.unsplash.com/photo-1562887106-2588234e7b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80' },
        ]
    }
    _renderItem({ item, index }, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Headline style={styles.title} numberOfLines={2}>
                    {item.title}
                </Headline>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Headline style={styles.carouselHeader}>Featured</Headline>
                <Carousel
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth - 80}
                    itemWidth={screenWidth - 60}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    hasParallaxImages={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        width: screenWidth - 60,
        height: 200,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
        opacity: (0, 0, 0, 0.8),
        paddingBottom: 4
    },
    carouselHeader: {
        fontWeight: "500",
        marginLeft: screenWidth - (screenWidth - 30),
        paddingVertical: 10
    }
})