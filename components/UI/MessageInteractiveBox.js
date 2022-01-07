import React, {useState} from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MessageBubble from './MessageBubble';


const MessageInteractiveBox = (props) => {

    const [text, setText] = useState("");

    const handleSendText = () => {

        props.sendMessageFunction(text);

    };

    return (<View style={{ flexDirection: 'column', height: '100%', width: '100%'}}>
        <View style={[{height: 330, 
            backgroundColor: '#F8F8F8',
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 5,
            borderRadius: 10}, {
                shadowRadius: 2,
                shadowOpacity: 0.05
            }]}>

            {props.messages.map((message) => (

                <View>
                    <MessageBubble selfProp={props.self}
                     messageObject={message}
                     friendProp={props.friend}></MessageBubble>
                </View>

            ))}

            
        </View>
        <View style={[{
            width: '100%', 
            flexDirection: 'row',
            backgroundColor: 'lightblue',
            height: 90,
            padding: 10,
            paddingBottom: 40}, {shadowRadius: 3, shadowOpacity: 0.25}]}>
            <TextInput style={{flex: 5, 
                backgroundColor: 'white',
                borderRadius: 10,
                marginRight: 20, padding: 5}} 
                placeholder="Say something!"
                onChangeText={(text) => setText(text)}></TextInput>
            <TouchableOpacity style={{flex: 1}} onPress={handleSendText}>
                <View style={[{
                    backgroundColor:'orange',
                    padding: 10,
                    borderRadius: 10
                }, {
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    shadowOffset: {
                        width: 0,
                        height: 0
                    }
                }]}>
                    <Text style={{textAlign: 'center'}}>Send</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>)
}

export default MessageInteractiveBox;