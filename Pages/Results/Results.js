import React, {useState, useEffect, Dimensions} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../Components/Button/Button';
import CustomSlider from './CustomSlider';
import MealsList from '../../Components/MealList/MealList';
// import MealsList from '../../Components/MealList/MealList';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
import styled from "./style.scss";
// const { width } = Dimensions.get("window");


export default function Results({ navigation }) {

    let {t} = useTranslation();

    const [days, setDays] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchDays = () => {
        setIsLoading(true)
        
        axios
            .get(`https://660ac16fccda4cbc75dbb900.mockapi.io/entertaiment`)
            .then(res => {
                setDays(res.data)
                setIsLoading(false)
            })
    }

    useEffect(() => {   
        // fetchDays()

        setDays(["Now 23", "Now 24", "Now 25", "Now 26", "Now 27"])
    }, [])


    const [active, setActive] = useState(0);
    const [activeMeal, setActiveMeal] = useState(0);

    const elements = days.map((item, i) => {
  
        return (
            <TouchableOpacity key={i} onPress={() => {setActive(i)
                                              setActiveMeal(0) }} style={[styled.results__item, {backgroundColor: (active==i) ? '#FF9D7D' : '#FFFFFF'}]}>
                <View style={[styled.results__shadow, {backgroundColor: (active==i) ? '#F55926' : '#FFFFFF'}]}></View>
                <Text style={[styled.results__date, {color: (active==i) ? '#F3EDDF' : '#F55926', fontWeight: (active==i) ? 500 : 300}]} >{item}</Text>
            </TouchableOpacity>  
        )
    });

    const meals = [
        {
            id: 1,
            image: icons.slideBack,
            title: t('sliderTitle-1'),
            text: t('sliderText-1')
        },
        {
            id: 2,
            image: icons.slideBack,
            title: t('sliderText-2')
        },
        {
            id: 3,
            image: icons.slideBack,
            title: t('sliderText-3')
        }
    ]

    const data = [
        {
          title: "Coral Reef",
          description: "Location: Red Sea",
          source:
            "https://images.unsplash.com/photo-1633205719979-e47958ff6d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        },
        {
          title: "Phone",
          description: "iPhone 6 on the table",
          source:
            "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        },
      
        {
          title: "Old building",
          description: "Location: Germany",
          source:
            "https://images.unsplash.com/photo-1623345805780-8f01f714e65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
        },
    ];
      var slides = [];

      const entriesSplitter = () => {
          let size = 2; //Based on the size you want
          while (data.length > 0) {
              slides.push(data.splice(0, size));
          }
      };
      
    return (
        <View style={styled.container}>
            <SafeAreaView style={{flex:1, position: 'relative'}}>
                <ImageBackground source={icons.pink} style={styled.results__pink} resizeMode="cover">
                </ImageBackground>
                <Header onPress={() => navigation.goBack()} 
                            isButtons={false} 
                            isWhite={true}
                            />
                <ScrollView style={styled.results__contaner}>
                    <Text style={[styled.results__title, {fontSize: RFValue ( 22 ,  740)}]}>{t('resultsTitle')}</Text>
                    <Text style={[styled.results__text, {fontSize: RFValue ( 13 ,  740)}]}>{t('resultsDescr')}</Text>
                    <Text style={[styled.results__title, {fontSize: RFValue ( 22 ,  740)}]}>{t('menu')}</Text>

                    <View style={styled.results__dates}>
                        {elements}
                    </View>

                    <View style={styled.results__divider}></View>

                    <Text style={[styled.results__title, {fontSize: RFValue ( 22 ,  740)}]}>{t('whatsIncluded')}</Text>

                    <View style={{height: 200, width: "100%"}}>
                        {/* {entriesSplitter()} */}
                        <CustomSlider data={data} />
                    </View>

                </ScrollView>
                <BtnButton onPress={() => {console.log('add')}} title={t('addAChild')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
            </SafeAreaView>
        </View>
    )
}