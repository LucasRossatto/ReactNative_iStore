import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Estoque() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View style={style.top}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require("../assets/Icons/arrow_left.png")} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    body: {
      backgroundColor: "#F0F0F0",
      flex: 1,
      display: "flex",
    },
    top: {
      paddingHorizontal: 10,
      gap: 16,
      marginHorizontal: 10,
      paddingBottom: 36,
      flexDirection: "row",
      alignItems: "center",
    },
});