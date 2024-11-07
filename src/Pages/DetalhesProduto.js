import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function DetalhesProduto({ route }) {
  const { item } = route.params; // Pegando os dados do produto passado via navegação
  const navigation = useNavigation(); // Hook para navegação

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.IconsContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../assets/Icons/arrow_left.png")} />
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.oval}>
              <Image
                style={styles.like}
                source={require("../assets/Icons/hearth.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Image style={styles.image} source={{ uri: item.imagem }} />

        <View>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.ano}>{item.ano}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  IconsContainer: {
    paddingHorizontal: 10,
    paddingTop: 56,
    paddingBottom: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  oval: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: 37,
    height: 37,
  },
  like: {
    width: 17,
    height: 16,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F0F0F0",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  ano: {
    fontSize: 18,
    color: "#555",
  },
  descricao: {
    fontSize: 16,
    marginTop: 20,
  },
  preco: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginTop: 10,
  },
});
