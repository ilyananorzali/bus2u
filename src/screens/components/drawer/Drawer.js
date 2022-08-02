// import React from 'react';
// import { View,  StyleSheet } from 'react-native'

// import {
  
//   createDrawerNavigator
// } from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import AccountScreen from '../../AccountScreen';
// import HelpCentreScreen from '../../HelpCentreScreen';
// import FeedbacksScreen from '../../FeedbacksScreen';
// import FavouriteScreen from '../../FavouriteScreen';
// import RouteScreen from '../../RouteScreen';

// import { useDispatch } from 'react-redux';
// import HomeStack, { Home } from '../../stack/HomeStack';
// import CustomDrawerContent from './CustomDrawerContent';

// const DrawerContent = () => {
//   const Drawer = createDrawerNavigator();
//   const dispatch = useDispatch();
  
//   return (
//     <Drawer.Navigator initialRouteName="HomeDrawer" drawerType="front" drawerPosition="right" drawerContent={props => <CustomDrawerContent {...props} />} >
//       <Drawer.Screen
//         name="HomeDrawer"
//         component={HomeStack}
//         options={{
//           drawerLabel: () => null,
//           title: null,
//           drawerIcon: () => null
//         }}
//       />
//       <Drawer.Screen
//         name="Account"
//         component={AccountScreen}
//         // options={{
//         //   drawerLabel: () => "Account",
//         //   drawerIcon: () => null
//         // }}
//       />
//       <Drawer.Screen 
//       name="Favourite" 
//       component={FavouriteScreen} 
//       // options={{
//       //   drawerLabel: () => "Favourite",
//       //   drawerIcon: () => null
//       // }}
//       />
//       <Drawer.Screen 
//       name="Route" 
//       component={RouteScreen} 
//       // options={{
//       //   drawerLabel: () => "Account",
//       //   drawerIcon: () => null
//       // }}
//       />
//       <Drawer.Screen 
//       name="HelpCentre" 
//       component={HelpCentreScreen} 
//       // options={{
//       //   drawerLabel: () => "Help Centre",
//       //   drawerIcon: () => null
//       // }}
//       />
//       <Drawer.Screen 
//       name="Feedbacks" 
//       component={FeedbacksScreen} 
//       // options={{
//       //   drawerLabel: () => "Feedbacks",
//       //   drawerIcon: () => null
//       // }}
//       />


//     </Drawer.Navigator>
//   )
// }

 


// export default DrawerContent
