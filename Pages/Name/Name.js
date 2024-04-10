import React, {useState} from 'react';
import { Text, View, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {name1, lastName1, age1, photo1} from './../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
export default function Name({ navigation }) {

  let {t} = useTranslation();
  const gender1 = useSelector(state => state.childrens.children1.gender);
  const locales = useSelector(state => state.language);

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(true);
  const [lastName, setLastName] = useState('');
  const [validLastName, setValidLastName] = useState(true);
  const [age, setAge] = useState(null);
  const [validAge, setValidAge] = useState(true);
  const [disable, setDisable] = useState(true);
  const [image, setImage] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const dispatch = useDispatch();

  const validateName = (text) => {
    if (text.length >=2) {
      setName(text)
      setValidName(true)
      if(validName && validLastName && name.length >=2 && lastName.length >= 2 && age) {
        setDisable(false)
      }  
    }
    else {
      setName(true)
      setValidName(false)
      setDisable(true) 
    }
  }
  const validateLastName = (text) => {
    if (text.length >=2) {
      setLastName(text)
      setValidLastName(true)
      if(validName && validLastName && name.length >=2 && lastName.length >= 2 && age) {
        setDisable(false)
      }  
    } else {
      setLastName(text)
      setValidLastName(false)
      setDisable(true) 
    }
  }


  const validateAge = (d) => {
    setAge(d)
    setDisable(false)
      
    
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // gender1 == 'boy' ? setImage(icons.boyRing) : setImage(icons.girlRing)
    }
  };


  return (

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      >
        <View style={styled.container}>
            <ImageBackground
                resizeMode='cover'
                style={{flex: 1}}
                source={ isShowKeyboard ? null : icons.backSmall}>
                    <SafeAreaView style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>

                        <TouchableWithoutFeedback onPress={() => {
                                                          Keyboard.dismiss();
                                                          setIsShowKeyboard(false)
                                                        }}>
                            <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', width: "100%"}}>
                            <Header onPress={() => navigation.goBack()} isButtons={false}/>
                                <ScrollView style={{width: "100%", flex: 1}}>
                                    <Text style={[styled.name__title, {fontSize: RFValue ( 24,  740)}]}>{t('enterName')}</Text>
                                    <TouchableOpacity style={styled.name__icon} onPress={pickImage}>
                                        <ImageBackground 
                                        resizeMode='contain'
                                            style={{ width: 120, height: 120}}
                                            source={icons.photoPhone} >
                                            {image? <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 100, marginTop: 17, marginLeft: 13, borderWidth: 2, borderColor: 'white', borderStyle: 'solid' }} /> :
                                            <Image source={gender1 == 'boy' ? icons.boyRing : icons.girlRing} style={{ width: 90, height: 90, borderRadius: 100, marginTop: 17, marginLeft: 13 }} />
                                            }
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('name')}</Text>
                                    <TextInput
                                  style={[styled.name__input, {borderColor: validName ? 'rgba(12, 3, 0, 0.5)' : 'rgba(245, 89, 38, 1)'}]}
                                  onChangeText={text => validateName(text)}
                                  onFocus={() => {setIsShowKeyboard(true)}}
                                  value={name}
                                  onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}
                              />
                            <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('lastName')}</Text>
                            <TextInput
                                  style={[styled.name__input, {borderColor: validLastName ? 'rgba(12, 3, 0, 0.5)' : 'rgba(245, 89, 38, 1)'}]}
                                  onChangeText={text => {validateLastName(text)}}
                                  onFocus={() => {setIsShowKeyboard(true)}}
                                  value={lastName}
                                  onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}
                              />
                            <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('age')}</Text>
                                <SafeAreaProvider>
                                <View style={[styled.name__input_name, {borderColor: validLastName ? 'rgba(12, 3, 0, 0.5)' : 'rgba(245, 89, 38, 1)'}]}>
                                    <DatePickerInput
                                        style={{backgroundColor: 'transparent', border: 'none', margin: 0}}
                                        locale={locales}
                                        value={age}
                                        onChange={(d) => { validateAge(d)}}
                                        inputMode="start"
                                        iconColor="rgba(245, 89, 38, 1)"
                                        label=''
                                        onChangeText={(text) => { if(text?.length > 9) {setDisable(false)} }}
                                        // startYear={startDate}
                                        // endYear={endDate}
                                        // validRange={true}
                                        // validRange={ () => {
                                        //     startDate: date.setFullYear(date.getFullYear() - 8)
                                        //     endDate: date.setFullYear(date.getFullYear() - 1)
                                        // }
                                           
                                        // }
                                    />
                                </View>
                                </SafeAreaProvider>
                                </ScrollView>
                            </View>
                      </TouchableWithoutFeedback>
                      <BtnButton onPress={() => {dispatch(name1(name))
                                          dispatch(lastName1(lastName))
                                          dispatch(age1(age))
                                          dispatch(photo1(image))
                                          setIsShowKeyboard(false)
                                          Keyboard.dismiss
                                          navigation.navigate("NickName")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30, opacity: (disable) ? .7 : 1, pointerEvents: (disable) ? 'none' : 'auto'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                    </SafeAreaView>
          </ImageBackground>
        </View>
        
    </KeyboardAvoidingView>
  );
}