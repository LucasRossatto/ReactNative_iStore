import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={style.container}>


        <Image source={require("../assets/Icons/Vector.png")} style={style.apple} />
        <Text style={style.tituloHeader}>iStore</Text>
        <View style={style.notificacao}><Image source={require("../assets/Icons/notification.png")} style={style.icon}/></View>
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingLeft:50,
    paddingRight:50,
    width: "100%",
    height: 120,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row"
  },
  tituloHeader: {
    width: "100%",
    color: "black",
    fontSize: 20,
    fontWeight:"bold",
    padding:22,
    marginTop:5,
  },
  apple: {
    width: 23,
    height: 27,  
},
icon:{
    width: 22,
    height: 22,  
},
  notificacao:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#E5E5E5",
    borderRadius:40,
    width:38,
    height:38,
  }
});
