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

        <View style={styles.detalhes}>
          <View style={styles.detalhesAlign}>
            <View style={styles.detalhesTitulo}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.ano}>{item.ano}</Text>
            </View>
            <Text style={styles.preco}>R$ {item.preco}</Text>

            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  IconsContainer: {
    paddingHorizontal: 26,
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
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  nome: {
    fontSize: 29,
    fontWeight: "bold",
    marginVertical: 10,
  },
  ano: {
    fontSize: 12,
    color: "#555",
    marginTop: 13,
  },
  descricao: {
    fontSize: 16,
  },
  preco: {
    fontSize: 21,
    color: "#7893F4",
  },
  detalhes: {
    backgroundColor: "#FFF",
    fontSize: 300,

    flex: 2,
    padding: 20,
    borderRadius: 35,
  },
  detalhesAlign: {
    marginHorizontal: 10,
  },
  detalhesTitulo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
