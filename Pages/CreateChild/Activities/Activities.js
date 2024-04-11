import React, {useState} from 'react';
import { Text, View, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {addActivities} from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button';
import {icons} from '../../../constants';
import Icon from '../../../Components/Icon/Icon';
import Header from '../../../Components/Header/Header';
import styled from './style.scss';
export default function Activities({ navigation }) {

  //хук мультиязычности
  let {t} = useTranslation();


  //инициализируем возмодность отправки данных в глобальное хранилище
  const dispatch = useDispatch();

    // формирую массив с видами активности
    const activityTypesArray = [
        {
            icon: icons.running,
            text: t('running'),
        },
        {
            icon: icons.soccer,
            text: t('soccer'),
        },
        {
            icon: icons.swimming,
            text: t('swimming'),
        },
        {
            icon: icons.dancing,
            text: t('dancing'),
        },
        {
            icon: icons.reading,
            text: t('reading'),
        },
        {
            icon: icons.programming,
            text: t('programming'),
        }
    ]

    //массив, в который будут добавляться выбранные виды активностей
    const [activitiesList, setActivitiesList] = useState([]);

    const getActivitiesArray = (text, active) => {
        if(!active) {
            //здесь мы добавляем жлементы в массив
            setActivitiesList(activitiesList => [ text, ...activitiesList])
        } else {
            //здесь удаляем элементы
            setActivitiesList(activitiesList => activitiesList.filter((item) => item !== text))
        }
    }

        //формируем массив иконок, выводимых на экран страницы
    const activities = activityTypesArray.map((item, i) => {
        return (
            <Icon key={i} {...item} getActivitiesArray={getActivitiesArray} />
        )
    })

return (

    <View style={styled.container}>
        <ImageBackground
            resizeMode='cover'
            style={{flex: 1}}
            source={icons.backSmall}>
                <SafeAreaView style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', width: "100%"}}>
                        <Header onPress={() => navigation.goBack()} isButtons={false}/>
                            <ScrollView style={{width: "100%", flex: 1}}>
                                <Text style={[styled.active__title, {fontSize: RFValue ( 24,  740)}]}>{t('activities')}</Text>

                                <View style={styled.active__container}>
                                    {activities}
                                </View>
                            </ScrollView>
                        </View>
                    <BtnButton onPress={() => {
                                        dispatch(addActivities(activitiesList))
                                        navigation.navigate("NotEat")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30, opacity: 1,}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                </SafeAreaView>
        </ImageBackground>
    </View>
  );
}