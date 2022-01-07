import React from 'react';

import { View, Text } from 'react-native';

const MessageBubble = (props) => {

    let dynamicStyleVariableObject = {};

    let dynamicColorVariable = "";

    if (props.selfProp === props.messageObject.from) {


        dynamicStyleVariableObject = {
            flexDirection: 'row', 
            marginTop: 10, 
            marginRight: 5,
            justifyContent: 'flex-end'
        };

        dynamicColorVariable = "lightblue";


    } else {

        dynamicStyleVariableObject = {
            flexDirection: 'row', 
            marginTop: 10, 
            marginLeft: 5
        };

        dynamicColorVariable = "pink";
    }


    return (
    <View style={dynamicStyleVariableObject}>
        <View style={{backgroundColor: dynamicColorVariable, 
        borderRadius: 10,
        padding: 10}}>
            <Text>{props.messageObject.message}</Text>
        </View>
    </View>
)

};

export default MessageBubble;