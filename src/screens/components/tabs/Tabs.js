import * as React from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';




const Tabs = ( {children}) =>{
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'star-sharp' : 'star-outline';
          } //home
           else if (route.name === 'Setting') {
            iconName = focused ? 'ios-settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
      
      >
          {children}
     
      </Tab.Navigator>
  
  );
}

export default Tabs




// "home" size={24} color="black" 
// "home" size={24} color="black"
// "settings-outline" size={24} color="black" 
// "ios-settings" size={24} color="black" 
// "staro" size={24} color="black" 
// "star" size={24} color="black" 
