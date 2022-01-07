import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const FeedTab = (props) => {


    return (<View style={styles.feedTabContainer}>
        <Text>This is the feed tab</Text>
    </View>)
}

const styles = StyleSheet.create({
    feedTabContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});

export default FeedTab;

