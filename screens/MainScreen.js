import React, {useEffect, useState, useContext} from 'react';

import HorizComponent from '../components/HorizComponent';
import TabButton from '../components/UI/TabButton';

import FindVenuesTab from '../tabs/FindVenuesTab';
import FeedTab from '../tabs/FeedTab';
import YourVenuesTab from '../tabs/YourVenuesTab';
import AccountTab from '../tabs/AccountTab';
import MainTab from '../tabs/MainTab';

import { LocationContext } from '../LocationContext';

import DrawerView from './DrawerView';

import VenueDetailTab from '../tabs/VenueDetailTab';

import { StyleSheet, View, Text, Button, TouchableOpacity, Animated } from 'react-native';

const MainScreen = (props) => {

    const [currentTab, setCurrentTab] = useState("Home");
    const [detailSelectedArray, setDetailSelectedArray] = useState([false, false, false, false, false]);
    const [venueIdArray, setVenueIdArray] = useState([0, 0, 0, 0, 0]);

    const {isAuth} = useContext(LocationContext);


    const handleTabSwitching = (buttonTabText) => {

        console.log("Hopefully this does something?");
        console.log(buttonTabText);

        setCurrentTab(buttonTabText);


    };


    const handleDetailSwitch = (venueId) => {

        console.log("This is the function which handles the detail switch");
        console.log("And here is the final venueId");
        console.log(venueId);

        let state1 = detailSelectedArray[0];
        let state2 = detailSelectedArray[1];
        let state3 = detailSelectedArray[2];
        let state4 = detailSelectedArray[3];
        let state5 = detailSelectedArray[4];

        let num1 = venueIdArray[0];
        let num2 = venueIdArray[1];
        let num3 = venueIdArray[2];
        let num4 = venueIdArray[3];
        let num5 = venueIdArray[4];

        if (currentTab == 'Home') {
            
            state1 = !state1;
            num1 = venueId;
        }



        setDetailSelectedArray([state1, state2, state3, state4, state5]);
        setVenueIdArray([num1, num2, num3, num4, num5]);

    };

    const switchToOverview = () => {

        let state1 = detailSelectedArray[0];
        let state2 = detailSelectedArray[1];
        let state3 = detailSelectedArray[2];
        let state4 = detailSelectedArray[3];
        let state5 = detailSelectedArray[4];


        if (currentTab == 'Home') {
            state1 = !state1;
        }

        setDetailSelectedArray([state1, state2, state3, state4, state5]);

    };


    return (
        <View style={{flex: 1}}>
            {currentTab == "Home" && !detailSelectedArray[0] ? <MainTab
                                                             navigation={props.navigation}
                                                             handleMainScreenDetailSwitch={handleDetailSwitch}></MainTab> : null}
            {currentTab == 'Feed' && !detailSelectedArray[1] ? <FeedTab navigation={props.navigation}></FeedTab> : null}
            {currentTab == "Find Venues" && !detailSelectedArray[2] ? <FindVenuesTab></FindVenuesTab> : null}
            {currentTab == "Your Venues" && !detailSelectedArray[3] ?  <YourVenuesTab></YourVenuesTab> : null}
            {currentTab == 'Account' && !detailSelectedArray[4] ? <AccountTab></AccountTab> : null}

            {currentTab == 'Home' && detailSelectedArray[0] ? <VenueDetailTab backToOverview={switchToOverview} venueId={venueIdArray[0]}></VenueDetailTab> : null}
            {currentTab == 'Feed' && detailSelectedArray[1] ? <VenueDetailTab venueId={venueIdArray[1]}></VenueDetailTab> : null}
            {currentTab == 'Find Venues' && detailSelectedArray[2] ? <VenueDetailTab venueId={venueIdArray[2]}></VenueDetailTab> : null}
            {currentTab == 'Your Venues' && detailSelectedArray[3] ? <VenueDetailTab venueId={venueIdArray[3]}></VenueDetailTab> : null}
            {currentTab == 'Account' && detailSelectedArray[4] ? <VenueDetailTab venueId={venueIdArray[4]}></VenueDetailTab> : null}
            {isAuth ? <View style={{
                flexDirection: 'row',
                flex: 1,
                backgroundColor: 'orange'
            }}>
                
                <TabButton text="Home" selected={currentTab} handleSwitch={handleTabSwitching}></TabButton>
                <TabButton text="Feed" selected={currentTab} handleSwitch={handleTabSwitching}></TabButton>
                <TabButton text="Find Venues" selected={currentTab} handleSwitch={handleTabSwitching}></TabButton>
                <TabButton text="Your Venues" selected={currentTab} handleSwitch={handleTabSwitching}></TabButton>
                <TabButton text="Account" selected={currentTab} handleSwitch={handleTabSwitching}></TabButton>
            </View> : null}
            <DrawerView navigation={props.navigation}></DrawerView>
           
        </View>
    )
};


const styles = StyleSheet.create({
    mainScreenContainer: {
      marginTop: 10,
      alignItems: 'center',
      flex: 1
    }
  });

export default MainScreen;