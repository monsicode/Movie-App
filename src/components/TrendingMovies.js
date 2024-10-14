import { View, Text } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';

export default function TrendingMovies() {
  return (
    <View>
      <Text className="text-white mt-5">TrendingMovies</Text>
      <Carousel />
      
    </View>
  )
}