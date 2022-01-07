import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import SavedClubsList from '../components/SavedClubsComponents/SavedClubsList';

const YourVenuesTab = (props) => {

    return (<View style={styles.yourVenuesContainer}>
        <SavedClubsList></SavedClubsList>
    </View>)
}

const styles = StyleSheet.create({
    yourVenuesContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});

export default YourVenuesTab;