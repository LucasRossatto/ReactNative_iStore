import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Feed from "../Components/Feed";
import Banner from "../Components/Banner";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
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

