import React, { useCallback } from 'react';
import {View, SafeAreaView, Text, ScrollView,} from 'react-native';
import styled from './style.scss';
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Header from '../../Components/Header/Header';
import YouTubeVideo from '../../Components/YouTubeVideo/YouTubeVideo';
import axios from 'axios';


export default function Entertaiment({ navigation}) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchVideos = () => {
    setIsLoading(true)
    
    axios
        .get(`https://660ac16fccda4cbc75dbb900.mockapi.io/entertaiment`)
        .then(res => {
            setItems(res.data)
            setIsLoading(false)
        })
      }
    React.useEffect(() => {   
      fetchVideos()
    }, [])
  
    let videos = items.map((obj) => (<YouTubeVideo key={obj.id} {...obj}/>));
  const {t} = useTranslation();
  return (
	
    <View style={styled.container}>
        <SafeAreaView style={{flex:1}}>
        <Header onPress={() => navigation.navigate('Main')} 
					isBack={true} 
					lang={false} 
					isWhite={false}
					onPressEntertaiment={() => navigation.navigate('Entertaiment')}
          onPressCatering={() => navigation.navigate('Catering')}
					/>
            <ScrollView>
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("enter")}</Text>
                <View style={styled.videoContainer}>
                  {videos}
                </View>
            </ScrollView>
        </SafeAreaView>
    </ View>
  );
}
