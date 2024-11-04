import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <View style={style.container}>
      <Image
        source={require("../assets/Icons/Vector.png")}
        style={style.apple}
      />
      <Text style={style.tituloHeader}>iStore</Text>
      <View style={style.oval}>
        <Image
          source={require("../assets/Icons/notification.png")}
          style={style.icon}
        />
      </View>
      <View style={style.oval}>
        <Image
          source={require("../assets/Icons/user.png")}
          style={style.icon}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#E5E5E5",
    paddingLeft: 50,
    paddingRight: 140,
    width: "100%",
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  tituloHeader: {
    width: "100%",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginTop: 5,
  },
  apple: {
    width: 23,
    height: 27,
  },
  icon: {
    width: 22,
    height: 22,
  },
  oval: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    margin: 3,
    width: 37,
    height: 37,
  },
});
