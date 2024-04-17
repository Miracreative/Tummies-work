import React from 'react';
import {View, Image,  SafeAreaView, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import {icons} from "../../../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Linking from 'expo-linking';
import Header from '../../../Components/Header/Header';
import { useSelector} from 'react-redux';
import styled from "./styles.js";

export default function CateringDetail({ navigation}) {

    const numberPhone = useSelector(state => state.catering.number)
    const {t} = useTranslation();

    const phoneLink = numberPhone.replaceAll(' ', '');
    return (
	
    <View style={styled.container}>
        <ImageBackground
            resizeMode="cover"
            style={styled.back}
            source={icons.backFull}>
            <SafeAreaView style={{flex:1}}>
            <Header onPress={() => navigation.goBack()} 
					isBack={true} 
					lang={false} 
					isWhite={false}
					onPressEntertaiment={() => navigation.navigate('Entertaiment')}
                    onPressCatering={() => navigation.navigate('Catering')}
					/>
            <View style={{flex: .5}}>
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("catering")}</Text>
                <Text style={[styled.descr, {fontSize: RFValue ( 16 ,  740)}]}>{t("cateringDescr")}</Text>
            </View>
            <View style={{flex: .5}}>
                <Text style={[styled.subtitle, {fontSize: RFValue ( 20 ,  740)}]}>{t("contactNumber")}</Text>
                <TouchableOpacity  onPress={() => Linking.openURL(`tel:{${phoneLink}}`)} >
                    <Text style={[styled.link, {fontSize: RFValue ( 36,  740)}]}>{numberPhone}</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        </ImageBackground>
       
    </ View>
  );
}
