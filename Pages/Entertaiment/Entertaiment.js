import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {View, Image,  SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';
import styled from './style.scss';
import {icons} from "../../constants";
import {useTranslation} from 'react-i18next';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Linking from 'expo-linking';
import { Video, ResizeMode } from 'expo-av';
import Header from '../../Components/Header/Header';


export default function Entertaiment({ navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [orientationIsLandscape, setOrientationIsLandscape] = React.useState(false);
  const link ='https://www.youtube.com/watch?v=NVIbCvfkO3E';
  const openLink = () => Linking.openURL(link);
  const showVideoInFullscreen = async () => { await video.current.presentFullscreenPlayer();
  status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
    console.log(ScreenOrientation)
  const {t} = useTranslation();
  return (
	
    <View style={styled.container}>
        <SafeAreaView style={{flex:1}}>
        <Header onPress={() => navigation.goBack()} 
					isBack={true} 
					lang={false} 
					isWhite={false}
					onPressEntertaiment={() => navigation.navigate('Entertaiment')}
					/>
            <ScrollView>
                <Text style={[styled.title, {fontSize: RFValue ( 22 ,  740)}]}>{t("enter")}</Text>
                <View style={styled.videoContainer}>
                  {/* <TouchableOpacity onPress={openLink}>
                    <Text>link</Text>
                    
                  </TouchableOpacity> */}
                  {/* <View style={styled.videobox}>
                    <Video
                        ref={video}
                        style={styled.video}
                        source={{
                          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        usePoster={true}
                        posterSource={icons.plug}
                        posterStyle= {styled.poster}
                        resizeMode={ResizeMode.CONTAIN}
                        onFullscreenUpdate={async () => {
                          await ScreenOrientation.lockAsync(
                            orientationIsLandscape ? ScreenOrientation.OrientationLock.PORTRAIT : 
                            ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
                        );
                        setOrientationIsLandscape(!orientationIsLandscape);
                        }}
                        
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                      />
                      <TouchableOpacity style={[styled.play, {opacity: status.      isPlaying ? 0 : 1}]}
                              // onPress={() =>
                              //   status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                              // }
                              onPress={showVideoInFullscreen}
                              >
                        <Image
                          style={styled.image}
                          source={icons.play}
                        />
                      </TouchableOpacity>
                  </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    </ View>
  );
}
