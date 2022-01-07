import React, {useContext, useState, useEffect} from 'react';

import { View, Text, Animated } from 'react-native';
import DrawerTab from '../components/UI/DrawerTab';

import { LocationContext } from '../LocationContext';

const DrawerView = (props) => {


    const { setMenuButtonClicked, 
        menuButtonClicked, 
        setMenuButtonBusy,
        menuButtonBusy } = useContext(LocationContext);

    const [ drawerShown, setDrawerShown ] = useState(false);

    const [drawerXScaling, setDrawerXScaling] = useState(new Animated.Value(-200));
    const [drawerOpacityAnimation, setDrawerOpacityAnimation] = useState(new Animated.Value(0));

    const [overlayViewAnimation, setOverlayViewAnimation] = useState(new Animated.Value(-500));


    useEffect(() => {

        if (!drawerShown && menuButtonClicked) {


            Animated.timing(overlayViewAnimation, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true
            }).start(() => {
                Animated.parallel([
                    Animated.timing(drawerXScaling, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true
                    }),
                    Animated.timing(drawerOpacityAnimation, {
                        toValue: 0.2,
                        duration: 700,
                        useNativeDriver: true
                    })
                ]).start(() => {

                    setDrawerXScaling(new Animated.Value(0));
                    setDrawerShown(true);
                    setDrawerOpacityAnimation(new Animated.Value(0.2));
                    setOverlayViewAnimation(new Animated.Value(0));

                    let prevStateMenuButtonBusy = menuButtonBusy;
                    setMenuButtonBusy(!prevStateMenuButtonBusy);

                })
            })


        } else if (drawerShown && !menuButtonClicked) {

            Animated.parallel([
                Animated.timing(drawerXScaling, {
                    toValue: -200,
                    duration: 300,
                    useNativeDriver: true
                }),
                Animated.timing(drawerOpacityAnimation, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                })
            ]).start(() => {

                Animated.timing(overlayViewAnimation, {

                    toValue: -500,
                    duration: 75,
                    useNativeDriver: true
                }).start(() => {


                    setDrawerXScaling(new Animated.Value(-200));
                    setDrawerShown(false);
                    setDrawerOpacityAnimation(new Animated.Value(0));
                    setOverlayViewAnimation(new Animated.Value(-500));

                    let prevStateMenuButtonBusy = menuButtonBusy;
                    setMenuButtonBusy(!prevStateMenuButtonBusy);
                });
            });

 
        }

    }, [drawerShown, menuButtonClicked]);


    let drawerViewStyleAnimatedOne = {
        transform: [{translateX: drawerXScaling}]
    }

    let drawerViewStyleAnimatedTwo = {
        opacity: drawerOpacityAnimation
    }

    let overlayViewStyleAnimation = {
        transform: [{translateX: overlayViewAnimation}]
    }



    return (
        <Animated.View style={[{
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            flexDirection: 'row'}, overlayViewStyleAnimation]}>
            <Animated.View style={[{backgroundColor: 'white', flex: 2, opacity: 0.9}, drawerViewStyleAnimatedOne, {shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 2,}] }>
            <DrawerTab name="Jams" navigation={props.navigation}></DrawerTab>
            <DrawerTab name="Messages" navigation={props.navigation}></DrawerTab>
            </Animated.View>
            <Animated.View style={[{backgroundColor: 'black', flex: 2}, drawerViewStyleAnimatedTwo]}>
            </Animated.View>
        </Animated.View>
        )
}

export default DrawerView;

