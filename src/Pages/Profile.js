import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View style={style.body}>
      <View style={style.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
        <Text style={style.profile}>Profile</Text>
      </View>

      <View style={style.ovalAlign}>
        <View style={style.oval}></View>

        <TouchableOpacity style={style.editBtn}>
          <Image source={require("../assets/Icons/edit.png")} />
        </TouchableOpacity>
      </View>

      <Text style={style.Username}>Admin</Text>
      <Text style={style.UserEmail}>Admin@gmail.com</Text>
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
    paddingTop: 66,
    gap: 16,
    marginHorizontal: 10,
    paddingBottom: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    fontSize: 16,
    fontWeight: "bold",
  },
  oval: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 68,
    height: 68,
  },
  ovalAlign: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom:5,
  },
  editBtn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 34,
    height: 34,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 46,
    top: 36,
  },
  Username: {
    alignSelf: "center",
    fontSize:20,
    fontWeight:"bold",
    marginVertical:5,
  },
  UserEmail: {
    alignSelf: "center",
    backgroundColor: "#E2E2E2",
    fontSize:14,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 20,
  },
});
