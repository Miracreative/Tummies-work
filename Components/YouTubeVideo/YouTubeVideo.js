import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styled from './styles.js';
import {icons} from "../../constants";
import YoutubePlayer from "react-native-youtube-iframe";

function YouTubeVideo({name, url}) {
  return (
        <View style={styled.videobox}>
                <YoutubePlayer
                    webViewStyle={styled.video}
                    height={210}
                    videoId={url}
                /> 
            <Text style={[styled.text, {fontSize: RFValue ( 12 ,  740)}]}>{name}</Text>
        </View>
    )
}

export default YouTubeVideo;