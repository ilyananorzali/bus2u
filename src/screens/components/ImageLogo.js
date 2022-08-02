import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageLogo = () => {
  return (
    <View>
      <Image style={styles.logostyle} source={require('../../../assets/B2.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  logostyle: {
    width: 120,
    height: 30,
    marginLeft: 15,
    marginTop: 1
  },
})

export default ImageLogo
