import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeartIcon } from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/solid";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import { fetchMovieCredits, fetchMovieDetails, image500 } from '../../api/moviedb';



var {width, height} = Dimensions.get('window');

export default function MovieScreen() {

  const {params: item} = useRoute();
  const navigation = useNavigation();

  const [isLiked, setLike] = useState(false);
  const [cast, setCast] = useState({});
  const [movie, setMovie] = useState({});
 

  const [loading, setLoading] = useState(false);

  //whenever this param changes we are gonna call the api
  useEffect(()=>{
      setLoading(true);
      getMovieDetails(item.id);
      getMovieCredits(item.id);
  },[item])


  const getMovieDetails = async id =>{
    const data = await fetchMovieDetails(id);
    if(data) setMovie(data);
    setLoading(false);
  }

  const getMovieCredits = async id =>{
    const data = await fetchMovieCredits(id);
    if(data && data.cast) setCast(data.cast);
  }


  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900 "
    >
  <View className="w-full">
    {/* navigation part */}
      <SafeAreaView className="items-center justify-between flex-row w-full absolute z-20">
       <TouchableOpacity className="mx-5 mt-2" onPress={()=> navigation.goBack()}>
          <ChevronLeftIcon size="35" color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-5 mt-2" onPress={()=> setLike(!isLiked)}>
          <HeartIcon size="35" color={isLiked ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

   {/* movie img  */}
    <View>
     <Image
      style={{
        width: width,
        height: height * 0.5,
      }}

        source={{uri: image500(movie?.poster_path)}}
      // source={require('../../assets/not_used/pet.jpg')}
     />

     <LinearGradient
        colors={['transparent' , 'rgba(23,23,23,0)', 'rgba(23,23,23,1)']}
        style={{
        width: width,
        height: height * 0.5,
        }}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        className="absolute"
     />
    </View>
   </View> 

   {/* movie details */}
  <View className="space-y-3">
    <Text className="text-white text-4xl text-center font-bold tracking-widest">{movie?.title}</Text>
  
    {/*genre  */}
    <View className="flex-row justify-center  space-x-2">
        {
          movie?.genres?.map((genre,index)=>{
            let showDot = index + 1 !=movie.genres.length;
            return(
              <Text key={index} className="text-neutral-400 text-center text-sm">
                 {genre?.name}{showDot?"  ⭒":null}
              </Text>
            )
          })

        }
    </View>
    <Text className="text-neutral-400 text-center text-lg ">
      {
        movie?.overview
      }
    </Text>  
  </View>
  
 {/* cast members */}
   <Cast cast={cast} />

  </ScrollView>
  )
}