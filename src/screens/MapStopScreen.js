import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Bottom from './components/Bottom'
import Map2 from './components/Map2'
import { useSelector } from 'react-redux'
import { selectHome } from './slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const MapStopScreen = ({ route }) => {
    const { title } = route.params;
    const home = useSelector(selectHome)
    const navigation = useNavigation()
    console.log(title, 'line 8 MapStopScreen')
    useEffect(() => {
        
        if(home === true){
          
          navigation.navigate('Home')
        }
      }, [home])

    return (
        <React.Fragment>
            <Map2 />
            <Bottom
                route="Busstop"
            />
        </React.Fragment>
    )
}

export default MapStopScreen
