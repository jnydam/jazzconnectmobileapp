import React from 'react';

import {View, TouchableOpacity, Image, Text} from 'react-native';

const HorizComponent = (props) => {

    return (
        <View style={{
            flex: 2,
            margin: 20,
            textAlign: 'center'
        }}>
            <TouchableOpacity
            style={{
                overflow: 'visible'
            }}
            
            onPress={() => {

                props.navigation.navigate(props.title);

            }}>
            <View style={{
                alignItems: 'center'
            }}>
            <View style={{
                borderRadius: 10,
                overflow: 'hidden'
            }}>
                
                    <Image
                    source={{uri: props.imageUrl}}
                    style={{
                        height: 70, 
                        width: 70}}
                    ></Image>
                
            </View>
                <Text
                >{props.title}</Text>
            </View>

            </TouchableOpacity>
        </View>
    )
}

export default HorizComponent;