import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeartIcon } from "react-native-heroicons/solid";
import {ChevronLeftIcon} from "react-native-heroicons/solid";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast';
import { fetchMovieCredits, fetchMovieDetails, image500 } from '../../api/moviedb';
import AsyncStorage from '@react-native-async-storage/async-storage';



var {width, height} = Dimensions.get('window');

export default function MovieScreen() {

  const {params: item} = useRoute();
  const navigation = useNavigation();

  const [isLiked, setLike] = useState(false);
  const [cast, setCast] = useState({});
  const [movie, setMovie] = useState({});

  const [isFavourite, toggleFavourite] = useState(false);
 

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

// saved movies
const toggleFavouriteAndSave = async () =>{
  try{
    // check if saved
    const savedMovies = await AsyncStorage.getItem("savedMovies");
    let savedMoviesArray = savedMovies ? JSON.parse(savedMovies) : [];
    console.log("Check if the movie is saved")

    const isMovieSaved = savedMoviesArray.some(
      (savedMovie) => savedMovie.id === item.id
    );

    console.log("Check")

    if( !isMovieSaved){
       //if not saved, add it
       savedMoviesArray.push(movie)
       await AsyncStorage.setItem("savedMovies", JSON.stringify(savedMoviesArray));
       toggleFavourite(true);
       console.log("Movie is saved to the list")
    }
    else{
      //if saved, remove
      const updatedSaveMoviesArray = savedMoviesArray.filter(
        (savedMovie) => savedMovie.id !== item.id
      );
      await AsyncStorage.setItem(
        "savedMovies",JSON.stringify(updatedSaveMoviesArray)
      );
      toggleFavourite(false)
      console.log("movie is removed")
    }


  }catch(error){
    console.log("Error Saving movie", error);
  }
}


useEffect(()=>{
  const loadSavedMovies = async () =>{
    try{
      const savedMovies = await AsyncStorage.getItem("savedMovies");
      const savedMoviesArray = savedMovies ? JSON.parse(savedMovies) : [];

      const isMovieSaved = savedMoviesArray.some(
        (savedMovie) => savedMovie.id ===item.id
      )

      toggleFavourite(isMovieSaved);
      console.log("if cur movie is saved")

    }catch(error){
      console.log("Error loading movie",error)
    }
  };

    loadSavedMovies();

},[item.id]);




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
        {/* //onPress={()=> setLike(!isLiked)} */}
        <TouchableOpacity className="mx-5 mt-2" onPress={toggleFavouriteAndSave}>
          <HeartIcon size="35" color={isFavourite ? 'red' : 'white'} />
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
    <Text className="text-neutral-400 text-center text-base ">
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