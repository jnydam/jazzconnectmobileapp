import axios from 'axios';
import React, {useState} from 'react';

import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const RegisterScreen = (props) => {

    const textFontSize = 20;

    const [ firstNameInput, setFirstNameInput] = useState("");
    const [ lastNameInput, setLastNameInput] = useState("");
    const [ emailInput, setEmailInput] = useState("");
    const [ primaryInstrument, setPrimaryInstrument] = useState("");
    const [ passwordInput, setPasswordInput] = useState("");

    const handleRegistrationSubmit = () => {


        let userObject = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            instrument: primaryInstrument,
            password: passwordInput
        }

        axios.post("http://localhost:3000/users/register", userObject)
        .then((res) => {

            console.log(res.data);

            

        })
        .catch((err) => {

            console.log(err);

            console.log("There was a problem");
        })

    }
 
    return (
    

        <View style={[{
            backgroundColor: '#FFD580',
            flex: 8,
            width: '100%',
            borderRadius: 30,
            marginTop: 50,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
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
            }}>Create a JazzConnect Account!</Text>
            <View style={{
                marginTop: 10,
                alignItems: 'center'
            }}>
                
                <View style={styles.registerScreenSubView}>
                    <Text style={{fontSize: textFontSize}}>First name: </Text>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        width: '50%',
                        padding: 5
                    }}>
                        <TextInput placeholder="Enter first name" onChangeText={(text) =>{
                            setFirstNameInput(text);
                        }}></TextInput>
                    </View>
                </View>
                <View style={styles.registerScreenSubView}>
                    <Text style={{fontSize: textFontSize}}>Last name: </Text>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        width: '50%',
                        padding: 5
                    }}>
                        <TextInput placeholder="Enter last name" onChangeText={(text) => {
                            setLastNameInput(text);
                        }}></TextInput>
                    </View>
                </View>
                <View style={styles.registerScreenSubView}>
                    <Text style={{ width: '40%',fontSize: textFontSize}}>Email: </Text>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        width: '50%',
                        padding: 5
                    }}>
                        <TextInput placeholder="Enter email" onChangeText={(text) => {
                            setEmailInput(text);
                        }}></TextInput>
                    </View>
                </View>
                <View style={styles.registerScreenSubView}>
                    <Text style={{ fontSize: textFontSize, alignSelf: 'center'}}>Primary Instrument: </Text>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        width: '50%',
                        padding: 5
                    }}>
                        <TextInput placeholder="Enter instrument" onChangeText={(text) => {
                            setPrimaryInstrument(text);
                        }}></TextInput>
                    </View>
                </View>
                <View style={styles.registerScreenSubView}>
                    <Text style={{fontSize: textFontSize}}>Password: </Text>
                    <View style={{
                        backgroundColor: 'lightgrey',
                        borderRadius: 5,
                        width: '50%',
                        padding: 5
                    }}>
                        <TextInput secureTextEntry={true} 
                        placeholder="Enter password" onChangeText={(text) => {
                            setPasswordInput(text);
                        }}></TextInput>
                    </View>
                </View>
                <Button onPress={handleRegistrationSubmit} title="Let's go!">

                </Button>


            </View>

        </View>
    
    )
}


const styles = StyleSheet.create({
    registerScreenSubView: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'flex-start',
      width: '70%'
    },
    textInputStyle: {
        padding: 5,
        width: '100%'
    }
});

export default RegisterScreen;