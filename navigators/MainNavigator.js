import React, { useEffect, useState, useContext } from 'react';

import { View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LocationContext } from '../LocationContext';

import MainScreen from '../screens/MainScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SavedClubsScreen from '../screens/SavedClubsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import JazzersScreen from '../drawerScreens/JazzersScreen';
import MessagesScreen from '../drawerScreens/MessagesScreen';
import JamsScreen from '../drawerScreens/JamsScreen';
import MessagesDetailScreen from '../drawerScreens/MessagesDetailScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = (props) => {

    const [mainNavLocation, setMainNavLocation] = useState(props.currentLocation);


    const { menuButtonClicked, 
        setMenuButtonClicked,
        menuButtonBusy,
        setMenuButtonBusy, isAuth } = useContext(LocationContext);

    useEffect(() => {
        

        setMainNavLocation(props.currentLocation);
    }, [props.currentLocation]);



    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fed8b1'
                }
            }}
            >
                <Stack.Screen
                name="JazzConnect"
                component={MainScreen}
                options={{
                    title: 'JazzConnect',
                    headerRight: () => (

                        <View style={{
                            marginRight: 14
                        }}>
                            <Button color="darkorange" title="Login"></Button>
                        </View>

                    ),
                    headerLeft: () => (
                        <View style={{
                            marginRight: 14
                        }}>
                                {isAuth ? <Button disabled={menuButtonBusy} color="darkorange" title="Menu" onPress={() => {


                                let prevState = menuButtonClicked;
                                let prevStateMenuBusy = menuButtonBusy;

                                console.log("This is hte new state");
                                console.log(!prevState);

                                setMenuButtonClicked(!prevState);
                                setMenuButtonBusy(!prevStateMenuBusy);
                            }}></Button> : null}
                        </View>

                    )}

                }
                >

                </Stack.Screen>
                <Stack.Screen
                
                name="About"
                component={AboutScreen}
                
                >   
                </Stack.Screen>

                <Stack.Screen
                name="Contact"
                component={ContactScreen}>
                    
                </Stack.Screen>

                <Stack.Screen
                name="Register"
                component={RegisterScreen}>

                </Stack.Screen>

                <Stack.Screen
                    name="Messages"
                    component={MessagesScreen}
                >
                </Stack.Screen>

                <Stack.Screen
                
                    name="MessagesDetail"
                    component={MessagesDetailScreen}
                >

                </Stack.Screen>

                <Stack.Screen
                    name="Jams"
                    component={JamsScreen}
                >

                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator;