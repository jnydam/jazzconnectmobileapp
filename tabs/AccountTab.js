import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const AccountTab = (props) => {


    return (<View style={styles.accountTabContainer}>
        <Text>This is your account tab</Text>
    </View>)
}

const styles = StyleSheet.create({
    accountTabContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 9
    }
});

export default AccountTab;