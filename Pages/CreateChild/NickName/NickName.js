import React, {useState} from 'react';
import { Text, View, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';
import {currentNickName, currentHeightAction, currentWeightAction, photo1} from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button';
import {icons} from '../../../constants';
import Header from '../../../Components/Header/Header';
import styled from './style.scss';
export default function NickName({ navigation }) {

  //хук мультиязычности
  let {t} = useTranslation();

  // вытаскиваем из редакса глобальные переменные, сведения на ребенка
  const childName = useSelector(state => state.childrens.children1.name);
  const gender = useSelector(state => state.childrens.children1.gender);
  const name = useSelector(state => state.childrens.children1.name);
  const photo =   useSelector(state => state.childrens.children1.photo);

  //локальные состояния
  const [nickName, setNickName] = useState('');
  const [validNickName, setValidNickName] = useState(true);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [disable, setDisable] = useState(true);
  const [image, setImage] = useState(photo);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  //инициализируем возмодность отправки данных в глобальное хранилище
  const dispatch = useDispatch();




  const validateNickName = (text) => {
    setNickName(text)
    if (text.length >=2) {
      //если валидация прошла
      setValidNickName(true)
      if( nickName.length >=2 && weight && height) {
      //и остальные инпуты заполнены разблокируем кнопку далее
        setDisable(false)
      }  
    } else {
      //на нет и суда нет
      setValidNickName(false)
      setDisable(true) 
    }
  }
  const validateWeight = (text) => {
	const value = text.replace(/\D+/g, '');
    setWeight(value)
    if( nickName.length >=2 && weight && height) {
      //и остальные инпуты заполнены разблокируем кнопку далее
        setDisable(false)
    } else {
      //на нет и суда нет
      setDisable(true) 
    }
  }

  const validateHeight = (text) => {
	const value = text.replace(/\D+/g, '');
    setHeight(+value)
    if( nickName.length >=2 && weight && height) {
      //и остальные инпуты заполнены разблокируем кнопку далее
        setDisable(false)
    } else {
      //на нет и суда нет
      setDisable(true) 
    }
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
    }
  };
  return (
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
                                    <TouchableOpacity style={styled.name__icon} onPress={pickImage}>
                                        <ImageBackground 
                                        resizeMode='contain'
                                            style={{ width: 120, height: 120}}
                                            source={icons.photoPhone} >
                                            {image? <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 100, marginTop: 17, marginLeft: 13, borderWidth: 2, borderColor: 'white'}} /> :
                                            <Image source={gender == 'boy' ? icons.boyRing : icons.girlRing} style={{ width: 90, height: 90, borderRadius: 100, marginTop: 17, marginLeft: 13 }} />
                                            }
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('nickStart')} {childName}{t('nickEnd')} </Text>
                                    <TextInput
                                  style={[styled.name__input, {borderColor: validNickName ? 'rgba(12, 3, 0, 0.5)' : 'rgba(245, 89, 38, 1)'}]}
                                  onChangeText={text => validateNickName(text)}
                                  onFocus={() => {setIsShowKeyboard(true)}}
                                  value={nickName}
                                  onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}
                              	/>
                    			<View style={styled.name__divider}></View>

								<Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('currentWeight')}</Text>
								<TextInput
									style={[styled.name__input]}
									type="numeric"
									keyboardType = 'numeric'
									onChangeText={text => {validateWeight(text)}}
									onFocus={() => {setIsShowKeyboard(true)}}
									value={weight}
									onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}
								/>
								
								<Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('currentHeight')}</Text>
								<TextInput
									style={[styled.name__input]}
									type="numeric"
									keyboardType = 'numeric'
									onChangeText={text => {validateHeight(text)}}
									onFocus={() => {setIsShowKeyboard(true)}}
									value={height}
									onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}
								/>
                                </ScrollView>
                            </View>
                      </TouchableWithoutFeedback>
                      <BtnButton onPress={() => {dispatch(currentNickName(nickName))
                                          dispatch(currentWeightAction(weight))
                                          dispatch(currentHeightAction(height))
                                          dispatch(photo1(image))
                                          setIsShowKeyboard(false)
                                          Keyboard.dismiss
                                          navigation.navigate("Activities")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30, opacity: (disable) ? .7 : 1, pointerEvents: (disable) ? 'none' : 'auto'}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                    </SafeAreaView>
          </ImageBackground>
        </View>
  );
}