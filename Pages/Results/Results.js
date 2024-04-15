import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import {useTranslation} from 'react-i18next';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from 'react-redux';
import {closeVisibleOnResults} from "./../../actions.js";
import BtnButton from '../../Components/Button/Button';
import CustomSlider from './../../Components/Carousel/CustomSlider.js';
import {icons} from "../../constants";
import Header from '../../Components/Header/Header';
// import styled from "./style.scss";
import styled from './styles.js'
// const { width } = Dimensions.get("window");


export default function Results({ navigation }) {

    const isMenuPress = useSelector(state=> state.changeMenu);
    const dispatch = useDispatch();

    let {t} = useTranslation();

    const [days, setDays] = useState([]);
    const [long, setLong] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    // const [isMenuPress, setIsMenuPress] = useState(true);

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
                                              setActiveMeal(0) }} style={[styled.item, {backgroundColor: (active==i) ? '#FF9D7D' : '#FFFFFF'}]}>
                <View style={[styled.shadow, {backgroundColor: (active==i) ? '#F55926' : '#FFFFFF'}]}></View>
                <Text style={[styled.date, {color: (active==i) ? '#F3EDDF' : '#F55926', fontWeight: (active==i) ? 500 : 300, fontSize: RFValue ( 20 ,  740)}]} >{item}</Text>
            </TouchableOpacity>  
        )
    });

    const longArr = [
        t('mounthly'),
        t('weekly')
      ]
      const longArrList = longArr.map((item, i) => {
      
        return (
            <TouchableOpacity key={i} onPress={() => setLong(i)} style={[styled.item, {width: '45%', backgroundColor: (long==i) ? '#FF9D7D' : '#FFFFFF'}]}>
              <View style={[styled.shadow, {backgroundColor: (long==i) ? '#F55926' : '#FFFFFF'}]}></View>
              <Text style={[styled.date, {color: (long==i) ? '#F3EDDF' : '#F55926', fontWeight: (long==i) ? 500 : 300,fontSize: RFValue ( 22 ,  740) }]}>{item}</Text>
            </TouchableOpacity>  
        )
      });

    const data = [
        {
          title: "Spaghetti Bolognese with meatbals",
          description: "Location: Red Sea",
          source: icons.porridge
        },
        {
          title: "Potato soup",
          description: "iPhone 6 on the table",
          source: icons.soup
        },
      
        {
          title: "Spaghetti Bolognese with meatbals",
          description: "Location: Germany",
          source: icons.porridge,
        },
    ];
      
    return (
        <View style={styled.container}>
            <SafeAreaView style={{flex:1, position: 'relative'}}>

                {
                    isMenuPress ? 
                    <View style={styled.add}>
                        <Header onPress={() => dispatch(closeVisibleOnResults())} 
                            isButtons={false} 
                            isWhite={false}
                            />
                        <View style={{width: "100%", flex: 0.8, justifyContent:'center'}}>
                            <Text style={[styled.toStart, {fontSize: RFValue ( 20 ,  740)}]}>{t("menuAdd")}</Text>
                            <BtnButton onPress={() => {navigation.navigate("Gender"); dispatch(closeVisibleOnResults())}} title={t('addAChild')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
                        </View>
                    </View> : null
                }
                
                <Image source={icons.pink} style={styled.pink} resizeMode="cover" />
                <Header onPress={() => navigation.goBack()} 
                            isButtons={false} 
                            isWhite={true}
                            />
                <ScrollView>
                    <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t('resultsTitle')}</Text>
                    <Text style={[styled.text, {fontSize: RFValue ( 13 ,  740)}]}>{t('resultsDescr')}</Text>
                    <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t('menu')}</Text>

                    <View style={styled.dates}>
                        {elements}
                    </View>

                    <View style={styled.divider}></View>

                    <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t('whatsIncluded')}</Text>

                    <View style={{height: 400, width: "100%"}}>
                        <CustomSlider data={data} />
                    </View>

                    <View style={styled.divider}></View>

                    <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t('plan')}</Text>

                    <View style={styled.dates}>
                        {longArrList}
                    </View>

                    <View style={styled.divider}></View>

                    <View style={styled.box}>
                        <Text style={[styled.title, {fontSize: RFValue ( 24 ,  740)}]}>{t('cost')}</Text>
                        <View style={styled.ring}></View>
                        <Text style={[styled.descr, {fontSize: RFValue ( 16 ,  740)}]}>Serves up to 2000 out of 2663 calories recommendended for you</Text>
                        <View style={styled.ring}></View>
                        <Text style={[styled.descr, {fontSize: RFValue ( 16 ,  740)}]}>5 days a week * 4 weeks</Text>
                        <View style={styled.ring}></View>
                        <Text style={[styled.descr, {fontSize: RFValue ( 16 ,  740)}]}>Skip anytime</Text>
                        <Text style={[styled.price, {fontSize: RFValue ( 40 ,  740)}]}>1000</Text>
                        <Text style={styled.valute}>SAR/month </Text>
                        <View style={styled.border}></View>
                        <Image  style={styled.fone}
                                source={icons.bottomFone} />
                    </View>
                </ScrollView>
                <BtnButton onPress={() => {navigation.navigate("Gender")}} title={t('addAChild')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 30}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
            </SafeAreaView>
        </View>
    )
}