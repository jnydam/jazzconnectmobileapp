import React, {useEffect, useState} from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';
import MessageSlab from '../components/UI/MessageSlab';
import MessageInteractiveBox from '../components/UI/MessageInteractiveBox';

import { io } from 'socket.io-client';


const MessagesScreen = (props) => {

    const [socket, setSocket] = useState(io("http://localhost:3000"));

    const [selectedFriend, setSelectedFriend] = useState("");

    const [self, setSelf] = useState("Donald Trump");

    const [messages, setMessages] = useState([]);



    useEffect(() => {

        let mounted = true;

        if (mounted) {

            socket.on("connect", () => {


                console.log("We have conncted?");
            });

            socket.on("updateMessages", (messages) => {

                console.log("We got to the update messages screen");
                console.log(messages);

                setMessages(messages);

            });

            socket.on('greeting', (message) => {

                console.log(message);

            });

            return () => {

                mounted = false;

                socket.on("disconnect", () => {

                    console.log("We have disconnected");
                })
            }

        }


    }, [socket]);

    const switchFriendHandler = (name) => {

        setSelectedFriend(name);
    }

    const upperSendMessageHandler = (message) => {

        socket.emit('chatRoomMessage', {
            from: self, 
            message: message,
            to: selectedFriend});
        
    }



    let dummyFriendInfo = [

        {
            name: 'Barack Obama',
            profileImage: 'https://d3hjzzsa8cr26l.cloudfront.net/516e6836-d278-11ea-a709-979a0378f022.jpg?pw=260'

        },
        {
            name: 'Donald Trump',
            profileImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg'
        },
        {
            name: 'Kamala Harris',
            profileImage: 'https://cdn.britannica.com/09/193109-050-51B44FEE/Kamala-Harris.jpg'
        },
        {
            name: 'Joe Biden',
            profileImage: 'https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg'
        },
        {
            name: 'Hillary Clinton',
            profileImage: 'https://cdn.britannica.com/54/128454-050-6442E633/Hillary-Rodham-Clinton-2009.jpg'
        }
    ];

    dummyFriendInfo = dummyFriendInfo.filter((friend) => (friend.name != self));

    return (<View style={styles.messagesTabContainer}>


        <View
        style={{
            flex: 2,
            marginBottom: 30,
            width: '100%'

        }}>
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                <TextInput placeholder="Change self"
                onChangeText={(text) => setSelf(text)}></TextInput>
            </View>

            {dummyFriendInfo.map((friend) => (
                <View key={friend.name}>
                    <MessageSlab notifyMessagesScreen={switchFriendHandler} name={friend.name} 
                    profileImage={friend.profileImage}></MessageSlab>
                </View>
            ))}
            



        </View>

        <View style={[{
            backgroundColor: '#FFD580',
            flex: 4,
            width: '100%',
            borderRadius: 30,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            alignItems: 'center'
        }, {
            shadowColor: 'black',
            shadowRadius: 5,
            shadowOpacity: 1
        }]
        }>
            <Text style={{
                marginTop: 15,
                fontSize: 24,
                textAlign: 'center',
                marginBottom: 10
            }}>{selectedFriend}</Text>

            <MessageInteractiveBox 
            messages={messages}
            self={self} 
            friend={selectedFriend}
            sendMessageFunction={upperSendMessageHandler}></MessageInteractiveBox>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    messagesTabContainer: {
      marginTop: 10,
      alignItems: 'flex-start',
      flex: 9
    }
});


export default MessagesScreen;