import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import 'react-native-gesture-handler';
import {time, date} from './../../../actions';
import { useDispatch, useSelector } from 'react-redux';
import BtnButton from '../../../Components/Button/Button';
import {icons} from "./../../../constants";
import Header from '../../../Components/Header/Header';
import styled from "./styles.js";
import CalendarPicker from "react-native-calendar-picker";
export default function DaysTime({ navigation }) {

    const locales = useSelector(state => state.language);
    let {t} = useTranslation();
 
    //для управляемого инпута
    const [date, setDate] = useState(''); 
    //аидимость календаря
    const [calendar, setCalendar] = useState(false);

    //определяем минимальную дату, откуда стартует календарь (+3дня от текущей даты)
    let minDate;

    //если это воскресенье
    if(new Date(new Date().setDate(new Date().getDate() + 3)).getDay() == 0) {
        //то доставим через 4 дня от текущей даты
        minDate = new Date(new Date().setDate(new Date().getDate() + 4))

        //если суббота
    } else if (new Date(new Date().setDate(new Date().getDate() + 3)).getDay() == 6) {
        //то доставим через 5 дней от текущей даты
        minDate = new Date(new Date().setDate(new Date().getDate() + 5))
    } else {
        //в любом другом случае доставим через 3 дня
        minDate = new Date(new Date().setDate(new Date().getDate() + 3))
    }


    //выбираем дату начала доставки 
    const [selectedStartDate, setSelectedStartDate] = useState(minDate);
    const onDateChange = (date) => {
		setCalendar(false)
        setSelectedStartDate(date)
    }

    let day = selectedStartDate.getDate();
    let mounth = selectedStartDate.toLocaleString('default', { month: 'long' });
    let year = selectedStartDate.getFullYear();

    let getYear = minDate.getFullYear();
    let getMonth = minDate.getMonth();
    let maxDate = new Date(getYear, getMonth + 1, 0);

    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      
        return days[date.getDay()];
    }
    
    let weekDay =  getWeekDay(selectedStartDate);
    let mounthesDays = [];
    const getDaysInMonth = () => {
    
        let getYear = minDate.getFullYear();
        let getMonth = minDate.getMonth();
    
    
        let stopDate = new Date(getYear, getMonth + 1, 0);
        
        for(let i = 0; i <= stopDate.getDate(); i++) {
            let weekDay = new Date(new Date().setDate(new Date().getDate() + i)).getDay()
            let day = new Date(new Date().setDate(new Date().getDate() + i))
            if(weekDay == 6 || weekDay == 0)  {
                mounthesDays.push(day)
          }
        }
      }
    getDaysInMonth()


	const [active, setActive] = useState('morning')

    return (
    
        <SafeAreaView style={styled.calendar}>
            <Header onPress={() => navigation.goBack()} isButtons={false}/>
            <ScrollView style={{position: 'relative', width: '100%', backgroundColor: "#F3EDDF", zIndex: 5}}>
           
            <View 
                style={styled.container}>
					<View style={styled.back}>
						<Image style={styled.backImg}
								source={icons.back}
								resizeMode='contain'
								/>
					</View>
                    <Text style={[styled.title, {fontSize: RFValue ( 22,  740)}]}>{t('days')}</Text>
                    <Text style={[styled.descr, {fontSize: RFValue ( 16,  740)}]}>{t('subscr')}</Text>

                    <Text style={[styled.descr, {fontSize: RFValue ( 18,  740)}]}>{t('getDiscount')}</Text>

                    <BtnButton onPress={() => {navigation.navigate("Name")}} title={t('addAChild')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 20}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>

					<View style={styled.divider}></View>

						<View
							style={[styled.block]}>
							<Text style={styled.input}>{mounth} {day}, {year}</Text>
							<TouchableOpacity onPress={() => setCalendar(calendar => !calendar)} style={styled.iconContainer}>
								<Image 
									style={styled.iconCalendar}
									source={icons.calendar} />
							</TouchableOpacity>
							<View style={[styled.picker, {opacity: calendar ? 1 : 0, pointerEvents: calendar ? 'auto' : "none"}]} >
								<CalendarPicker 
											minDate={minDate}
											maxDate={maxDate}
											initialDate={minDate}
											selectedDayColor="#F55926"
											selectedDayTextColor="#FFFFFF"
											onDateChange={onDateChange}
								/>
						</View>
                    </View>

					<View style={styled.divider}></View>

					<TouchableOpacity onPress={() => {{setActive('morning')}}} style={[styled.item, {backgroundColor: (active=='morning') ? '#FF9D7D' : 'transparent'}]}>
						<View style={[styled.shadow, {backgroundColor: (active=='morning') ? '#F55926' : 'transparent'}]}></View>
						<Text style={[styled.date, {color: (active=='morning') ? '#F3EDDF' : '#F55926', fontWeight: (active=='morning') ? 500 : 300}, {fontSize: RFValue ( 16,  740)}]}>{t('morning')}</Text>
					</TouchableOpacity>  
					<TouchableOpacity onPress={() => {{setActive('evening')}}} style={[styled.item, {backgroundColor: (active=='evening') ? '#FF9D7D' : 'transparent'}]}>
						<View style={[styled.shadow, {backgroundColor: (active=='evening') ? '#F55926' : 'transparent'}]}></View>
						<Text style={[styled.date, {color: (active=='evening') ? '#F3EDDF' : '#F55926', fontWeight: (active=='evening') ? 500 : 300}, {fontSize: RFValue ( 16,  740)}]}>{t('evening')}</Text>
					</TouchableOpacity>  

                    <Text style={[styled.descr, {fontSize: RFValue ( 16,  740)}]}>{t('daystext')}</Text>
            </View>
            <View style={styled.plan}>
                <ImageBackground style={styled.img}
                        source={icons.doubleGexagon} >
                    <Text style={[styled.text, {fontSize: RFValue ( 14,  740)}]}>{t('total')}</Text>
                    <Text style={[styled.price, {fontSize: RFValue ( 64,  740)}]}>1000</Text>
                    <Text style={[styled.text, {fontSize: RFValue ( 14,  740)}]}>sar/mounth</Text>
                </ImageBackground>
            </View> 
        
         <View style={styled.backDown}>
            <Image style={styled.backImg}
                    source={icons.backDown}/>
          </View>
            </ScrollView>
        <BtnButton onPress={() => {navigation.navigate("Location")
                                dispatch(time(active))
                                dispatch(time(`${weekDay}, ${mounth} ${day},  ${year}`))}} title={t('continue')} buttonStyle={{backgroundColor: '#F55926',borderWidth: 2, borderColor: '#F55926', marginBottom: 20}} textStyle={{color: 'rgba(244, 237, 225, 1)', }}/>
        
    </SafeAreaView>
  );
}
