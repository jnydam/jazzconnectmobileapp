
import React, { useEffect, useState } from 'react';
import MainNavigator from './navigators/MainNavigator';
import * as Location from 'expo-location';
import { LocationContext } from './LocationContext';

export default function App() {

  const [locationState, setLocationState] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [menuButtonClicked, setMenuButtonClicked] = useState(false);
  const [menuButtonBusy, setMenuButtonBusy] = useState(false);
  const [isAuth, setIsAuth] = useState(true);


  const retrieveLocation = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg("Permission for location has been denied");
      return;
    } else {
      console.log("Permission has been granted");
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocationState(location);


  }

  useEffect(() => {

      
      retrieveLocation();


  }, []);


  let contextObject = {
    locationState: locationState,
    menuButtonClicked: menuButtonClicked,
    setMenuButtonClicked: setMenuButtonClicked,
    menuButtonBusy: menuButtonBusy,
    setMenuButtonBusy: setMenuButtonBusy,
    isAuth: isAuth,
    setIsAuth, setIsAuth


  };

  

  return (
      <LocationContext.Provider value={contextObject}>
        <MainNavigator currentLocation={locationState}></MainNavigator>
      </LocationContext.Provider>
  );
}

