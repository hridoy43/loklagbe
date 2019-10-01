import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ServiceSecondHeader from '../components/serviceTab/ServiceSecondHeader';

export default function ServiceScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ServiceSecondHeader />
      <ExpoLinksView />
    </ScrollView>
  );
}

ServiceScreen.navigationOptions = {
  title: 'Service',     //Header_Title
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
