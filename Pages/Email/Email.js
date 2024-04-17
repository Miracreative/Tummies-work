import React, {useState} from 'react';
import {Text, View, SafeAreaView, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Platform, StyleSheet, TouchableWithoutFeedback,Keyboard, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {userEmail} from './../../actions';
import { useDispatch } from 'react-redux';
import {useTranslation} from 'react-i18next';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./styles.js";
export default function Email({navigation}) {
    const {t} = useTranslation();
    const [email, setEmail] = useState(''); 
    const [valid, setValid] = useState(true);
    const [disable, setDisable] = useState(true);
   
    const dispatch = useDispatch();

    const validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
          setEmail(text)
          setValid(false)
          setDisable(true)    
        }
        else {
          setEmail(text)
          setValid(true)
          setDisable(false) 
        }
      }
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styled.container}>
          <View style={styled.container}>
             <ImageBackground
                resizeMode='cover'
                style={styled.back}
                source={icons.backRedFull}>
    
        <SafeAreaView style={styled.email}>
        <Header 
                    onPress={() => navigation.goBack()} 
                    isBack={true} 
                    lang={true} 
                    isWhite={true}
                    onPressEntertaiment={() => navigation.navigate('Entertaiment')}
                    onPressCatering={() => navigation.navigate('Catering')}
                    />
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
          <View style={styled.inner}>
            <ScrollView
                // style={[styled.wrapper, {flex: isShowKeyboard ? .2 : 0.48}]}
                
                >
                
                <Image
                    style={styled.image}
                    source={icons.headerName}/>
                <Text
                    style={[styled.subtitle, {fontSize: RFValue ( 22,  740)}]}>
                    {t('getStarted')}
                </Text>
                  
                <Image
                style={styled.img}
                source={icons.first} />

                <Text
                    style={[styled.title, {fontSize: RFValue ( 22,  740)}]}>
                    {t('eMail')}
                </Text>
                <TextInput
                    style={[styled.input, {borderColor: valid ? 'rgba(12, 3, 0, 0.5)' : '#FF0000', marginBottom: valid ? 60 : 39}]}
                    value = {email}
                    onChangeText = {(text)=> {validateEmail(text);}}
                    // onFocus={() => {setIsShowKeyboard(true);}}
                    // onBlur={() => {setIsShowKeyboard(false);
                    //     }}
                    
                />
                {valid ? 
                null : <Text style={[styled.error, {fontSize: RFValue ( 14,  740)}]}>{t('correctEmail')}</Text>
                }
                
            </ScrollView>
            <View style={{justifyContent: 'flex-end'}}>
                
                <View style={{marginBottom: 20}}>
                    <BtnButton onPress={() => {
                                                navigation.navigate('FirstLocation')
                                                dispatch(userEmail(email))}} title={t('continue')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', opacity: disable  ? .7 : 1, pointerEvents: disable ? 'none' : 'auto'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                
                </View>

            </View>
           
          </View>
        {/* </TouchableWithoutFeedback> */}
        </SafeAreaView>
        </ImageBackground>
        </View>
      </KeyboardAvoidingView>

    )

   
}