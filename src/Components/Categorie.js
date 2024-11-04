import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function Categorie() {
  return (
    <View style={style.body}>
      <Image source={require("../assets/Icons/mac.png")} style={style.icon} />
      <Text style={style.text}>Mac</Text>
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    height: 88,
    width: 88,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#242424",
  },
  text:{
    color:"white",
    fontSize:14,
  }
});
