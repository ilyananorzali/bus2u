import React, { useCallback, useMemo, useRef, memo, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { createStackNavigator, TransitionPresets, } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

import BusScreen from '../BusScreen';
import ETAScreen from '../ETAScreen';
import RouteScreen from '../RouteScreen';
import EndScreen from '../EndScreen';
import BusStopScreen from '../BusStopScreen';
import WalkingScreen from '../WalkingScreen';




const Stacktmp = createStackNavigator();

function EndStack(){
  return(
    <Stacktmp.Navigator>
      <Stacktmp.Screen  name="End" component={EndScreen} />
    </Stacktmp.Navigator>
  )
}


const Stack = createStackNavigator();
export const BusNavigator = () => {
  
  
  const screenOptions = useMemo(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      

      headerShown: false,
      safeAreaInsets: { top: 0 },
      // cardStyle: {
      //   backgroundColor: 'white',
      //   overflow: 'visible',
      // },
    }),
    []
  );
  const screenAOptions = useMemo(() => ({ headerleft: () => null }), []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={screenOptions}  headerMode="screen" >
        <Stack.Screen name="Bus" component={BusScreen} options={screenAOptions} />
        <Stack.Screen name="ETA" component={ETAScreen} options={{headerShown: false}} />
        <Stack.Screen name="Route" component={RouteScreen} />
        <Stack.Screen name="End" component={EndStack} />
        <Stack.Screen name="Busstop" component= {BusStopScreen}/>


      </Stack.Navigator>
    </NavigationContainer>

  )

}
const StackTwo =createStackNavigator();

export const BusNavigatorTwo = () => {
  
  
  const screenOptions = useMemo(
    () => ({

      

      headerShown: false,
      safeAreaInsets: { top: 0 },
      // cardStyle: {
      //   backgroundColor: 'white',
      //   overflow: 'visible',
      // },
    }),
    []
  );
  const screenAOptions = useMemo(() => ({ headerleft: () => null }), []);
  return (
    <NavigationContainer independent={true}>
      <StackTwo.Navigator screenOptions={screenOptions}  headerMode="screen" >
        
        <StackTwo.Screen name="Busstop" component= {BusStopScreen} screenAOptions={screenAOptions}/>
        <StackTwo.Screen name = "Walking" component = {WalkingScreen} screenAOptions = {screenAOptions}/>
    

      </StackTwo.Navigator>
    </NavigationContainer>

  )

}






const Bottom = (props) => {
  // Snap
  const snap1 = [
    '10%','30%', '40%'
  ]
  const navigation = useNavigation()
  

  // Bus Navigator for BottomSheet ai mate
 


  // ref
  const bottomSheetRef = useRef(null);

  // 
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
  )

  // variables
  const snapPoints = useMemo(() => props.snap, []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);




  return (
    <>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snap1}
        onChange={handleSheetChanges}
        style={{ margin: 10 }}
        

      >
        
        
          



          {/* <BottomSheetFlatList
            data={props.data}
            keyExtractor={i => i.id}
            renderItem={props.renderItem}
          />  */}

          
         {
           props.route === "Bus" && (
              <BusNavigator />
           ) 
         }
         
         {
           props.route === "Busstop" && (
              <BusNavigatorTwo />
           ) 
         }
         

        

      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
   
  },
  



});

export default Bottom;
















// const renderItem = useCallback(
//   ({ item }) => (
//     <View style={styles.innerstyle}>
//       <Image
//         style={styles.busstyle}
//         source={require("../../../assets/bus.png")} />
//       <View style={{ flexDirection: "column", width: 200, height: 40 }}>
//         <Text style={styles.textStyle} >{item.bus_no}</Text>
//         <Text style={styles.placetextStyle}>{item.bus_name}</Text>

//       </View>
//       <View style={styles.columnStyle}>

//         <Text style={styles.timetextStyle} >{item.bus_time}</Text>
//         <TouchableOpacity
//           onPress={() => props.handleRoute()}
//           style={{ marginTop: 12 }} >

//           <AntDesign name="right" size={24} color="black" />
//         </TouchableOpacity>

//       </View>

//     </View>

//   )

// )







  // busstyle:{
  //   width: 50,
  //   height: 50,
  //   marginRight: 10,
  //   marginLeft: 0

  // },
  // innerstyle: {
  //   width: "90%",
  //   borderWidth: 0,
  //   paddingBottom: 10,
  //   // borderColor: "red",
  //   marginTop: 30,
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",


  // },
  // textStyle:{

  //   fontWeight: "bold",
  //   color: "#394A48"
  // },
  // placetextStyle:{

  //   // fontWeight: "bold",
  //   color: "#394A48"
  // },
  // timetextStyle:{

  //   fontWeight: "bold",
  //   color: "#FF6A15",
  //   marginTop: 15,


  // },
  // columnStyle: {
  //   flex: 1, 
  //   flexDirection: 'row',
  //   marginLeft: 5,
  // },