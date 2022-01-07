import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerTab = (props) => {


    const handleDrawerTabPress = () => {


        if (props.name == "Messages") {

            props.navigation.navigate("Messages");
        } else if (props.name == "Jams") {

            props.navigation.navigate("Jams");
        }


    };

    return (
    <TouchableOpacity onPress={handleDrawerTabPress}>
        <View style={{
            flexDirection: 'row', 
            margin: 10, 
            borderBottomWidth: 2,
            padding: 5}}>
            <Icon size={25} name="music"></Icon>
            <Text style={{fontSize: 20, marginLeft: 10}}>{props.name}</Text>
        </View>
    </TouchableOpacity>)
}

export default DrawerTab;