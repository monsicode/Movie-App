import { View, Text, StatusBar,Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import TrandingMovies from '../components/TrendingMovies';
import TrendingMovies from '../components/TrendingMovies';

export default function HomeScreen() {

  const navigation = useNavigation();

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
    
    <TrendingMovies />
   
    </ScrollView>
    
    
    
    </View>
  )
}