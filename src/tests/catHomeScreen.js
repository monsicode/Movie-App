// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View , Button, Image} from 'react-native';

// import React, {useState} from 'react';


// const Cat = (props) =>{

//   const [isHungry, setHungry] = useState(true);
//   const [timesPet, petTheCat] = useState(0);

//  const catImg = timesPet > 0 ? require('C:\Users\Monika\Desktop\Movie_App\movie\assets\happy.jpg') : require('C:\Users\Monika\Desktop\Movie_App\movie\assets\pet.jpg')

//   return (
//   <View>
//     <Image
     
      
//       source={catImg} 
//       style={{ width:250, height:300}}
      

//     />

//     <Text>
//       {props.name} is a cat.{props.data} { isHungry ? "Please feed me" : "thank you"}
//     </Text>

//       <Button onPress={()=>{
//         if(isHungry)
//         {setHungry(false);}
//          else{
//           setHungry(true);
//          }
//         }}   
//         disabled={!isHungry}
//         title={ isHungry ? "Feed the cat" :  "The cat is feed <3"}
//         />

//        <Text>
//         You pet the cat {timesPet} times!
//        </Text>

//       <Button onPress={()=>{
//             petTheCat(timesPet + 1)
//         }}   
//         title="Pet the cat"
//         />

//   </View>
//   )
// }


// export default function CatScreen() {
//   return (
//     <View style={styles.container}>

//       <Text style={styles.text}>Cat cafe</Text>
     
//       <Cat name="Shushan"/>
    
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   text: {
//     fontSize:50,
//     color: 'blue',
//   },

//   link: {
//     color: 'blue',
//   }

// });
