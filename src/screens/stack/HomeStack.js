// import React from 'react'

// import HomeScreen from '../HomeScreen';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { FontAwesome } from '@expo/vector-icons';
// import ImageLogo from '../components/ImageLogo';
// import { createStackNavigator } from '@react-navigation/stack';
// import InfoScreen from '../InfoScreen';
// import ProfileScreen from '../ProfileScreen';
// import FavouriteScreen from '../FavouriteScreen';
// import HomeNavigator from '../navigator/HomeNavigator';
// import Drawer from '../components/drawer/Drawer';

// // HOME TABS

// export function Home() {
//   const Home = createStackNavigator()

//   return (
//     <Home.Navigator>
//       <Home.Screen name="Home" component={HomeScreen}
      
//       options={{
        
//         headerTitle: props => <ImageLogo {...props} /> ,
//         headerTitleAlign: 'left',
//         headerStyle: { height: 100, backgroundColor: "white", borderBottomColor: "#000"}
//       }}
//       />
      
//     </Home.Navigator>
//   )

// }
// function InformationStack() {
//   const InformationStack = createStackNavigator();

//   return (
//     <InformationStack.Navigator>
//       <InformationStack.Screen  name="Info" component={InfoScreen}/>
     
//     </InformationStack.Navigator>
   
//   )
// }


// function FavouriteStack() {
//   const FavouriteStack = createStackNavigator();

//   return (
//     <FavouriteStack.Navigator>
//       <FavouriteStack.Screen  
//       name="Favourite" component={FavouriteScreen}
      
//       />
     
//     </FavouriteStack.Navigator>
   
//   )
// }





// function HomeStack() {
//   const HomeStack = createBottomTabNavigator();

//   return (
//     <HomeStack.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'Home') {
//           iconName = focused ? 'home' : 'home';
//           color = focused ? 'black' : 'grey';
//         } else if (route.name === 'Favourite') {
//           iconName = focused ? 'star' : 'star';
//           color = focused ? 'black' : 'grey';
//         } else if (route.name === 'Information') {
//           iconName = focused ? 'location-arrow' : 'location-arrow';
//           color = focused ? 'black' : 'grey';
//         } 
//         return <FontAwesome name={iconName} size={24} color={color}  />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: 'black',
//       inactiveTintColor: 'gray',
//     }}
    
    
//     >
//       <HomeStack.Screen  
//       name="Home" 
//       component={HomeNavigator}      
//       />
//       <HomeStack.Screen name="Information" component={InformationStack} />
//       <HomeStack.Screen name="Favourite" component={FavouriteStack}/>
//       {/* <HomeStack.Screen name="Profile" component={ProfileStack}/> */}
      
//     </HomeStack.Navigator>
   
//   )
// }

// export default HomeStack
