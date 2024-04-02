import React from 'react';
import {View, Image,  SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from './style.scss';
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import {catering} from './../../actions';
import { useDispatch} from 'react-redux';

import Header from '../../Components/Header/Header';
import axios from 'axios';


export default function Catering({ navigation}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const buttonTitles = [
    {
        title: t('cateringTitle-1')
    },
    {
        title: t('cateringTitle-2')
    },
    {
        title: t('cateringTitle-3')
    }
]

  const fetchVideos = () => {
    setIsLoading(true)
    
    axios
        .get(`https://660ac16fccda4cbc75dbb900.mockapi.io/catering`)
        .then(res => {
            setItems(res.data)
            setIsLoading(false)
        })
      }
    React.useEffect(() => {   
      fetchVideos()
    }, [])
  
    let buttons = items.map((obj, i) => { 
        return (
            <TouchableOpacity style={styled.btn} key={obj.id}  onPress={()=>{navigation.navigate('CateringDetail');
                    dispatch(catering(obj.number))
            }}>
                <Text style={[styled.text, {fontSize: RFValue ( 20 ,  740)}]}>{buttonTitles[i].title}</Text>
            </TouchableOpacity>
        )
    });
  
  return (
	
    <View style={styled.container}>
        <SafeAreaView style={{flex:1}}>
            <Header onPress={() => navigation.goBack()} 
					isBack={true} 
					lang={false} 
					isWhite={false}
					onPressEntertaiment={() => navigation.navigate('Entertaiment')}
                    onPressCatering={() => navigation.navigate('Catering')}
					/>
            <ScrollView>
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("catering")}</Text>
                <View style={styled.btnContainer}>
                  {buttons}
                </View>
            </ScrollView>
        </SafeAreaView>
    </ View>
  );
}
