import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { apicyber } from './api/apicyber';
import { AntDesign } from '@expo/vector-icons';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { setOpen,  selectTravelTimeInformation } from './slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';








const BusScreen = () => {

  //  const {bottom}= useSafeAreaInsets();
   const navigation = useNavigation();
   const dispatch = useDispatch();
 
  const handleRoute = () => {
      dispatch(setOpen(true));
      navigation.navigate('ETA')
      
  }
  
  const renderItem = useCallback(
    ({ item }) => (
      < View style={styles.innerstyle}>
        
        <View style={{ flexDirection: "column", paddingLeft: 20 }}>
          <Image
            style={styles.busstyle}
            source={require("../../assets/bus.png")} />
        </View>
        <View style={{ flexDirection: "column", width: 250, height: 50, paddingLeft: 5 , paddingTop: 8, }}>
          <Text style={styles.textStyle} >{item.bus_no}</Text>
          <Text style={styles.placetextStyle}>{item.bus_name}</Text>

        </View>
        <View style={styles.columnStyle}>

          {/* <Text style={styles.timetextStyle} >{item.bus_time}</Text> */}
          <TouchableOpacity
            onPress={() => handleRoute()}
            style={{   }} >

            <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>

        </View>

      </View>

    ),


  )


  return (
    <>
      {/* <Maps /> */}
      {/* <Bottom data={api} title={title} handleRoute={handleRoute} renderItem = {renderItem} snap={snap1}/> */}
      <Text style={{ color: "#394A48", fontSize: 18, fontWeight: 'bold', paddingBottom: 10, textAlign: 'center', backgroundColor: 'white' }}>BUS NEAR ME</Text>
      <BottomSheetFlatList
        data={apicyber}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        contentContainerStyle={{backgroundColor: 'white' }}
        

      />
    </>
  )
}
const styles = StyleSheet.create({

  busstyle: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginLeft: 15,

  },
  innerstyle: {
    flex: 1,
    
    paddingBottom: 20,
   
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomColor: "#decfce",
    borderBottomWidth: 0.25




  },
  textStyle: {

    fontWeight: "bold",
    color: "#394A48"
  },
  placetextStyle: {

    // fontWeight: "bold",
    color: "#394A48",
    // fontSize: 12,
    marginTop: 5,

  },
  timetextStyle: {

    fontWeight: "bold",
    color: "#FF6A15",
    marginTop: 15,



  },
  columnStyle: {
    flex: 5,
    flexDirection: 'column',
    marginLeft: 10,
    
    marginTop: 10

    
  },
});
export default BusScreen;