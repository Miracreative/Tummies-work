import React from 'react';
import {View, Image,  SafeAreaView, Text, ScrollView} from 'react-native';
import styled from './style.scss';
import {icons} from "../../constants";
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Header from '../../Components/Header/Header';

export default function Entertaiment({ navigation}) {
    const {t} = useTranslation();
  return (
	
    <View style={styled.container}>
        <SafeAreaView style={{flex:1}}>
        <Header onPress={() => navigation.goBack()} 
					isBack={true} 
					lang={false} 
					isWhite={false}
					onPressEntertaiment={() => navigation.navigate('Entertaiment')}
					/>
            <ScrollView>
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("enter")}</Text>
                <View>

                </View>
            </ScrollView>
        </SafeAreaView>
    </ View>
  );
}
