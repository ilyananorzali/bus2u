import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import HomeStack from '../stack/HomeStack';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../HomeScreen';
import BusStopScreen from '../BusStopScreen';

import RouteScreen from '../RouteScreen';
import EndScreen from '../EndScreen';
import InfoScreen from '../InfoScreen';
//SearchScreen
//EndScreen
import FavouriteScreen from '../FavouriteScreen';
import ProfileScreen from '../ProfileScreen';
import SettingScreen from '../SettingScreen';
import SupportScreen from '../SupportScreen';
import PlaceScreen from '../PlaceScreen';
import DirectionScreen from '../DirectionScreen';
import CustomDrawerContent from '../components/drawer/CustomDrawerContent';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import AuthStack from '../stack/AuthStack';
import { useDispatch, useSelector, } from 'react-redux';
import { selectUser, signInWithEmailAndPassword, logout, updateUser } from '../slices/userSlice';
import { auth } from '../firebase';
import ImageLogo from '../../screens/components/ImageLogo'
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../MapScreen';
import Route2Screen from '../Route2Screen';
import MapStopScreen from '../MapStopScreen';
import routes from '../components/routes';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {TouchableOpacity} from 'react-native'



// export function Header({ isHome, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row', height: 50 }}>
//       {isHome ? (
//         <TouchableOpacity onPress={() => navigation.openDrawer()}>
//           <View
//             style={{ flex: 1, justifyContent: 'center', textAlign: 'center' }}>
//                 <Entypo name="menu" size={24} color="black" />
//           </View>
//         </TouchableOpacity>
//       ) : (
//         <View style={{ flex: 1, justifyContent: 'center' }}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image
//               style={{ width: 30, height: 30, marginLeft: 5 }}
//               source={require('./back-button.png')}
//               resizeMode="contain"
//             />
//           </TouchableOpacity>
//         </View>
//       )}

//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
//         <Text style={{ textAlign: 'center' }}>{title}</Text>
//       </View>
//       <View style={{ flex: 1 }}></View>
//     </View>
//   );
// }

function ActionBarIcon() {
  return (
    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
            <Icon name="menu" size={35} color="black" style={styles.menu} />
        </TouchableOpacity>
   
  );
}

const StackHome = createStackNavigator();

function handleHeader() {
  return {
    headerTitle: props => <ImageLogo {...props} />,
    headerTitleAlign: 'center',
    headerStyle: { height: 90, backgroundColor: "white", borderBottomColor: "#000" },
    headerShown: true,
    headerLeft : props => <ActionBarIcon {...props} />

  }
}

function HomeStack() {
  return (
    <StackHome.Navigator

    >
      <StackHome.Screen
        options={{headerShown: false }} //,
        name="Home"
        component={HomeScreen}
       
    
      />




      {/* Remember to add EndScreen and SearchScreen */}
    </StackHome.Navigator>
  );

}

const PlaceStack = createStackNavigator();

function Place() {
  return (
    <PlaceStack.Navigator>
      <PlaceStack.Screen
        options={{headerShown: false}}
        name="Information"
        component={InfoScreen}

      />
      <PlaceStack.Screen
        options={{headerShown: false}}
        name="Place"
        component={PlaceScreen}
      />
      <PlaceStack.Screen
        options={{headerShown: false}}
        name="Direction"
        component={DirectionScreen}
      />
    </PlaceStack.Navigator>


  )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            color = focused ? 'black' : 'grey';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'star' : 'star';
            color = focused ? 'black' : 'grey';
          } else if (route.name === 'Information') {
            iconName = focused ? 'location-arrow' : 'location-arrow';
            color = focused ? 'black' : 'grey';
          } //home
          // //  else if (route.name === 'Profile') {
          // //   iconName = focused ? 'user-circle' : 'user-circle';
          // //   color = focused ? 'black' : 'grey';
          // }
          return <FontAwesome name={iconName} size={24} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>


      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Information" component={Place} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />

    </Tab.Navigator>
  );
};

const Laci = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Laci.Navigator
      initialRouteName="HomeApp"
      drawerContent={(props) => <CustomDrawerContent {...props} />}


    >
      <Laci.Screen
        name="HomeApp"
        component={TabNavigator}


      />
      <Laci.Screen name="Accounts" component={ProfileScreen} />
      <Laci.Screen name="Favourite" component={FavouriteScreen} />
      <Laci.Screen name="Support" component={SupportScreen} />
      <Laci.Screen name="Setting" component={SettingScreen} />

    </Laci.Navigator>
  )

}

const Combine = createStackNavigator();

function CombineNavigator() {
  return (
    <Combine.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Combine.Screen
        options={handleHeader}
        name="Home"
        component={DrawerNavigator}
      />
      {/* <Combine.Screen 
       options={handleHeader}
       name="Bus"
       component={BusScreen}
      />
     
       <Combine.Screen 
       options={handleHeader}
       name="ETA"
       component={ETAScreen}
      
      /> */}
      {/* <Combine.Screen 
       options={handleHeader}
       name="BusStop"
       component={BusStopScreen}
      /> */}
      <Combine.Screen
        options={handleHeader}
        name="Map"
        component={MapScreen}
      />
      <Combine.Screen
        options={handleHeader}
        name="MapStop"
        component={MapStopScreen}
      />
      {/* <Combine.Screen 
       options={handleHeader}
       name="Route"
       component={RouteScreen} 
      
      /> */}

      <Combine.Screen
        options={handleHeader}
        name="Route2"
        component={Route2Screen}

      />
      <Combine.Screen
        name="End"
        component={EndScreen}
      />
      <Combine.Screen
        name="routes"
        component={routes}
      />
    </Combine.Navigator>

  )
}


const RootNavigator = () => {


  const user = useSelector(selectUser);
  const dispatch = useDispatch()




  useEffect( () => {
    const subscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        const payload = {

          email: userAuth.email,
          username: userAuth.displayName,
          id: userAuth.uid,
          authenticated: true,
          isSuccess: true
        }
        // set id email uid
        dispatch(updateUser(payload))

      } else {
        dispatch(logout())
      }
    })
    subscribe()
    return (() => subscribe())


  }, [auth, dispatch])
  console.log("Root Navigator: 45", user);

  return (
    <>
      {
          
          user.authenticated ? ( <CombineNavigator /> ) : (
                  <AuthStack />
          )
      } 
      
      {/* <CombineNavigator /> */}

    </>
  )
}
const styles = StyleSheet.create({

menu:{
  marginLeft: 10
}
})

export default RootNavigator
