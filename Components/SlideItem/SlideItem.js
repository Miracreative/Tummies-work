import React from "react";
import { View, Image, Text, StyleSheet, useWindowDimensions, ImageBackground} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "./styles.js";

const SlideItem = ({item}) => {
    const {width} = useWindowDimensions();
    function returnText() {
        if (item.text) {
           return <Text style={[styled.text, {fontSize: RFValue ( 14 ,  740)}]}>{item.text}</Text>
        } else {
           return null
        }
    }
    return (
        <View style={[styled.container, {width}]}>
            <ImageBackground source={item.image}
            resizeMode="contain"
                    style={[styled.image]}>

                <View style={styled.textContainer}>
                    <Text
                        style={[styled.title, {fontSize: RFValue ( 22 ,  740), color:'rgba(12, 3, 0, 1)' }]}>{item.title}</Text>
                    {
                        returnText()
                    }
                </View>
            </ImageBackground>    
      
        </View>
    )
}
export default SlideItem