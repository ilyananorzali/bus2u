import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, FlatList, Text, ScrollView, Image, StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

import SizedBox from './components/SizedBox';



const InfoScreen = (props) => {
  const navigation = useNavigation();

  const handlePress = (title, id) => {
    navigation.navigate('Place', {
      title: title,
      id: id
    })

  }


  const DATA = [
    {
      id: 'd8c78652-60d3-11ec-8607-0242ac130002',
      title: 'Cyberjaya / Putrajaya',
    },
    {
      id: '93bfa0d2-241d-11ec-9621-0242ac130002',
      title: 'Ampang',
    },
    {
      id: '9e3aedaa-241d-11ec-9621-0242ac130002',
      title: 'Cheras',
    },
    {
      id: 'a36f5130-241d-11ec-9621-0242ac130002',
      title: 'Damansara',
    },
    {
      id: '0edebaae-241f-11ec-9621-0242ac130002',
      title: 'Jalan Ipoh',
    },
    {
      id: '13a3171a-241f-11ec-9621-0242ac130002',
      title: 'Lebuhraya Persekutuan',
    },
    {
      id: '17ffc7fe-241f-11ec-9621-0242ac130002',
      title: 'Jalan Klang Lama',
    },
    {
      id: '1c482ebe-241f-11ec-9621-0242ac130002',
      title: 'Jalan Pahang',
    },
    {
      id: '8da06568-241f-11ec-9621-0242ac130002',
      title: 'Sungai Besi',
    },
  ];

  const Item = ({ title, id }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => handlePress(title, id)}>

        <Text style={styles.titlelist}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (

    <Item title={item.title} id={item.id}/>
  );


  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        {/* <Image style={styles.logostyle} source={require('../../assets/B2.png')} /> */}
      </View>

      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >

          <Text style={styles.title}>Choose Your Route!</Text>
          <SizedBox height={8} />

          <Text style={styles.subtitle}>Route information around Kuala Lumpur and Selangor</Text>
          <SizedBox height={32} />
        </KeyboardAvoidingView>



        <View style={styles.container2}>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

        </View >


      </SafeAreaView>
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
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  safeAreaView: {
    flex: 1,
  },
  titlelist: {
    fontSize: 16,
    color: "#394A48",
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 5,
    borderBottomColor: "#decfce",
    borderBottomWidth: 0.25

  },
  container2: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5
  }

})

export default InfoScreen
