import React from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

const PlaceEntry = (props) => {

    const handlePlaceEntryClick = () => {

        props.handlePlaceClick(props.id);

    }

    return (<TouchableOpacity style={[{
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        width: '80%',
        borderRadius: 20,
        backgroundColor: 'lightgrey'
    }, {
        shadowOffset: {
            width: 0.2,
            height: 0.2
        },
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 9,
    }]} onPress={handlePlaceEntryClick}>
        <Text style={{fontSize: 20, marginTop: 10, textAlign: 'center'}}>{props.name}</Text>
        <Text style={{marginBottom: 10, textAlign: 'center', width: '70%'}}>{props.address}</Text>
    </TouchableOpacity>)
}

export default PlaceEntry;