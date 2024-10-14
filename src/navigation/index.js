import { View, Text,  SafeAreaView ,  StyleSheet, Image} from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import HomeScreen from '../screens/HomeScreen';
import LikedScreen from '../screens/LikedScreen';
import SearchScreen from '../screens/SearchScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

// improting the icons this way, had problem importing with constat folder
import home from "../../assets/imgs/icons/home.png";
import search from "../../assets/imgs/icons/search.png"
import hearth from "../../assets/imgs/icons/hearth.png"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); 


const TabIcon = ({icon,name, focused }) =>{

  const color = focused ? '#C53030' : 'grey';

  return(
    <View className="items-center justify-end mt-2.5">
      <Image 
        source={icon}
        resizeMode="contain"
        // tintColor={color}
        style={{ tintColor: color }}
        className="w-6 h-6"
      />

      <Text className={`${focused ? 'font-psemibold': 'font-regular'} text-xs`} style={{ color: color }}>
        {name}
      </Text>

    </View>
  )

}


export default function AppNavigation() {

  function HomeStack(){
    return (
      <Stack.Navigator 
       screenOptions={{
        headerShown: false,
       }}
       initialRouteName='HomeScreen'
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    );
  }

  function HomeTabs(){
  return(
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: 'black'},
        }}
      >

        <Tab.Screen name="Home" component={HomeScreen} 
           options={{
             title: "Home",
             headerShown: false,
             tabBarIcon: ({color, focused}) =>(
              <TabIcon 
                icon={home}
                color={color}
                name="Home"
                focused={focused}
              />
             )
           }} 
        />

        <Tab.Screen name="Search" component={SearchScreen}
         options={{
             title: "Search",
            //  headerShown: false,
             tabBarIcon: ({color, focused}) =>(
              <TabIcon 
                icon={search}
                color={color}
                name="Search"
                focused={focused}
              />
             )
           }} 
         />

        <Tab.Screen name="Liked" component={LikedScreen} 
           options={{
             title: "Liked",
            //  headerShown: false,
             tabBarIcon: ({color, focused}) =>(
              <TabIcon 
                icon={hearth}
                color={color}
                name="Liked"
                focused={focused}
              />
             )
           }} 
        />

      </Tab.Navigator>
   );
  }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});