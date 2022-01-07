import React from 'react';

import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

const TabButton = (props) => {

    let dynamicBorderTop = "";

    let dynamicButtonIcon = (<View></View>);

    if (props.selected == props.text) {
        dynamicBorderTop = "lightblue"
    } else {
        dynamicBorderTop = "yellow";
    }

    if (props.text == 'Home') {

        dynamicButtonIcon = (<Icon name="home" color="grey" size={30}></Icon>)

    } else if (props.text == 'Feed') {

        dynamicButtonIcon = (<IconMaterial name="dynamic-feed" color='grey' size={30}></IconMaterial>)
    } else if (props.text == 'Find Venues') {

        dynamicButtonIcon = (<Icon name="search" color="grey" size={30}></Icon>)
        

    } else if (props.text == 'Your Venues') {

        dynamicButtonIcon = (<IconMaterial name="local-library" color="grey" size={30}></IconMaterial>)

    } else if (props.text == 'Account') {

        dynamicButtonIcon = (<IconMaterial name="account-circle" color="grey" size={30}></IconMaterial>)


    }

    const handleTabPress = () => {

        props.handleSwitch(props.text);
    }

    return (
    <TouchableWithoutFeedback onPress={handleTabPress}>
        <View style={{
            flex: 2,
            backgroundColor: 'orange',
            borderTopColor: dynamicBorderTop,
            borderRightColor: 'yellow',
            borderLeftColor: 'yellow',
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderWidth: 3
        }}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <View style={{
                    marginTop: 5
                }}>
                    {dynamicButtonIcon}
                </View>
                <Text style={{textAlign: 'center', marginTop: 3, fontSize: 12}}>{props.text}</Text>
            </View>
        
        </View>
    </TouchableWithoutFeedback>
    )
}

export default TabButton;