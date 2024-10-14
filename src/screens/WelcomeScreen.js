import { Image,View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
// import { StatusBar } from 'expo-status-bar';


export default function WelcomeScreen() {

  const navigation = useNavigation();

  return (
    <SafeAreaView  className="flex-1 justify-end items-center space-y-10 relative " >

    <Image 
      source={require("../../assets/imgs/movieCover.jpg")} 
      style={{
        position: 'absolute',
        width: "100%",
        height: "100%"
      }}
      resizeMode='cover'
    />

{/* Text with button */}
    <View className="mb-20">
     <Text className="text-white text-4xl font-bold tracking-widest my-4 text-center">
       Movie Guide
     </Text>

     <Text className="text-white mb-2 font-bold tracking-widest text-center font-medium text-lg ">
       Find the movies you enjoy.
     </Text>
    </View>

  {/* Button */}
      <View className="my-4 mb-60">
        <TouchableOpacity className="px-16 py-4 rounded-xl bg-red-600"
         onPress={()=>navigation.navigate("HomeTabs")}>
           <Text className="text-white text-lg font-medium">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}