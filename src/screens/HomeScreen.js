import { View, Text, StatusBar,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import TrendingMovies from '../components/TrendingMovies';
import MovieList from '../components/MovieList';

import { fetchTrendingMovies } from '../../api/moviedb';
import { fetchUpcomingMovies } from '../../api/moviedb';
import { fetchTopRatedMovies } from '../../api/moviedb';

export default function HomeScreen() {

  const [trending, setTrending] = useState([1,2,3])
  const [upcoming, setUpcoming] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true)

  // Trending Movies fetch
  useEffect( ()=>{
    getTrendingMovies();
  },[]
 )

const getTrendingMovies = async()=>{
 const data = await fetchTrendingMovies();
  // console.log('trending',data);
  if(data && data.results) setTrending(data.results);
  setLoading(false);
}

// Upcoming 
useEffect( ()=>{
  getUpcomingMovies();
},[]
)

const getUpcomingMovies = async()=>{
const data = await fetchUpcomingMovies();
// console.log('trending',data);
if(data && data.results) setUpcoming(data.results);
setLoading(false);
}

//Top Rated
useEffect( ()=>{
  getTopRatedMovies();
},[]
)

const getTopRatedMovies = async()=>{
const data = await fetchTopRatedMovies();
// console.log('trending',data);
if(data && data.results) setTopRated(data.results);
setLoading(false);
}




  return (
    <View className="flex-1 bg-neutral-800">
     <SafeAreaView>
      <StatusBar style="light" />

      {/* Welcome title */}
       <View className="flex-row justify-between items-center items-center mx-4 mt-4">
      <TouchableOpacity  onPress={()=>navigation.navigate("Profile")}>
       <Image 
         source={require("../../assets/imgs/icons/user.png")}
         style={{width: 25,
                 height:25,
                 tintColor:'white'}}
        />
      </TouchableOpacity>
       <Text className="text-white text-3xl font-bold tracking-widest">
        <Text style={{color: '#C53030'}}> M</Text>ovie<Text style={{color: '#C53030'}}>G</Text>uide
       </Text>
       </View>
     </SafeAreaView>

    {/* Lists */}
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom: 10}}
    > 
 
    
    {/* {trending.lendth>0 && <TrendingMovies data={trending}/>} */}
    <TrendingMovies data={trending}/>

    {/* upcoming/popular/topRated part */}
    <MovieList title="Upcoming" data={upcoming} />
    <MovieList title="Top Rated" data={topRated} />

    </ScrollView>
    

    </View>
  )
}