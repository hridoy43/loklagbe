import React from 'react';
import { Ionicons, FontAwesome, EvilIcons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

export default function Icon(props) {
    return (

        props.fontName === 'fontAwesome' &&
        <FontAwesome
            name={props.name}
            size={props.size || 26}
            color={props.focused ? Colors.tabIconSelected : props.color || Colors.tabIconDefault}
        />

        ||

        props.fontName === 'evilIcons' &&
        <EvilIcons
            name={props.name}
            size={props.size || 26}
            color={props.focused ? Colors.tabIconSelected : props.color || Colors.tabIconDefault}
        />

        ||

        props.fontName === 'materialIcons' &&
        <MaterialIcons
            name={props.name}
            size={props.size || 26}
            color={props.focused ? Colors.tabIconSelected : props.color || Colors.tabIconDefault}
        />

        ||

        props.fontName === 'materialCommunityIcons' &&
        <MaterialCommunityIcons
            name={props.name}
            size={props.size || 26}
            color={props.focused ? Colors.tabIconSelected : props.color || Colors.tabIconDefault}
        />

        ||

        !props.fontName &&
        <Ionicons
            name={props.name}
            size={props.size || 26}
            color={props.focused ? Colors.tabIconSelected : props.color || Colors.tabIconDefault}
        />


    );
}
