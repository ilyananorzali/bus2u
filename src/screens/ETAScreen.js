import React, { useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import Maps from './components/Maps'
import { useSelector } from 'react-redux';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setMap } from './slices/navSlice';
import { selectBusOrigin, selectDestination, selectOrigin,selectTravelTimeInformation, setBusOrigin, setTravelTimeInformation } from '../screens/slices/navSlice';



const ETAScreen = (props) => {

  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  const snap2 = [
    '22%', '45%', '45%'
  ]





  const time = new Date();

  const timeFormatter = (date) => {
    let eta;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    eta = minutes + parseInt(travelTimeInformation?.duration?.text);
    if (eta > 59) {
      eta = eta - 60
      hours = hours + 1
    }
    eta = eta < 10 ? '0' + eta : eta;






    let strTime = hours + ' ' + ':' + ' ' + eta //+ ' ' + ampm;
    return strTime
  }

  const api2 = [
    {
      "bus_time": `${timeFormatter(new Date())}`,
      "bus_eta": `${travelTimeInformation?.duration?.text}`,
      "bus_distance": `${travelTimeInformation?.distance?.text}`,
      "bus_station": 'SP 377 CUCMS Cyberjaya, Persiaran Multimedia',
      "bus_number": "T520"
    }
  ]
  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch()
  const handleRoute = () => {
    dispatch(setMap())
    props.navigation.navigate('Route')


  }

  const renderItem = useCallback(
    ({ item }) => (
      <View style={{ backgroundColor: "white" }}>


        <View style={{
          flexDirection: 'row', //borderWidth: 2, borderColor: 'red',  
          width: 395, justifyContent: 'flex-end', paddingRight: 20, marginTop: -3,
          backgroundColor: 'white'
        }}>
          <View style={styles.upperStyle}>

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

        <TouchableOpacity style={styles.button}

          onPress={() => handleRoute()}
        >
          <Text style={styles.buttonTitle} >Hop On

          </Text>
        </TouchableOpacity>
      </View>
    )
  )
 


  return (
    <>
      {/* <Maps />
      <Bottom snap={snap2} renderItem={renderItem} data={api2} /> */}
      <BottomSheetFlatList
        data={api2}
        renderItem={renderItem}
        keyExtractor={i => toString(i)}
        contentContainerStyle={{
          backgroundColor: 'white', flex: 1
        }}
        bounces={false}


      />
    </>
  )
}
const styles = StyleSheet.create({

  innerStyle: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1


  },
  upperStyle: {

  },
  timeStyle: {

    fontWeight: "bold",
    color: "#394A48",
    fontSize: 24,
    textAlign: 'center',
    color: "#394A48"
  },

  leftStyle: {
    // alignItems: 'center',

    flexDirection: "row",

    width: 110,
    alignItems: 'center'

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
    color: "green",

  },
  distanceStyle: {
    fontSize: 17,
    color: "#394A48"
  },
  stationStyle: {
    fontSize: 18,
    color: "#394A48",
    margin: 20,
    textAlign: 'center',
    fontWeight: "bold"



  },
  hopStyle: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 18,
    padding: 15
  },
  button: {
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



});
export default ETAScreen;


  // const renderItem = useCallback(
  //   ({item}) => (
  //     <View style ={styles.innerstyle}>
  //       <Image
  //         style = {styles.busstyle}
  //         source = {require("../../assets/bus.png")}/>
  //         <View style={{flexDirection: "column", width: 200, height: 40}}>
  //         <Text style = {styles.textStyle} >{item.bus_no}</Text>
  //         <Text style = {styles.placetextStyle}>{item.bus_name}</Text>

  //         </View>
  //         <View style={styles.columnStyle}>

  //           <Text style = {styles.timetextStyle} >{item.bus_time}</Text>
  //           <TouchableOpacity
  //           onPress = {() => handleRoute() }
  //           style={{marginTop: 12}} >

  //         <AntDesign name="right" size={24} color="black" />
  //         </TouchableOpacity>

  //         </View>

  //     </View>

  //   )

  // )