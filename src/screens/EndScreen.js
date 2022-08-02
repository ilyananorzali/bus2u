import React from 'react'
import { View, FlatList, Text, ScrollView, Image, StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import SizedBox from './components/SizedBox';
import { clearState } from './slices/navSlice';


const EndScreen = (props) => {
  const dispatch = useDispatch()

  const handleRoute2 = () => {
    dispatch(clearState())
    props.navigation.navigate('Home')
  }

  const handleRoute1 = () => {
    dispatch(clearState())
    props.navigation.navigate('Home')
  }


  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <Image style={styles.logostyle} source={require('../../assets/B2.png')} />

        <Image style={styles.successstyle} source={require('../../assets/success.png')} />

        <SafeAreaView style={styles.safeAreaView}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.content}
          >


            <Text style={styles.title}>Your have arrived at your destination!</Text>
            <SizedBox height={8} />

          </KeyboardAvoidingView>

        </SafeAreaView>
      </View>
      <TouchableOpacity style={styles.button} onPress={() =>  alert('Successfully added your journey to Favourite')}>
        <Text style={styles.buttonTitle} > Add your journey to favourite
       
  
  
        </Text>
      </TouchableOpacity>
      <SizedBox height={10} />

      <TouchableOpacity style={styles.button} onPress={() => handleRoute2()}>
        <Text style={styles.buttonTitle} > Back to home

        </Text>
      </TouchableOpacity>
    </ScrollView>


  )
}

const styles = StyleSheet.create({
  container: {

    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
    flex: 1,
    marginTop: 70,
    marginBottom: 40
    // height: '100%'

  },
  logostyle: {

    width: 120,
    height: 40,
    textAlign: 'center'

  },
  root: {
    backgroundColor: "#D2DCFF",
    flex: 1,

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  subtitle: {
    // color: 'rgba(235, 235, 245, 0.6)',
    color: "#394A48",
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  title: {
    color: "#394A48",
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 34,
    textAlign: 'center'
  },
  safeAreaView: {
    flex: 1,
  },
  successstyle: {
    width: 120,
    height: 150,
    textAlign: 'center',
    marginTop: 100

  },
  button: {
    alignItems: 'center',
    // backgroundColor: 'rgb(93, 95, 222)',
    backgroundColor: "#2E3035",
    borderRadius: 0,
    height: 48,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20

  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
  }


})

export default EndScreen;