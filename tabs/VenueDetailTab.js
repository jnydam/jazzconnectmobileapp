import axios from 'axios';
import React from 'react';
import { useEffect, useState, useContext } from 'react';

import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, ScrollView, Image, Animated} from 'react-native';
import EventEntry from '../components/UI/EventEntry';

import { LocationContext } from '../LocationContext';

import { processRawEventData } from '../services/VenueDetailTabService';

const VenueDetailTab = (props) => {

    const [eventArray, setEventArray] = useState([]);
    const [venueName, setVenueName] = useState("");
    const [venueAddress, setVenueAddress] = useState("");
    const [venueImage, setVenueImage] = useState("");

    const {isAuth} = useContext(LocationContext);

    const [upcomingEventsTabPressed, setUpcomingEventsTabPressed] = useState(false);


    const [marginTopAnimated, setMarginTopAnimated] = useState(new Animated.Value(0));

    const handleBackToOverview = () => {

        props.backToOverview();

    };

    const handleUpcomingEventsTabAnimate = () => {

        let prevState = upcomingEventsTabPressed;

        let dynamicConvertValue = 0;

        if (!prevState) {
            dynamicConvertValue = -500;
        } else {
            dynamicConvertValue = 0;
        }

        Animated.timing(marginTopAnimated, {
            toValue: dynamicConvertValue,
            duration: 300,
            useNativeDriver: true
        }).start(() => {
            setUpcomingEventsTabPressed(!prevState);
        });
    };

    useEffect(() => {

        axios.get(`http://localhost:3000/venues/${props.venueId}/fulldetails`)
        .then(res => {

            let venueName = res.data[0].venueName;
            let venueImage = res.data[0].venueImage;
            let venueAddress = res.data[0].venueAddress;


            setVenueName(venueName);
            setVenueImage(venueImage);
            setVenueAddress(venueAddress);


            let eventArray = processRawEventData(res.data);

            setEventArray(eventArray);
        })
        .catch(err => {
            console.log(err);
        })


    }, [props.venueId]);

    let marginTopStyleAnimated = {
        transform: [{translateY: marginTopAnimated}]
    };


    return (<View style={styles.venueDetailTabContainer}>
        <Button onPress={handleBackToOverview} title="Back"></Button>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 5}}>{venueName}</Text>
        <Text style={{ fontStyle: 'italic', fontSize: 15, marginBottom: 5}}>{venueAddress}</Text>
        <Image style={{ borderRadius: 10, borderWidth: 2, width: 200, height: 200}} source={{uri: venueImage != "" ? venueImage : null}}></Image>
        <Animated.View style={[{
            backgroundColor: '#FFD580',
            width: '100%',
            flex: 6,
            position: 'absolute',
            borderRadius: 30,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            alignItems: 'center',
            marginTop: 610,
        }, marginTopStyleAnimated
        ,{
            shadowColor: 'black',
            shadowRadius: 5,
            shadowOpacity: 1
        }
    ]
        }> 
        <TouchableWithoutFeedback onPress={handleUpcomingEventsTabAnimate}>
            <View>
                <Text style={{
                            marginTop: 15,
                            fontSize: 24,
                            textAlign: 'center',
                            marginBottom: 10
                        }}>Upcoming Events
                </Text>
            </View>
        </TouchableWithoutFeedback>
            <ScrollView showsVerticalScrollIndicator={false} style={{height: isAuth ? 500 : 600}}>
                {eventArray.map((event, index) => (
                    <View style={{
                        alignItems: 'center',
                        position: 'relative'
                    }} key={index}>
                        <EventEntry 
                            name={event.name}
                            image={event.image}
                            date={event.date}></EventEntry>
                    </View>
                ))}
            </ScrollView>
            
            
        </Animated.View>
    
    </View>)
};

const styles = StyleSheet.create({
    venueDetailTabContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});

export default VenueDetailTab;