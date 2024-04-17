import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { Text, View, Image, Alert, SafeAreaView, Pressable} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {LinearGradient} from 'expo-linear-gradient';
import * as Location from 'expo-location';
import MapView, {Marker} from 'react-native-maps';
import {useTranslation} from 'react-i18next';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {addr, lat, long, build1, street1, area1} from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button.js';
import {icons} from "../../../constants/index.js";
import Header from '../../../Components/Header/Header.js';
import styled from "./styles.js";
export default function AutoLocation({ navigation }) {
    const latitude = useSelector(state => state.userInfo.latitude);
    const longitude = useSelector(state => state.userInfo.longitude);
    
    const dispatch = useDispatch();
    const {t} = useTranslation();
	const [location, setLocation] = useState();
    const [area, setArea] = useState();
    const [street, setStreet] = useState();
    const [building, setBuilding] = useState();
    const [disable, setDisable] = useState(true);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        t('wait')
      );

    useEffect(() => {
        const getPermissions = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();

            if( status !== 'granted') {
                Alert.alert(
                    'Permission not granted',
                    'Allow the app to use location service.',
                    [{ text: 'OK' }],
                    { cancelable: false })
            }

            let currentLocation = await Location.getCurrentPositionAsync();
            setLocation(currentLocation);
            dispatch(lat(currentLocation.coords.latitude))
            dispatch(long(currentLocation.coords.longitude))
            let { coords } = await Location.getCurrentPositionAsync();
            if(coords) {
                const {latitude, longitude} = coords;
                let response = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude
                })
                for (let item of response) {
                    let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
                setArea(item.city);
                setStreet(item.street);
                setBuilding(item.name);
                
                if(!item.city?.indexOf('Mountain View') || !item.city?.indexOf('الرياض')) {
                    setDisplayCurrentAddress(address);
                    setDisable(false);
                } else {
                    console.log(item.city)
                    setDisplayCurrentAddress(t('sorry'));
                    setDisable(true);
                }
                
            }
        } }
        const CheckIfLocationEnabled = async () => {
            let enabled = await Location.hasServicesEnabledAsync();
        
            if (!enabled) {
              console.log('not enabled')
            } else {
              setLocationServiceEnabled(enabled);
              console.log(enabled)
            }
        }
        getPermissions()
        
        // CheckIfLocationEnabled();
    }, [])

    const myRegion = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: .1,
        longitudeDelta: .1
    }


    //для нижнего списка

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ["5%", "35%"], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, []);
   
  return (
    
        <View style={styled.location}>
            <SafeAreaView style={styled.location}>
                <Header onPress={() => navigation.goBack()} isButtons={false}/>
                <LinearGradient
                    colors={['black', 'gray', 'transparent']}
                    style={styled.gradient}>
                </LinearGradient>
                <MapView style={styled.map}
                    onPress={(e) => {
                        dispatch(lat(e.nativeEvent.coordinate.latitude))
                        dispatch(long(e.nativeEvent.coordinate.longitude))
                        const getPermissions2 = async () => {
                        let response = await Location.reverseGeocodeAsync({
                            latitude : e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude
                        })
                        for (let item of response) {
                            let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
                            setDisplayCurrentAddress(address)
                            if(!item.city?.indexOf('Mountain View') || !item.city?.indexOf('الرياض')) {
                                setDisplayCurrentAddress(address);
                                setDisable(true);
                            } else {
                                setDisplayCurrentAddress(t('sorry'));
                                setDisable(true);
                            }
                        }
                    }
                        getPermissions2();
                    }}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: .1,
                        longitudeDelta: .1

                    }}
                    region={myRegion}
                    showsUserLocation={true}
                    onRegionChangeComplete={region => {region}}
                        >
                    <Marker 
                        // coordinate={myRegion} 
                        coordinate={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: .1,
                            longitudeDelta: .1
                        }} 
                        style={styled.pin}>
                            <Image
                            source={icons.pin} />
                    </Marker>
                </MapView>
                    <BottomSheet
                
                        ref={bottomSheetRef}
                        index={1}
                        // onChange={()=>handleSheetChanges()}
                        snapPoints={snapPoints}
                        backgroundStyle={borderRadius= '20px 20px 0 0' }>

                    
                    <View style={{justifyContent: 'space-between'}}> 
                        <Image 
                                source={icons.pin} 
                                style={styled.image}/>
                        <Text style={[styled.address, {fontSize: RFValue ( 18 ,  740)}]}>{displayCurrentAddress}</Text>
                            <BtnButton onPress={() => {
                                navigation.navigate("ApplyLocation");
                                dispatch(addr(displayCurrentAddress))
                                dispatch(area1(area))
                                dispatch(street1(street))
                                dispatch(build1(building))
                            }} title={t('add')} buttonStyle={{backgroundColor: '#F55926', opacity: disable ? .7 : 1, pointerEvents: disable ? 'none' : 'auto'}} textStyle={{color: 'rgba(244, 237, 225, 1)'}}/>
                    </View>
                </BottomSheet>
            </SafeAreaView>
    </View>
    
    
  );
}