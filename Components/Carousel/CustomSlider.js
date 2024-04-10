import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import {openVisibleOnResults} from "./../../actions";
import { useDispatch, useSelector } from 'react-redux';

// import styles from "./styles";

const { width } = Dimensions.get("window");
export default function CustomSlider({ data }) {
  const settings = {
    sliderWidth: width,
    sliderHeight: 400,
    itemWidth: width - 80,
    firstItem: 0,
    loop: true,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
  };

  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={{height: 400}} onPress={() => dispatch(openVisibleOnResults())}>
      <Carousel {...settings} />
    </TouchableOpacity>
  );
}