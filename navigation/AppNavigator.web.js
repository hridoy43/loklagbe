import { Platform } from 'react-native'
import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import Registration from '../components/login/Registration';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: Registration
  },
  config
)
LoginStack.path = '';

const SwitchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  LoginScrn: LoginStack,
  Main: MainTabNavigator,
},
  {
    initialRouteName: 'LoginScrn',
  })
SwitchNavigator.path = '';



// const mainStack = createStackNavigator(
//   {
//     Main: SwitchNavigator,
//     LoginScrn: LoginStack,
//   },
//   {
//     initialRouteName: 'LoginScrn',
//   }
// )
// mainStack.path = '';



export default createBrowserApp(SwitchNavigator, { history: 'hash' });
