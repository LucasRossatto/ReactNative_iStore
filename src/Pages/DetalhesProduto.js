import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function DetalhesProduto({ route }) {
  const { item } = route.params; // Pegando os dados do produto passado via navegação

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imagem }} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.ano}>{item.ano}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
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
