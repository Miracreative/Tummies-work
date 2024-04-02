import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {View, Image, TouchableOpacity, Text} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import styled from './style.scss';
import {icons} from "../../constants";

function VideoApp({name, url}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [orientationIsLandscape, setOrientationIsLandscape] = React.useState(false);
    const showVideoInFullscreen = async () => { 
        await video.current.presentFullscreenPlayer();
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() 
    }
      
        
  return (
        <View style={[styled.videobox]}>
            <Video
                onPress={() => setStatus()}
                ref={video}
                style={styled.video}
                source={{
                    uri: `${url}`,
                }}
                useNativeControls
                usePoster={true}
                posterSource={icons.plug}
                posterStyle= {styled.poster}
                resizeMode={ResizeMode.CONTAIN}
                onFullscreenUpdate={async () => {
                    await ScreenOrientation.lockAsync(
                    orientationIsLandscape ? ScreenOrientation.OrientationLock.PORTRAIT : 
                    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
                    setOrientationIsLandscape(!orientationIsLandscape)
                    console.log(orientationIsLandscape);
                }}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                <TouchableOpacity style={[styled.play, {opacity: status.isPlaying ? 0 : 1}]}
                        onPress={showVideoInFullscreen}
                        >
                <Image
                    style={styled.image}
                    source={icons.play}
                />
            </TouchableOpacity>
            <Text style={[styled.text, {fontSize: RFValue ( 12 ,  740)}]}>{name}</Text>
        </View>
    )
}

export default VideoApp;