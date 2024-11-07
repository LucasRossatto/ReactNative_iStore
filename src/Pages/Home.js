import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Feed from "../Components/Feed";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <View style={style.body}>
      <Banner />
      <Feed />
    </View>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    justifyContent: "center",
    display: "flex",
  },
});

