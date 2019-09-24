import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const ServiceStack = createStackNavigator(
  {
    Service: ServiceScreen,
  },
  config
);

ServiceStack.navigationOptions = {
  tabBarLabel: 'Service',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-briefcase' : 'md-briefcase'} />
  ),
};

ServiceStack.path = '';


//History Tab
const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon fontName='fontAwesome' focused={focused} name={Platform.OS === 'ios' ? 'history' : 'history'} />
  ),
};

HistoryStack.path = '';


//More Tab
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'} />
  ),
};

SettingsStack.path = '';


//create Tab
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ServiceStack,
  HistoryStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
