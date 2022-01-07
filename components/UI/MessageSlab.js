import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

const MessageSlab = (props) => { 

    const handleFriendEntryClick = () => {

        props.notifyMessagesScreen(props.name);

    };

    return (<TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginBottom: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white'
    }} onPress={handleFriendEntryClick}>
        <Image
        source={{uri: props.profileImage}}
        style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            marginRight: 10
        }}>
        </Image>
        <Text>{props.name}</Text>
    </TouchableOpacity>)
}

export default MessageSlab;

