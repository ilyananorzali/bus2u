import React, { useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { setHome } from './slices/navSlice';




const WalkingScreen = (props) => {


  const snap1 = [
    '22%', '22%', '22%'
  ]

  const { bottom } = useSafeAreaInsets();
  const dispatch = useDispatch()
  const handleRoute = () => {

    dispatch(setHome())
  }

  const renderItem = useCallback(
    ({ item }) => (
      <>
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              borderBottomColor: "#decfce",
              borderBottomWidth: 0.25,
              marginBottom: 20,
            }}
          />

          <TouchableOpacity style={styles.button}

            onPress={() => handleRoute()}
          >
            <Text style={styles.buttonTitle} >Done

            </Text>
          </TouchableOpacity>
        </View>
      </>
    )
  )

  return (
    <>
      {/* <Maps />
      <Bottom snap={snap2} renderItem={renderItem} data={api2} /> */}
     
      <TouchableOpacity style={styles.button}

        onPress={() => handleRoute()}
      >
        <Text style={styles.buttonTitle} >Done

        </Text>
      </TouchableOpacity>
      <BottomSheetFlatList
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

  button: {
    alignItems: 'center',
    // backgroundColor: 'rgb(93, 95, 222)',
    backgroundColor: "#2E3035",
    borderRadius: 0,
    height: 48,
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20

  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  }



});
export default WalkingScreen;
