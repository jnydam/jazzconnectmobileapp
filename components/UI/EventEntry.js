import React from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

const EventEntry = (props) => {



    const handleEventEntryClick = () => {


        console.log("This will do nothing right now");
    }


    return (<TouchableOpacity style={[{
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        width: '95%',
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
    }]} onPress={handleEventEntryClick}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, marginRight: 10, marginLeft: 10, textAlign: 'center'}}>{props.name}</Text>
        <Text style={{marginBottom: 10, marginTop: 10, textAlign: 'center'}}>{props.date}</Text>
        <View style={{marginBottom: 10}}>
            <Image source={{uri: props.image}} style={{width: 200, resizeMode:'cover', height: 200, borderRadius: 200/2, borderWidth: 2}}></Image>
        </View>
    </TouchableOpacity>)
}

export default EventEntry;