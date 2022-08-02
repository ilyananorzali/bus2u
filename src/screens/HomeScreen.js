import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator,TouchableOpacity, FlatList, Platform } from "react-native"

import { useFonts, Roboto_300Light } from '@expo-google-fonts/roboto'
import Searchbar from './components/Searchbar'
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { selectUser } from './slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin, selectOrigin, setBusOrigin } from './slices/navSlice';

import { db2 } from './firebase'





const HomeScreen = () => {
  const navigation = useNavigation();
  // const [test, setTest] = useState(true);
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const {username} = useSelector(selectUser)
  const dispatch = useDispatch()
  const origin = useSelector(selectOrigin);
  const [busCoordinate, setBusCoordinate] = useState([]);
  let busRef = db2.ref('/GPS');
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        console.log(errorMsg)
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      
        return;
      }

      let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });;
      if(location === null) {
        dispatch(setOrigin({
          coords: {
            latitude: 2.906540,
            longitude: 101.649924
          }
        }))
      } else {

        dispatch(setOrigin(location));
      }
      console.log(origin.coords, '44 line');
      setLocation(location);
      return (() => location)
      
    })();
  }, []);
  console.log(errorMsg)

  useEffect( () => {
     busRef.on('value', snapshot => {
      let data = snapshot.val();
      const items = Object.values(data);
      dispatch(setBusOrigin(items.map((val) => parseFloat(val))))
      setBusCoordinate(items.map((val) => parseFloat(val)))
      
      // console.log(busorigin, "26")
     
    
      return (() => busRef)
    })
    
  }, [])
  
  


  // const ref = useRef();


  // useEffect(() => {
  //   setTest(ref.current?.isFocused(false));


  // }, [test]);
  // console.log(test)


  const [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  const buscard = [
    {
      "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      "title": "BUS",
      "content": <Text>Find your nearest bus</Text>,
      "picture": "https://d3avoj45mekucs.cloudfront.net/rojakdaily/media/desiree-gasper/rapid-kl_1.jpg?ext=.jpg"
    },
    {
      "id": "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      "title": "BUS STOP",
      "content": <Text>Find your nearest bus stop</Text>,
      "picture": "https://edotcogroup.com/wp-content/uploads/2019/09/smart-bus-stop-project-04.jpg"
    },
  ]


  const handlePress = (item) => {
    
    console.log(item)

    if (item === 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba') {
      navigation.navigate('Map', {
        // title: "BUS NEAR ME",
        // paramKey: true
        title:'bus'
        
      })
    } else if (item === '3ac68afc-c605-48d3-a4f8-fbd91aa97f63') {
      navigation.navigate('MapStop', {
        // title: "BUS STOP NEAR ME",
        // paramKey: false
        title: 'busstop'
      })

    }

  }
  return (

    <SafeAreaView style={styles.root}>
      
      



      <Text style={styles.hellostyle}>
        Hello,
      </Text>
      <Text style={styles.textstyle}>
        where would you like to
      </Text>
      <Text style={styles.textstyle}>
        go today?
      </Text>

      <Searchbar
      
      />
      {/* {test ? (
        <>

        </>
      ) : null} */}
      <Text style={styles.nearstyle}> NEAR YOU </Text>
      <FlatList

        showsHorizontalScrollIndicator="false"
        horizontal
        data={buscard}
        keyExtractor={(buscard) => buscard.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handlePress(item.id)}>
              <View style={styles.container}>
                <Image style={styles.image} source={{ uri: item.picture }} />


                <View style={styles.textContainer}>
                  <Text style={styles.text}>
                    {item.title}
                  </Text>
                  <Text style={styles.text1}>
                    {item.content}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}

      />
     

    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  // backgroundstyle: {
  //   backgroundColor: "#C3FFF8",
  //   flex: 1

  // },
  root: {
    backgroundColor: "#D2DCFF",
    flex: 1,

  },
  logostyle: {
    width: 150,
    height: 50,
    marginLeft: 15,
    marginTop: 10
  },
  hellostyle: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "Roboto_300Light",
    marginLeft: 15,
    flexDirection: "row",
    color: "#394A48"
  },
  textstyle: {
    fontSize: 25,
    fontWeight: "bold",
    // fontFamily: "Roboto_300Light",
    marginLeft: 15,
    flexDirection: "row",
    color: "#394A48"
  },
  // circle1: {
  //   position: 'absolute',
  //   width: 400,
  //   height: 370,
  //   borderRadius: 200,
  //   left: -150,
  //   top: -100,
  //   backgroundColor: "#47DECC",
  // },
  // circle2: {
  //   position: 'absolute',
  //   width: 500,
  //   height: 470,
  //   borderRadius: 200,
  //   top: 400,
  //   left: -45,
  //   backgroundColor: "#47DECC",
  // },


  nearstyle: {
    textAlign: 'center',
    marginTop: 50,

    marginBottom: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "#394A48"
  },
  buttonstyle: {
    marginTop: 20
  },
  // imagestyle: {
  //   width: 250,
  //   height: 150,
  //   borderRadius: 10,
  //   margin: 10,

  //   resizeMode: 'cover'



  // },
  container: {
    width: 300,
    height: 210,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',

    marginLeft: 15,


  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,

  },
  image: {
    width: 300,
    height: 160
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: "#394A48"
  },
  text1: {

    fontSize: 12,
    color: "#93A3A1"
  }

})


export default HomeScreen;