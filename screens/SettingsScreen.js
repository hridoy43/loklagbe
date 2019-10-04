import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider, Avatar, Text } from 'react-native-paper';
import Icon from '../components/common/Icon';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  state = {
    profileOption: {
      account: [
        { iconName: 'home', optionText: 'Profile' },
        { iconName: 'home', optionText: 'Address' },
        { iconName: 'home', optionText: 'Payment Methods' },
      ],
      settings: [
        { iconName: '', optionText: 'Change Password' },
        { iconName: '', optionText: 'Language' },
        { iconName: '', optionText: 'Permission' },
      ],
      settings2: [
        { iconName: '', optionText: 'Help' },
        { iconName: '', optionText: 'Legal' },
      ],
      logOut: [
        { iconName: '', optionText: 'Log Out' }
      ],
    }
  }

  // settingViewLoader = () => {
  //   console.log("TCL: SettingsScreen -> settingViewLoader -> state.profileOption", state.profileOption)
  //   const view = <View>
  //     {Object.keys(state.profileOption).map(ProfileOption => {

  //       {
  //         <Divider /> &&
  //           <View>
  //             <Text>Account</Text>

  //             {/* {
  //               profileOption.map(item => {
  //                 <View>
  //                   <Icon name={item.iconName} />
  //                   <Text>{item.optionText}</Text>
  //                 </View>
  //               })

  //             } */}
  //           </View>
  //       }
  //     })
  //     }
  //   </View>
  //   return view
  // }

  //<ExpoConfigView />
  render() {
    return (
      <View style={styles.moreContainer} >
        {Object.keys(this.state.profileOption).map(headerMenu => {
          console.log("TCL: render -> headerMenu", headerMenu)

          return <Divider /> &&
            <View>
              <Text>{headerMenu}</Text>

              {
                this.state.profileOption[headerMenu].map(item => {
                  return <View>
                    <Icon name={item.iconName} />
                    <Text>{item.optionText}</Text>
                  </View>
                })

              }
            </View>
        })
        }

        <Text>Hell</Text>
      </View>
    )

  }
}

SettingsScreen.navigationOptions = {
  // title: 'Setting',
  header: null
};


const styles = StyleSheet.create({
  moreContainer: {

  }
})