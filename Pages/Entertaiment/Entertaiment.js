import React, { useCallback } from 'react';
import {View, Image,  SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from './style.scss';
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
// import * as Linking from 'expo-linking';
import Header from '../../Components/Header/Header';
import VideoApp from '../../Components/VideoApp/VideoApp';
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
  
    let videos = items.map((obj) => (<VideoApp key={obj.id} {...obj}/>));
  // const link ='https://www.youtube.com/watch?v=NVIbCvfkO3E';
  // const openLink = () => Linking.openURL(link);
  // const showVideoInFullscreen = async () => { await video.current.presentFullscreenPlayer();
  // status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
    // console.log(ScreenOrientation)
  const {t} = useTranslation();
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
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("enter")}</Text>
                <View style={styled.videoContainer}>
                  {videos}
                  <YouTubeVideo/>
                </View>
            </ScrollView>
        </SafeAreaView>
    </ View>
  );
}
