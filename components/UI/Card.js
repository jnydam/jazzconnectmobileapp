import React from 'react';

import { View, Text } from 'react-native';

const Card = (props) => {

    return (<View style={{borderColor: 'red', borderWidth: 2}}> 
        <Text>{props.children}</Text>
    </View>)
}

export default Card; 