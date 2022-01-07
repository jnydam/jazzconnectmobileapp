import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

import CustomButton from '../components/UI/CustomButton';
import SavedClubsList from '../components/SavedClubsComponents/SavedClubsList';

const SavedClubsScreen = (props) => {

    const [numberShown, setNumberShown] = useState(0);
    const [favoritesOn, setFavoritesOn] = useState(false);

    useEffect(() => {

        

    }, []);

    return (<View style={styles.mainContainerStyle}>
        <Text style={{fontSize: 32, marginBottom: 12}}>Below you will find a list of your saved clubs</Text>
        <Text>Please choose how many clubs you would like to view on the screen</Text>
        <TextInput style={{
            marginBottom: 56
        }} placeholder={"Type a number"} onChangeText={(text) => {
            setNumberShown(parseInt(text));
        }}></TextInput>
        <Text>Press this button to toggle your favorites</Text>
        <Button title="Toggle" onPress={() => {
            let prevState = favoritesOn;
            setFavoritesOn(!prevState);
        }}></Button>
        <SavedClubsList numberShown={numberShown} favoritesSetting={favoritesOn}></SavedClubsList>
    </View>)
}

const styles = StyleSheet.create({

    mainContainerStyle: {
        alignItems: 'center'
    }
});

export default SavedClubsScreen;

