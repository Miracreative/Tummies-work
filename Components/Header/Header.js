import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Image, Text, StatusBar} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import{icons} from "./../../constants";

import styled from "./styles.js";
import {langType} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import i18next from './../../services/i18next';

const Header = ({onPress, isBack=true, isButtons=true, isWhite=false, lang=false, isStatus=true, onPressEntertaiment, onPressCatering}) => {
    const language = useSelector(state => state.language);
    const dispatch = useDispatch();

    useEffect(() => {
        if(language =='ar') {
            i18next.changeLanguage('ar');
        } else {
            i18next.changeLanguage('en');
        }
    }, [])
    
    const changeLng = () => {
        dispatch(langType())
		if(language =='ar') {
			i18next.changeLanguage('en');
		} else {
			i18next.changeLanguage('ar');
		}
	  };

    return (
        <View style={[styled.header, {paddingTop: isStatus? StatusBar.currentHeight : 0}]}>
            <View 
                style={styled.header__wrapper}>
                
                {
                    isBack ? <TouchableOpacity
                    onPress={onPress}
                    style={styled.header__container}>
                        {
                            isWhite ? <Image 
                            style={[styled.header__img, {
                                tintColor: 'white'
                            }]}
                            source={icons.arrow}/> : <Image 
                            style={styled.header__img}
                            source={icons.arrow}/>
                        }
                    
                    </TouchableOpacity> : <TouchableOpacity
                    onPress={onPress}
                    style={styled.header__container_opacity}>
                    <Image 
                        style={styled.header__img}
                        source={icons.arrow}/>
                </TouchableOpacity>
                }
                
            </View>
            {
                isButtons ? <View style={styled.header__wrapper}>
                
                <TouchableOpacity
                    onPress={onPressEntertaiment}
                    style={styled.header__container}>
                        {
                            isWhite ?        <Image 
                                                style={styled.header__img}
                                                source={icons.entertamentWhite}/> :  <Image 
                                                                style={styled.header__img}
                                                                source={icons.entertament}/>
                        }
              
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPressCatering}
                    style={styled.header__container}>
                        {
                            isWhite ?  <Image 
                            style={styled.header__img}
                            source={icons.cateringWhite}/> : <Image 
                            style={styled.header__img}
                            source={icons.catering}/>
                        }
                   
                </TouchableOpacity>
                {
                    lang ? <TouchableOpacity
                    style={styled.header__container}
                    onPress={() => changeLng()}
                    // onPress={() => dispatch(lang())}
                    >
                        {
                                
                            isWhite ? <View 
                            style={styled.header__ring_white}>
                            <Text 
                                style={[styled.header__text_red, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                            </View> : <View 
                                style={styled.header__ring}>
                                <Text 
                                    style={[styled.header__text, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                        </View>
                        }
                 
                </TouchableOpacity> : null
                }
                
            </View> : <View style={styled.header__wrapper_opacity}>
                
                <TouchableOpacity
                    onPress={onPressEntertaiment}
                    style={styled.header__container}>
                    <Image 
                        style={styled.header__img}
                        source={icons.entertament}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ onPressCatering}
                    style={styled.header__container}>
                    <Image 
                        style={styled.header__img}
                        source={icons.catering}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styled.header__container}
                    onPress={() => changeLng()}>
                   <View 
                        style={styled.header__ring}>
                        <Text 
                            style={[styled.header__text, {fontSize: RFValue ( 16,  740)}]}>{language == 'ar' ? 'EN' : 'AR'}</Text>
                   </View>
                </TouchableOpacity>
            </View>
            }
            
        </View>
    )

}

export default Header;