import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula um delay de 3 segundos antes de navegar para a Home
    setTimeout(() => {
      navigation.replace("Home"); // Navega para a tela Home
    }, 3000); // 3 segundos de espera
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.Banner}
        source={require("../assets/Images/logo-splash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Fundo preto para tela de splash
  },
  image: {
    width: 200, // Ajuste o tamanho da imagem conforme necessário
    height: 200,
    resizeMode: "contain", // Garante que a imagem se ajuste dentro do espaço disponível
  },
});

export default SplashScreen;
