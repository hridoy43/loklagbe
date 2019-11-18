import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
//import { ExpoLinksView } from '@expo/samples';
import ServiceSecondHeader from '../components/serviceTab/ServiceSecondHeader';
import HomeScreenHeader from '../components/homeTab/HomeScreenHeader';
import RemainingTimePage from '../components/serviceTab/RemainingTimePage';

export default function ServiceScreen() {
  return (

    <View style={styles.container}>
      <HomeScreenHeader />

      <ScrollView style={styles.container}>
        <Divider style={{ height: 10 }} />
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
        */}
        <ServiceSecondHeader />
        <Divider style={{ height: 8, padding: 0, margin: 0 }} />

        {/* <ExpoLinksView /> */}

        <RemainingTimePage />
        <Divider style={{ height: 8, padding: 0, margin: 0 }} />
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
    flex: 1,
    backgroundColor: '#fff',
  },
});
