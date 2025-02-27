import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (

    props.fontName === 'fontAwesome' ?
      <FontAwesome
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
      :
      <Ionicons
        name={props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
  );
}
