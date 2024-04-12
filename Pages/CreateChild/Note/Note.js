import React, {useState} from 'react';
import { Text, View, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ImageBackground, ScrollView, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as ImagePicker from 'expo-image-picker';
import {favoriteHeroAction, favoriteFoodAction, photo1} from '../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button';
import {icons} from '../../../constants';
import Header from '../../../Components/Header/Header';
import styled from './style.scss';
export default function NickName({ navigation }) {

  //хук мультиязычности
  let {t} = useTranslation();

  // вытаскиваем из редакса глобальные переменные, сведения на ребенка
  const gender = useSelector(state => state.childrens.children1.gender);
  const name = useSelector(state => state.childrens.children1.name);
  const photo =   useSelector(state => state.childrens.children1.photo);

  //локальные состояния
  const [favoriteHero, setFavoriteHero] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [image, setImage] = useState(photo);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  //инициализируем возмодность отправки данных в глобальное хранилище
  const dispatch = useDispatch();



  const splitText = (str) => {
    return str.split(',')
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

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
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
                          <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{t('favoriteHeroesStart')} {name}{t('favoriteHeroesEnd')} </Text>
                          <TextInput
                            multiline
                            numberOfLines={4}
                            style={styled.name__input}
                            onChangeText={text => setFavoriteHero(text)}
                            onFocus={() => {setIsShowKeyboard(true)}}
                            value={favoriteHero}
                            onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}/>

                          <Text style={[styled.name__text, {fontSize: RFValue ( 20,  740)}]}>{name}{t('favoriteFood')}</Text>
                          <TextInput
                            multiline
                            numberOfLines={4}
                            style={[styled.name__input]}
                            onChangeText={text => {setFavoriteFood(text)}}
                            onFocus={() => {setIsShowKeyboard(true)}}
                            value={favoriteFood}
                            onSubmitEditing={() => {Keyboard.dismiss(); setIsShowKeyboard(false) }}/>
                        </ScrollView>
                      </View>
                     </TouchableWithoutFeedback>
                  <BtnButton onPress={() => {dispatch(favoriteHeroAction(splitText(favoriteHero)))
                                      dispatch(favoriteFoodAction(splitText(favoriteFood)))
                                      dispatch(photo1(image))
                                      setIsShowKeyboard(false)
                                      Keyboard.dismiss
                                      navigation.navigate("Activities")}} title={t('orderPackage')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                </SafeAreaView>
          </ImageBackground>
        </View>
        
    </KeyboardAvoidingView>
  );
}