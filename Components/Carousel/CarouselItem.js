import React from 'react';
import { View} from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import { Text, SafeAreaView } from 'react-native';



import styles from './styles';

function CarouselItem({ item, index, }, parallaxProps) {

  return (
  <SafeAreaView style={styles.item}>
            <ParallaxImage
            source={item.source} 
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps}
            />
            
            <Text numberOfLines={2} style={[styles.title, {fontSize: RFValue ( 22 ,  740)}]}>
            {item.title}
            </Text>
            <View style={styles.change} >
                <Text style={[styles.changeText, {fontSize: RFValue ( 22 ,  740)}]}>Change</Text>
            </View> 
       
      </SafeAreaView>
  );
}

export default CarouselItem;