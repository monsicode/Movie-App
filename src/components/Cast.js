import { View, Text,ScrollView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { image185 } from '../../api/moviedb'

export default function Cast({cast}) {

    let personName = 'Keano'
    let charecterName = 'Jon'

  return (
    <View>
      <Text className="text-white text-base mt-7 mx-5">Cast</Text>
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:15}}
       >
        {
          cast && Array.isArray(cast) && cast.length > 0 ? (
    cast.map((person, index) => {
      let personName = person?.name || 'Unknown';
      let characterName = person?.character || 'Unknown';
      return (
        <TouchableOpacity key={index} className="items-center mr-5">
          <Image
            className="rounded-3xl h-24 w-20"
            source={{ uri: image185(person?.profile_path) }}
          />
          <Text className="text-white">
            {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
          </Text>
          <Text className="text-neutral-400">
            {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
          </Text>
        </TouchableOpacity>
      );
    })
  ) : (
    <Text className="text-white">No cast available</Text>
  )
        }
       </ScrollView>
    </View>
  )
}