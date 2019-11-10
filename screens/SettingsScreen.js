import * as React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Avatar, Text } from 'react-native-paper';
import SettingScreenHeader from '../components/settingTab/SettingScreenHeader';
import Icon from '../components/common/Icon';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  state = {
    profileOption: {
      account: [
        { iconName: 'person-outline', fontName: 'materialIcons', optionText: 'Profile', route: 'Profile' },
        { iconName: 'payment', fontName: 'materialIcons', optionText: 'Payment Methods', route: '' },
        { iconName: 'home-outline', fontName: 'materialCommunityIcons', optionText: 'Address', route: '' },
      ],
      settings: [
        { iconName: 'key-variant', fontName: 'materialCommunityIcons', optionText: 'Change Password', route: '' },
        { iconName: 'language', fontName: 'materialIcons', optionText: 'Language', route: '' },
        { iconName: 'teach', fontName: 'materialCommunityIcons', optionText: 'Permission', route: '' },
      ],
      settings2: [
        { iconName: 'ios-help-buoy', fontName: '', optionText: 'Help', route: '' },
        { iconName: 'account-balance', fontName: 'materialIcons', optionText: 'Legal', route: '' },
      ],
      logOut: [
        { iconName: 'logout', fontName: 'materialCommunityIcons', optionText: 'Log Out', route: 'Login' }
      ],
    }
  }

  onRoute = (e, routeName) => {
    this.props.navigation.navigate(routeName)
  }

  headerMenuLoader(headerMenu) {
    if (headerMenu == 'account') return 'ACCOUNT'
    else if (headerMenu == 'settings' || headerMenu == 'settings2') return 'SETTINGS'
    else if (headerMenu == 'logOut') return 'LOG OUT'
  }

  settingViewLoader = () => {
    return <View style={styles.moreContainer} >
      {Object.keys(this.state.profileOption).map((headerMenu, index) => {
        return <View key={index}>
          <View style={styles.optionComponent} elevation={3}>
            <Text style={styles.optionHeader}>{this.headerMenuLoader(headerMenu)}</Text>
            {
              this.state.profileOption[headerMenu].map((item, index) => {
                return <TouchableOpacity key={index} onPress={e => this.onRoute(e, item.route)} >
                  <View style={styles.optionRow}>
                    <Icon name={item.iconName} fontName={item.fontName} />
                    <Text style={styles.optionText}>{item.optionText}</Text>
                  </View>
                  {this.state.profileOption[headerMenu].length - 1 != index ? <Divider /> : null}
                </TouchableOpacity>
              })
            }
          </View>
          <Divider style={styles.dividerStyle} />
        </View>
      })
      }
    </View>
  }

  //<ExpoConfigView />
  render() {
    return (
      <View style={styles.container}>
        <SettingScreenHeader />
        <Divider style={{ height: 2 }} />
        <ScrollView>
          <Divider style={{ height: 10 }} />
          {this.settingViewLoader()}
        </ScrollView>
      </View>
    )

  }
}

SettingsScreen.navigationOptions = {
  // title: 'Setting',
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  moreContainer: {
  },
  optionHeader: {
    paddingLeft: 12
  },
  optionComponent: {
    padding: 10,
    backgroundColor: "#fff"
  },
  optionRow: {
    flexDirection: 'row',
    padding: 12,
  },
  optionText: {
    marginTop: 8,
    paddingLeft: 20
  },
  dividerStyle: {
    height: 10,
    marginLeft: -10,
    marginRight: -10
  }
})