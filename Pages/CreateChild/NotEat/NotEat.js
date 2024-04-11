import React, {useState} from 'react';
import { Text, View, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {addAllergies} from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button';
import {icons} from '../../../constants';
import Icon from '../../../Components/Icon/Icon';
import Header from '../../../Components/Header/Header';
import styled from './style.scss';
export default function NotEat({ navigation }) {

  //хук мультиязычности
  let {t} = useTranslation();


  //инициализируем возможность отправки данных в глобальное хранилище
  const dispatch = useDispatch();

    // формирую массив с видами аллергенов
    const foodTypesArray = [
        {
            icon: icons.fish,
            text: t('fish'),
        },
        {
            icon: icons.beef,
            text: t('beef'),
        },
        {
            icon: icons.seafoods,
            text: t('seafoods'),
        },
        {
            icon: icons.chicken,
            text: t('chicken'),
        },
        {
            icon: icons.broccaly,
            text: t('broccaly'),
        },
        {
            icon: icons.eggs,
            text: t('eggs'),
        },
        {
            icon: icons.shugar,
            text: t('shugar'),
        },
        {
            icon: icons.bread,
            text: t('bread'),
        }
    ]

    //массив, в который будут добавляться выбранные виды продуктов
    const [foodList, setFoodList] = useState([]);

    const getFoodArray = (text, active) => {
        if(!active) {
            //здесь мы добавляем элементы в массив
            setFoodList(foodList => [ text, ...foodList])
        } else {
            //здесь удаляем элементы
            setFoodList(foodList => foodList.filter((item) => item !== text))
        }
    }

        //формируем массив иконок, выводимых на экран страницы
    const food = foodTypesArray.map((item, i) => {
        return (
            <Icon key={i} {...item} getActivitiesArray={getFoodArray} />
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
                                    {food}
                                </View>
                            </ScrollView>
                        </View>
                    <BtnButton onPress={() => {
                                        dispatch(addAllergies(foodList))
                                        navigation.navigate("NotEat")}} title={t('next')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30, opacity: 1,}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                </SafeAreaView>
        </ImageBackground>
    </View>
  );
}