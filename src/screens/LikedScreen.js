import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { image500 } from '../../api/moviedb';

var {width,height} = Dimensions.get('window');


export default function LikedScreen() {
  const navigation = useNavigation();

  const [savedMovies, setSavedMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // load saved movies
      const loadSavedMovies = async () => {
        try {
          const savedMovies = await AsyncStorage.getItem("savedMovies");
          const savedMoviesArray = savedMovies ? JSON.parse(savedMovies) : [];
          setSavedMovies(savedMoviesArray);

          console.log("saved");

        } catch (error) {
          console.log(error);
        }
      };

      loadSavedMovies();
    }, [navigation])
  );

  return (
    <ScrollView className="flex-1 bg-neutral-800">
      <View>
        <View className=" bg-neutral-900">
          <Text className="text-white text-2xl mx-5 mt-5 mb-5">Liked Movies</Text>
        </View>

        {/* movielist */}
        <View className="flex-row flex-wrap justify-between mx-6 mt-5 ">
          {
            savedMovies.map((movie, index) => {
              return ( 
                <View className="flex-row" key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => navigation.push("MovieDetail", movie)}
                  >
                    <Image
                      source={{ uri: image500(movie?.poster_path) }}
                      className="rounded-2xl mb-5"
                      style={{
                        width: width*0.4,
                        height: height*0.3,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )
            })
          }

        </View>

      </View>
    </ScrollView>
  )
}
