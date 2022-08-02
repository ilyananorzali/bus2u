import React, { useRef, useState, useEffect, } from 'react'

import { View, StyleSheet, Dimensions, Image, ActivityIndicator } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { useSelector, useDispatch } from 'react-redux'
import { selectBusOrigin, selectDestination, selectOrigin, selectTravelTimeInformation, setBusOrigin, setTravelTimeInformation, selectMap, setOpen } from '../slices/navSlice'
import { db2 } from '../firebase'
import { selectOpen } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { useIsFocused, useFocusEffect } from '@react-navigation/native'


const Map2 = () => {
  const origin = useSelector(selectOrigin);
  const busorigin = useSelector(selectBusOrigin);
  const destination = useSelector(selectDestination);
  // const eta = useSelector(selectTravelTimeInformation); 
  const open = useSelector(selectOpen);
  const map = useSelector(selectMap)
  const dispatch = useDispatch();
  const GOOGLE_MAP_APIKEY = 'AIzaSyAGQR7nOq_I8-mw09k1Ap0jtC7TW3NJ3H4'


  const [busCoordinate, setBusCoordinate] = useState([]);

  const station = [{
    dpulze: { latitude: 2.9216372294500426, longitude: 101.65129376233509 },
    sp_thearc: { latitude: 2.925201795640526, logitude: 101.63751270360495 },
    sp_cucms: { latitude: 2.9214422621088993, longitude: 101.63654775696365 }

  }]
  const extract = station.map(apidata => apidata)

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('screen is focused')

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        dispatch(setOpen())
      };
    }, [])
  );





  const mapRef = useRef(null);


  useEffect(() => {
    if (!origin) return;


    mapRef.current.fitToSuppliedMarkers(["origin", "busstoporigin"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    })




  }, [origin, station]);


  // useEffect(() => {
  //   if (!origin || !busorigin) {
  //     return (
  //       <ActivityIndicator size="large" color="#00ff00" />
  //     )
  //   }
  //   return () => {
  //     console.log("This will be logged on unmount");
  //   }
  // }, [])



  useEffect(() => {
    // if (!origin || !busorigin) return;
    let cancel = false
    const getTravelTime = async (olatitude, olongitude, dlatitude, dlongitude,) => {

      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${olatitude},${olongitude}&destinations=${dlatitude},${dlongitude}&departure_time=now&mode=walking&key=${GOOGLE_MAP_APIKEY}` //&destinations=2.921350448329656,101.63602975503585
      const data = await fetch(URL).then(response => response.json())
      console.log(data)
      if (data.status !== 'OK') return alert(data.error_message)
      dispatch(setTravelTimeInformation(data.rows[0].elements[0]))

    }



    getTravelTime(2.925201795640526, 101.63751270360495, extract[0].sp_thearc.latitude, extract[0].sp_thearc.longitude)
    getTravelTime(2.9214422621088993, 101.63654775696365, extract[0].sp_cucms.latitude, extract[0].sp_cucms.longitude)


    return () => {
      cancel = true
      getTravelTime()
      console.log("This will be logged on unmount");
    }


  }, [])
  console.log(open, 'line 114')





  return (
    <View>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: station[0].sp_cucms.latitude,
          longitude: station[0].sp_cucms.longitude,
          latitudeDelta: 0.010,
          longitudeDelta: 0.010,
        }}
        provider="google"


      >
        {origin?.coords && open && (
          <Marker
            coordinate={{

              latitude: origin?.coords.latitude,
              longitude: origin?.coords.longitude,

              // latitude: 2.9214422621088993,
              // longitude: 101.63654775696365

            }}
            title="Origin"
            // description={origin.description}
            identifier="origin"
          />
        )
        }

        {
          origin?.coords && open && (
            <MapViewDirections
              origin={{
                latitude: origin.coords.latitude,
                longitude: origin.coords.longitude,
              }}
              destination={{
                latitude: station[0].sp_cucms.latitude,
                longitude: station[0].sp_cucms.longitude,

              }}
              apikey={GOOGLE_MAP_APIKEY}
              strokeWidth={7}
              strokeColor="#f77f0f"
            />
          )
        }

        {/* {origin?.coords && open && title == 'bus' (
          <Marker
            coordinate={{
              
              // latitude: origin?.coords.latitude,
              // longitude: origin?.coords.longitude,
              
              latitude: 2.9214422621088993,
              longitude: 101.63654775696365

            }}
            title="Origin"
            // description={origin.description}
            identifier="origin"
          />
        )
        } */}
        {/* {
          origin?.coords && open && (
            <MapViewDirections
              origin={{
                 // latitude: origin.coords.latitude,
                // longitude: origin.coords.longitude,
              }}
              destination={{
              latitude: station[0].sp_cucms.latitude,
          longitude: station[0].sp_cucms.longitude,
  
              }}
              apikey={GOOGLE_MAP_APIKEY}
              strokeWidth={7}
              strokeColor="#f77f0f"
            />
          )
        }
        {
          title === 'bus' ? (
            <Marker coordinate={{
              latitude: busorigin[0],
              longitude: busorigin[1],
            }}
              identifier="busorigin"
    
    
            >
              <Image
    
                style={{ width: 50, height: 70 }}
                source={require('../../../assets/markerbus.png')}
                resizeMode="center"
                resizeMethod="resize"
              />
    
            </Marker>
          ) : (
            <>
            <Marker coordinate={{
              latitude: station[0].sp_cucms.latitude,
              longitude: station[0].sp_cucms.longitude,
            }}
              identifier="busstoporigin"
    
    
            >
              <Image
    
                style={{ width: 30, height: 40 }}
                source={require('../../../assets/busstop.png')}
                resizeMode="center"
                resizeMethod="resize"
              />
    
            </Marker>
            
            </>
          )
        } */}
        {/* {
          open ? (
            <Marker coordinate={{
              latitude: origin?.coords.latitude,
              longitude: origin?.coords.longitude,
            }}
              identifier="origin"
    
    
            >
           
    
            </Marker>
          ) : (
            <></>
          )
        } */}
        <Marker coordinate={{
          latitude: station[0].sp_cucms.latitude,
          longitude: station[0].sp_cucms.longitude,
        }}
          identifier="busstoporigin"


        >
          <Image

            style={{ width: 30, height: 40 }}
            source={require('../../../assets/busstop.png')}
            resizeMode="center"
            resizeMethod="resize"
          />

        </Marker>


      </MapView>


    </View>
  )
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    zIndex: 10

  }
})

export default Map2;


//  3.251350
//  101.678700