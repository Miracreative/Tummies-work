import React from 'react';
import {View, Image, ImageBackground,  SafeAreaView, } from 'react-native';
import styled from './style.scss';
import {icons} from "../../constants";
import BtnButton from '../../Components/Button/Button';
// import {useTranslation} from 'react-i18next';
import Header from '../../Components/Header/Header';
import Slider from '../../Components/Slider/Slider';

export default function Main({ navigation}) {
    // const {t} = useTranslation();
	

  return (
	
    <View style={styled.container}>
			<SafeAreaView style={{flex:1}}>
			<View style={{flex: 0.8}}>
					<Header onPress={() => console.log('mainScreen')} isBack={false} lang={true} isWhite={true}/>
					<Image
						style={styled.image}
						source={icons.redTitle}/>
					<Slider />
				</View>
				<View style={{flex: 0.2, marginBottom: 20}}>
					<BtnButton 
					// onPress={() => {navigation.navigate('Account')}} 
					onPress={() => console.log('Press')}
					title={'Get started'} buttonStyle={{marginTop: 15, backgroundColor:"#FFFFFF"}} textStyle={{color: 'rgba(12, 3, 0, 1)'}} arrow={true} />
					<BtnButton 
					// onPress={() => navigation.navigate('Auth')} 
					onPress={() => console.log('Press')}

					title={"Log in"} buttonStyle={{marginTop: 15, marginBottom: 20 }} textStyle={{color: '#FFFFFF'}}/>
					
				</View>
			</SafeAreaView>
    </ View>
  );
}
