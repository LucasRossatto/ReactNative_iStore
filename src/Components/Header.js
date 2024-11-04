import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={style.container}>

      <View style={style.logoAlign}>
        <Image source={require("../assets/Vector.png")} style={style.image} />
        <Text style={style.tituloHeader}>iStore</Text>
      </View>
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    backgroundColor: "orange",

  },
  logoAlign:{
    flexDirection: "row",
  },
  tituloHeader: {
    width: "100%",
    color: "black",
    paddingTop: 60,
    fontSize: 20,
  },
  image: {
    width: 23,
    height: 27,
  },
});
