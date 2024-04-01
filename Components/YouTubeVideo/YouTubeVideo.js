import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styled from './style.scss';
import {icons} from "../../constants";
import YoutubePlayer from "react-native-youtube-iframe";

function YouTubeVideo() {
    const video = React.useRef(null);
    const [playing, setPlaying] = React.useState(false);

    const onStateChange = React.useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
      }
    }, []);
  
    const togglePlaying = React.useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);
      
        
  return (
        <View style={styled.videobox}>
                <YoutubePlayer
                    webViewStyle={styled.video}
                    height={200}
                    play={playing}
                    videoId={"NVIbCvfkO3E"}
                    onChangeState={onStateChange}
                /> 
                {/* <TouchableOpacity style={[styled.play, {opacity: status.isPlaying ? 0 : 1}]}
                        onPress={showVideoInFullscreen}
                        >
                <Image
                    style={styled.image}
                    source={icons.play}
                />
            </TouchableOpacity> */}
            <Text style={[styled.text, {fontSize: RFValue ( 12 ,  740)}]}>Collective, Buiding B, 602 Dubai</Text>
        </View>
    )
}

export default YouTubeVideo;