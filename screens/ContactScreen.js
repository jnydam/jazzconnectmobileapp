import React from 'react';

import { View, Text } from 'react-native';

const ContactScreen = (props) => {

    return (
        <View style={{
            marginTop: 10,
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <Text style={{
                marginBottom: 10
            }}>This is the Contacts Screen</Text>
            <View>
                <Text>Developer: John Nydam</Text>
                <Text>Creation Date: September 21, 2021</Text>
            </View>
        </View>
    )
}

export default ContactScreen;