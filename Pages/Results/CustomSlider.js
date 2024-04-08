import * as React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import styles from "./styles";

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    firstItem: 0,
    // loop: true,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };
  return (
    <View style={styles.container}>
      <Carousel {...settings} />
    </View>
  );
}