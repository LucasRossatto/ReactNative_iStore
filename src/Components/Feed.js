import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import axios from "axios";

export default function Feed() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);

  const listMac = () => {
    axios
      .get("http://10.0.2.2:3000/mac")
      .then((response) => {
        setContatos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    listMac();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.itemImage} source={{ uri: item.imagem }} />
      <Text style={styles.itemAno}>{item.ano}</Text>
      <Text style={styles.itemNome}>{item.nome}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    
  },
  list: {
    alignItems: "stretch",
  },
  item: {
    flex: 1,
    marginLeft:10,
    marginRight:10,
    marginBottom:20,
    width: 207,
    height: 172,
    backgroundColor: "#fff",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  itemNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  itemAno: {
    fontSize: 14,
    fontWeight:"500",
    color: "#000",
    textAlign: "center",
    backgroundColor:"#E0E0E0",
    padding:2,
    paddingHorizontal:14,
    borderRadius:50,
    margin:6,
  },
  itemImage: {
    width: 120,
    height: 71,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
