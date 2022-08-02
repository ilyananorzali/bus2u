import React, {useCallback} from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import VerticalWrapper from "../screens/components/Vertical/VerticalWrapper";
import { selectMap, selectDestination, setMap, clearState, setArrived, selectTravelTimeInformation } from './slices/navSlice'
import { useDispatch, useSelector } from 'react-redux'
import { BottomSheetFlatList} from '@gorhom/bottom-sheet';
import moment from 'moment';

const RouteScreen = (props) => {
  const eta = useSelector(selectTravelTimeInformation)
  const snap2 = [
    '15%', '40%', '40%'
  ]
  const dispatch = useDispatch()
  const handleRoute = () => {
    dispatch(setArrived())
    // dispatch(clearState())
    console.log('test')
  }
 
  const renderItem = useCallback(
    ({ item }) => (
      <>


        <View style={{
          flexDirection: 'row', //borderWidth: 2, borderColor: 'red',  
           width: 395, justifyContent: 'flex-end', paddingRight: 20, marginTop: -3
        }}>
          <View>

            <Text style={styles.timeStyle}> {item.bus_time}</Text>

            <View style={styles.leftStyle}>
              <Text style={styles.etaStyle}>{item.bus_eta}</Text>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style={styles.distanceStyle}>{item.bus_distance}</Text>
            </View>
          </View>

          <View style={styles.rightStyle}>
            <Text> BUS NO. </Text>
            <Text style={styles.numberstyle}> {item.bus_number} </Text>
          </View>


        </View>
        <View
          style={{
            borderBottomColor: "#decfce",
    borderBottomWidth: 0.25,
            marginBottom: 20,
          }}
        />


        <View style={styles.bottomStyle}>
          <Text style={styles.stationStyle}>To the {item.bus_station} station</Text>
        </View>

        <TouchableOpacity style={styles.button}  onPress={() => handleRoute()}>
          <Text style = {styles.buttonTitle} > Arrived </Text>
        </TouchableOpacity>
      </>
    )
  )




  const time = new Date();

  const timeFormatter = (date) => {
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let ampm = hours >= 12 ? 'pm' : 'am';
    // hours = hours % 12;
    // hours = hours ? hours : 12;
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // let strTime = hours + ' ' + ':' + ' ' + minutes //+ ' ' + ampm;
    let strTime = moment(date).format('hh : mm')
    return strTime
  }

  const api2 = [
    {
      "bus_time": `${eta}`,
      "bus_eta": '7 min',
      "bus_distance": '2.1 km',
      "bus_station": 'Lingkaran Cyberpoint 1',
      "bus_number": 'T520'
    }
  ]
console.log(eta)


  return (
      <>
        {/* <VerticalWrapper /> */}
      {/* <Bottom snap={snap2} renderItem={renderItem} data={api2} /> */}
      <BottomSheetFlatList 
      data={api2}
      renderItem={renderItem}
      contentContainerStyle={{backgroundColor: 'white', flex: 1 }}
      bounces={false}
      />
      </>
  )
}

const styles = StyleSheet.create({
    innerStyle: {
        borderColor: 'red',
        borderWidth: 2,
    
    
      },
      timeStyle: {
    
        fontWeight: "bold",
        color: "#394A48",
        fontSize: 24,
        textAlign: 'center',
       
      },
      upperStyle: {
    
    
    
      },
      leftStyle: {
        flexDirection: "row",
        width: 110,
        alignItems: 'center',
       
      },
      rightStyle: {
        marginLeft: 60,

      },
      bottomStyle: {
        alignItems: 'center',
    
      },
      numberstyle: {
        fontSize: 18,
        color: "#394A48"
      },
      etaStyle: {
        fontSize: 17,
        color: "green"
      },
      distanceStyle: {
        fontSize: 17,
        color: "#394A48"
      },
      stationStyle:{
        fontSize: 18,
        color: "#394A48",
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
       
      },
      hopStyle:{
        fontWeight: 'bold',
        color: "white",
        fontSize: 18,
        padding: 15
      },
      button:{
        alignItems: 'center',
        // backgroundColor: 'rgb(93, 95, 222)',
        backgroundColor: "#2E3035",
        borderRadius: 0,
        height: 48,
        justifyContent: 'center',
        margin: 20
      },
      buttonTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
      }
    
    
    
    
})

export default RouteScreen;