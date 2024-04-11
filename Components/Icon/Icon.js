import React, {useState} from 'react';
import { Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { icons } from './../../constants';
import 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useDispatch, useSelector } from 'react-redux';
import styled from './icon.scss';
export default function Icon({ icon, text, getActivitiesArray}) {


    const [active, setActive] = useState(false);
    return (
        <TouchableOpacity style={styled.icon} onPress={()=> {
            setActive(active => !active); 
            getActivitiesArray(text, active)}}>
            <ImageBackground
                style={styled.icon__back}
                source={active ? icons.gexagon : icons.iconBackgroundWhite}
                resizeMode='contain'>
                    <View  style={styled.icon__container}>
                        <Image 
                            style={{tintColor: active ? 'white' : "#F55926"}}
                            source={icon}/>
                        <Text style={[styled.text, {fontSize: RFValue ( 12,  740), color: active ? "#ffffff" : "#000000"}]}>{text}</Text>
                    </View>
            </ImageBackground>
            {
                active ? <Image 
                            style={styled.icon__background}
                            source={icons.lightGexagon} /> : null
            }
        </TouchableOpacity>

    )
}