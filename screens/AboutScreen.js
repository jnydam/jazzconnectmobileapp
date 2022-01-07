import React from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

import AboutScreenComponent from '../components/AboutScreenComponent';

const AboutScreen = (props) => {

    return (
        <View style={{
            textAlign: 'center',
            marginTop: 10,
            alignItems: 'center'
        }}>
            <Text style={styles.aboutScreenHeaderText}>
                What is JazzersConnect?
            </Text>
            <Text style={{
                margin: 10
            }}>
            the new innovative way to find jazz clubs
                to either listen to some good jazz music,
                or jam with various friends
            </Text>
            <AboutScreenComponent></AboutScreenComponent>
            <Text style={{
                margin: 10
            }}>
                Please register to join 
                a growing community of flourishing
                jazzers!
            </Text>
            <View style={{
                width: '50%',
                height: '50%'
            }}>
                <Button 
                    title="Register"
                    onPress={() => {
                        props.navigation.navigate('Register');
                    }}>

                </Button>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    aboutScreenHeaderText: {
      fontSize: 20
    }
  });

export default AboutScreen;