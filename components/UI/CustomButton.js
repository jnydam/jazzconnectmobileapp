import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const CustomButton = (props) => {

    return (    
        <TouchableOpacity>
            <View style={{
                backgroundColor: 'yellow',
                borderRadius: 20,
                padding: 10
            }}>
                <Text>{props.btnText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton;
