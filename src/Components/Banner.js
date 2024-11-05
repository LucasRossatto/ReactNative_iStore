import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Banner() {
  return (
    <View style={styles.Body}>
        <Image  style={styles.Banner} source={require("../assets/Images/Banner.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Body:{
        justifyContent:"center",
        alignItems:"center",
    },
    Banner:{
        width:360,
        borderRadius:20
    }
})