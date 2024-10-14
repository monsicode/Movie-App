import { View, Text, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function TrendingMovies({data}) {

  const navigation = useNavigation();

  return (
    <View>
      <Text className="text-white mt-5">TrendingMovies</Text>
      <FlatList
        horizontal={true}
        style={{ paddingVertical: 5}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:10, paddingHorizontal: 12}}
        data={data}
        keyExtractor={(item,idx) => item + idx}
        renderItem={({item})=>{
          return(
          <TouchableOpacity
           className="flex justify-center items-center flex-row w-48 h-72 bg-red-300 rounded-xl"
           onPress={()=>navigation.navigate("Profile")}
          >
          <Text>baba</Text>
          </TouchableOpacity>
        )}}
      />
    </View>
  )
}

const MovieCard = ({item})=> {
  return(
   <TouchableWithoutFeedback >
      <Text className="text-white">Movie</Text>
   </TouchableWithoutFeedback>
  )
}