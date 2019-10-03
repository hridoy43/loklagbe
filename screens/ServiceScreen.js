import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
//import { ExpoLinksView } from '@expo/samples';
import ServiceSecondHeader from '../components/serviceTab/ServiceSecondHeader';
import HomeScreenHeader from '../components/homeTab/HomeScreenHeader';

export default function ServiceScreen() {
  return (

    <View>
      <HomeScreenHeader />
      <Divider style={{ height: 10 }} />
      <ScrollView style={styles.container}>
        {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
        <ServiceSecondHeader />

        {/* <ExpoLinksView /> */}
      </ScrollView>
    </View>

  );
}

ServiceScreen.navigationOptions = {
  header: null,
  title: 'Service',     //Header_Title
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
