import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const FindVenuesTab = (props) => {

    return (<View style={styles.FindVenuesContainer}>
        <Text style={{
            fontSize: 20,
            flex: 1
        }}>Find Venues Near You</Text>
        <View style={{
            flex: 1,
            margin: 5
        }}>
            <Text>
                An app where jazz enthusiasts can search
                for various clubs and play
                with other musicians around your area!
                
            </Text>
        </View>

        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 2,
            marginBottom: 30

        }}>



        </View>

        <View style={[{
            backgroundColor: '#FFD580',
            flex: 8,
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
            }}>Find a Venue</Text>

 
        </View>
    </View>)
}

const styles = StyleSheet.create({
    FindVenuesContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});

export default FindVenuesTab;

