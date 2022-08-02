import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { apicyber} from './api/apicyber';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { setOpen,  selectTravelTimeInformation, selectOpen, setHome } from './slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';


const BusStopScreen = () => {
  
   const navigation = useNavigation();
   const dispatch = useDispatch();
   const open = useSelector(selectOpen);
   

  
  const snap1 = [
    '17%','40%', '80%'
  ]
    const handleRoute = () => {
        dispatch(setOpen(!open));
       
        navigation.navigate('Walking')
    }
    
    const renderItem = useCallback(
      ({item}) => (
       
        <View style ={styles.innerstyle}>
          <View style={{flexDirection: "column" ,marginRight: 20}}>

          <Image 
            style = {styles.bustopstyle}
            source = {require("../../assets/busstop.png")}/>
            <Image 
            style = {styles.busstyle}
            source = {require("../../assets/bus.png")}/>
          </View>
            
            <View style={{flexDirection: "column", flex: 3 }}>
            
            <Text style = {styles.stationStyle}>{item.bus_station}</Text>
            <Text></Text>
            <Text style = {styles.busnoStyle} >{item.bus_no}</Text>
            <Text style = {styles.busnameStyle}>{item.bus_name}</Text>
           
           
           
            
            </View>
            <View style={styles.columnStyle}>
              <View style = {{flexDirection: "row"}}>
            <Text style = {styles.walkStyle} >{item.bus_walk} {item.bus_stop_distance}</Text> 
   
            {/* <Text style= {{fontSize: 11, color: "#a9a9a9", paddingLeft: 14, borderWidth: 1}} ></Text> */}
              
              
              <View style = {{ flexDirection: "column"}}>
              <TouchableOpacity  
              onPress = {() => handleRoute() } 
              style={{ marginLeft: 10, marginTop: 5}} >
                
            <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
            </View>
            </View>
            </View>
            
            
        </View>
        
        
        
  
      )
  
    )
  

    return (
      <>
      <Text style={{ color: "#394A48", fontSize: 18, fontWeight: 'bold', paddingBottom: 10, textAlign: 'center', backgroundColor: 'white' }}>BUS STOP NEAR ME</Text>
      <BottomSheetFlatList
        data={apicyber}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        contentContainerStyle={{ backgroundColor: 'white' }}
        

      />
    </>
    )
  }



  
  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: 'grey',
    // },
    // contentContainer: {
    //   flex: 1,
    //   alignItems: 'center',
    // },
    // title:{
    //   fontSize: 16
    // }
    busstyle:{
      width: 30,
      height: 35,
      
      marginTop: 15
    },
    bustopstyle:{
      width: 30,
      height: 35,
      
      
    },
    innerstyle: {
      width: 350,
      flex: 1,
      borderWidth: 0,
      paddingBottom: 20,
      paddingLeft: 30,
      // borderColor: "red",
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      borderBottomColor: "#decfce",
    borderBottomWidth: 0.25 
    },
    busnoStyle:{
      fontWeight: "bold",
      color: "#394A48",
      paddingTop: 10
    },
    busnameStyle:{
      // fontWeight: "bold",
      color: "#394A48",
      fontSize: 12,
    },
    timetextStyle:{
      fontWeight: "bold",
      color: "#FF6A15",
      fontSize:12
    },
    walkStyle:{
  
      fontWeight: "bold",
      color: "#5ebf49",
      fontSize: 12,
      flexDirection: "column"
    },
    columnStyle: {
      flex: 1, 
      flexDirection: 'column',
      marginLeft: 5,
      borderWidth: 0,
      paddingBottom: 20
    },
    stationStyle:{
      fontWeight: "bold",
      color: "#394A48",
    },
    
  });
  export default BusStopScreen;