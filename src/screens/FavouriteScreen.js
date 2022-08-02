
import React, { useCallback } from 'react';
import {View, FlatList, Text, ScrollView, Image, StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import SizedBox from './components/SizedBox';
import { apicyber} from './api/apicyber';
import { apifav } from './api/apifav';
import { withTheme } from 'react-native-elements';

const FavouriteScreen = (props) => {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.titlelist}>{title}</Text>
    </View>
  );
  
  
    // const renderItem = ({ item }) => (
    //   <Item title={item.title} />
    // );

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
            
            <Text style = {styles.stationStyle}>From: {item.bus_station}{"\n"}</Text>
            <Text style = {styles.stationStyle}>To: {item.destination}</Text>
            <Text style = {styles.busnoStyle} >{item.bus_no}</Text>
            <Text style = {styles.busnameStyle}>{item.bus_name}</Text>
           
           
           
            
            </View>
           
            
            
        </View>
        
        
        
  
      )
  
    )

  return (
    <ScrollView style={styles.root}>
    <View style={styles.container}>
   
    </View>

    <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >

          <Text style={styles.title}>Your Favourite Journey is Here!</Text>
          <SizedBox height={8} />

          <Text style={styles.subtitle}>Choose your journey to directly ride the bus</Text>
          <SizedBox height={32} />
          <Text style= {{color: "#394A48" }}> Today, 29 Dec</Text>
          </KeyboardAvoidingView>
<View>
<FlatList
        data={apifav}
        keyExtractor={i => i.id}
        renderItem={renderItem}
        
        

      />
</View>
          </SafeAreaView>
    </ScrollView>
   
  )}

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
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      
    },
    titlelist: {
      fontSize: 16,
    },
   
      busstyle:{
        width: 30,
        height: 35,
        
        marginTop: 40
      },
      bustopstyle:{
        width: 30,
        height: 35,
        
        
      },
      innerstyle: {
       
        flex: 1,
        borderRadius: 10,
        padding: 20,
        
     
        margin: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        
    
      backgroundColor: "white"

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
      
    })

  

export default FavouriteScreen;