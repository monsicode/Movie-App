import { View, Text, TouchableWithoutFeedback, FlatList, TouchableOpacity,Image,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { image500 } from '../../api/moviedb';

var {width,height} = Dimensions.get('window');

export default function MovieList({title,data}) {

    const navigation = useNavigation();
  
    const handleClick = ()=>{
      navigation.navigate('Movie', item);
    }

  return (
    <View>
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="text-white mt-5 text-xl mb-5">{title}</Text>
        <TouchableOpacity>
            <Text style={{color:'#C53030'}}>See All</Text>
        </TouchableOpacity>
      </View>
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


// separate into another component
const MovieCard = ({item})=> {
    console.log(item.poster_path);
    return(
     <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
        <Image 
          className="rounded-2xl"
          source={{uri: image500(item.poster_path)}}
          style={{
            width : width * 0.3,
            height: height * 0.2, 
          }}
        />
     </TouchableWithoutFeedback>
    )
}