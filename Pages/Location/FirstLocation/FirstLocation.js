import React from 'react';
import { Text, View, SafeAreaView, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import BtnButton from '../../../Components/Button/Button';
import {icons} from "../../../constants";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import Header from '../../../Components/Header/Header';
import styled from "./styles.js";
export default function FirstLocation({ navigation }) {
    const {t} = useTranslation();
	
  return (
    <View
        style={styled.container} >
            <ImageBackground
                style={styled.back}
                source={icons.backFull}>
                      <SafeAreaView style={styled.location}>
                        <View style={{flex: 0.1}}>
                        <Header 
                            onPress={() => navigation.goBack()} 
                            isBack={true} 
                            lang={true} 
                            isWhite={false}
                            onPressEntertaiment={() => navigation.navigate('Entertaiment')}
                            onPressCatering={() => navigation.navigate('Catering')}
                            />
                        </View>

                        <View 
                        style={{flex: 0.65}}
                        >
                        
                            <ImageBackground 
                                resizeMode='contain'
                                style={{flex: 1}}
                                source={icons.firstLocation}>
                                    
                                    <Text
                                        style={[styled.title, {fontSize: RFValue ( 24,  740)}]}>
                                        {t('locationTitle')}
                                    </Text>
                                    <Text
                                        style={[styled.text, {fontSize: RFValue ( 14,  740)}]}>
                                        {t('locationText')}
                                    </Text>
                            </ImageBackground>
                        </View>
                        <View 
                            style={{flex: 0.25}}
                            >
                            <BtnButton onPress={() => navigation.navigate('AutoLocation')} title={t('shareLocation')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                            <BtnButton onPress={() => navigation.navigate('ChooseLocation')} title={t('chooseMannualy')} buttonStyle={{backgroundColor: 'rgba(244, 237, 225, 1)', borderStyle: 'solid', borderWidth: 2, borderColor: 'transparent', width: '50%'}} textStyle={{color: '#0C0300'}}/>
                        </View>
            </SafeAreaView>
        </ImageBackground>
     
    </View>

  );
}