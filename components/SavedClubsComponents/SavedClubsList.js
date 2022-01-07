import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Card from '../UI/Card';

const Item = (item) => (
    <View style={{
        margin: 5
    }}key={item.name}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>{item.hours}</Text>
        {item.favoritesSetting ? <Text
        style={{
            color: 'green'
        }}>This is a favorite!</Text> : null}
    </View>
);

const SavedClubsList = (props) => {

    // this is a comment for the cpa4 submittal

    let numberShown = props.numberShown;

    const renderItem = ({item}) => (
        <Item name={item.name} address={item.address} hours={item.hours}></Item>
    )

    const dummyClubs = [
        {
            name: "The moreHigha",
            address: '450 Scranton Avenue',
            hours: '7AM - 7PM'
        },
        {
            name: 'Schullers',
            address: 'Cambridge',
            hours: '1PM - 9PM'
        },
        {
            name: 'The Beehive',
            address: 'Boston',
            hours: '1PM - 9PM'
        },
        {
            name: 'Outpost 186',
            address: 'Framingham',
            hours: '2PM = 1AM'
        },
        {
            name: 'Arts Center',
            address: 'Hopkinton',
            hours: '1 AM - 1 PM'
        }
    ]

    const [savedClubs, setSavedClubs] = useState([]);

    const [numClubs, setNumClubs] = useState(0);


    useEffect(() => {

        getData();

    }, []);

    const getData = async () => {
        try {


            let data = null
            const jsonValue = await AsyncStorage.getItem('clublist');

            if (jsonValue == null) {

                console.log("Something went wrong or this is the first time playing");
            }
            
            if (jsonValue != null) {

                data = JSON.parse(jsonValue);
                console.log("Data1 is" + data);

                setSavedClubs(data);
            }

        } catch(e) {

            console.dir(e)
        }
    }


    let slicedArray = savedClubs.slice(0, numberShown);

    const handlePopulate = async () => {

        let jsonArray = JSON.stringify(dummyClubs);


        await AsyncStorage.setItem('clublist', jsonArray);
    }

    const handleCalculate = () => {


        let length = slicedArray.length;

        setNumClubs(length);

    }



    return (<View>
        <Text>This is the list coponent for the saved clubs</Text>
        <Button title="Populate storage" onPress={handlePopulate}></Button>
        <Text>Calculate how many clubs are listed!</Text>
        <Button title="Calculate club number" onPress={handleCalculate}></Button>
        {slicedArray.map((object) => (
            <View style={{
                margin: 5
            }}key={object.name}>
                <Text>{object.name}</Text>
                <Text>{object.address}</Text>
                <Text>{object.hours}</Text>
                {props.favoritesSetting ? <Text
                style={{
                    color: 'green'
                }}>This is a favorite!</Text> : null}
            </View>
        ))}

        <Text>Now for the flatlist example</Text>
        <Card>This is a card using the container children prop</Card>
        <FlatList
        data={dummyClubs}
        renderItem={renderItem}
        keyExtractor={item => item.name}>

        </FlatList>
        <Text>There are currently {numClubs} listed!</Text>
    </View>)

}

export default SavedClubsList;

