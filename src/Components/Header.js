import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// Hook para navegação
import { useNavigation } from "@react-navigation/native"; 

const Header = () => {
  // Usando o hook para navegação
  const navigation = useNavigation(); 

  return (
    <View style={Headerstyle.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Headerstyle.backButton}
      >
        <View style={Headerstyle.touchableLink}>
          <Image
            source={require("../assets/Icons/Vector.png")}
            style={Headerstyle.apple}
          />
          <Text style={Headerstyle.tituloHeader}>iStore</Text>
        </View>
      </TouchableOpacity>

      <View style={Headerstyle.oval}>
        <Image
          source={require("../assets/Icons/notification.png")}
          style={Headerstyle.icon}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <View style={Headerstyle.oval}>
          <Image
            source={require("../assets/Icons/user.png")}
            style={Headerstyle.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const Headerstyle = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#F0F0F0",
    paddingLeft: 30,
    paddingRight: 130,
    width: "100%",
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  touchableLink: {
    flexDirection: "row",
    alignItems: "center",
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
