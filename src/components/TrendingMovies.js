import { View, Text, TouchableWithoutFeedback, FlatList, TouchableOpacity,Image,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../../api/moviedb';

var {width,height} = Dimensions.get('window');

export default function TrendingMovies({data}) {
  const navigation = useNavigation();
  
  const handleClick = (item) =>{
    navigation.navigate("MovieDetail", item);
  }

  return (
    <View>
      <Text className="text-white mt-5 text-xl mb-5 mx-4">TrendingMovies</Text>
      <FlatList
        horizontal={true}
        style={{ paddingVertical: 5}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:10, paddingHorizontal: 12}}
        data={data}
        keyExtractor={(item,idx) => item + idx}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
      />
    </View>
  )
}

const MovieCard = ({item,handleClick})=> {
  return(
   <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
      <Image 
        className="rounded-2xl"
        source={{uri: image500(item.poster_path)}}
        style={{
          width : width * 0.6,
          height: height * 0.4, 
        }}
      />
   </TouchableWithoutFeedback>
  )
}