import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

// Importando icones das categorias
import axios from "axios";
import macImage from "../assets/Icons/mac.png";
import iphoneImage from "../assets/Icons/PhoneLandscape.png";
import ipadImage from "../assets/Icons/Tablet.png";
import watchImage from "../assets/Icons/Smartwatch.png";

export default function Feed() {
   // A URL inicial é '/mac'
  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // const que guarda as categorias
  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "Iphone", imagem: iphoneImage, url: "/iphone" },
    { nome: "Ipad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  // Função para buscar os produtos da categoria selecionada
  const listarProdutos = (categoriaUrl) => {
    setLoading(true);
    axios
      .get(`http://10.0.2.2:3000${categoriaUrl}`)
      .then((response) => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos", error);
        setLoading(false);
      });
  };

  // Atualiza os produtos quando a categoria ativa mudar
  useEffect(() => {
    listarProdutos(categoriaAtiva);
  }, [categoriaAtiva]);

  const renderItem = ({ item }) => (
    <View style={ProductStyle.item}>
      <Image style={ProductStyle.itemImage} source={{ uri: item.imagem }} />
      <Text style={ProductStyle.itemAno}>{item.ano}</Text>
      <Text style={ProductStyle.itemNome}>{item.nome}</Text>
    </View>
  );

  // Icone de carregamento de produtos
  if (loading) {
    return (
      <View style={ProductStyle.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <View style={CategoriaStyle.container}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={[
              CategoriaStyle.item,
              categoriaAtiva === categoria.url && CategoriaStyle.itemAtivo,
            ]}
            // Atualiza a categoria ativa
            onPress={() => setCategoriaAtiva(categoria.url)} 
          >
            <Image
              source={categoria.imagem}
              style={[
                CategoriaStyle.imagem,
                categoriaAtiva === categoria.url && CategoriaStyle.imagemAtiva,
              ]}
            />
            <Text
              style={[
                CategoriaStyle.texto,
                categoriaAtiva === categoria.url && CategoriaStyle.textoAtivo,
              ]}
            >
              {categoria.nome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={ProductStyle.container}>
        <FlatList
          data={produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={ProductStyle.list}
        />
      </View>
    </>
  );
}

const CategoriaStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    justifyContent: "space-between",
  },
  item: {
    height: 88,
    width: 88,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 12,
  },
  itemAtivo: {
    backgroundColor: "#242424",
  },
  imagem: {
    width: 37,
    height: 35,
    tintColor: "black",
  },
  imagemAtiva: {
    tintColor: "#fff",
  },
  texto: {
    marginTop: 3,
    fontSize: 13,
    color: "#333",
  },
  textoAtivo: {
    color: "#fff",
    fontWeight: "bold",
  },
});


const ProductStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  list: {
    alignItems: "stretch",
  },
  item: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
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
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    backgroundColor: "#E0E0E0",
    padding: 2,
    paddingHorizontal: 14,
    borderRadius: 50,
    margin: 6,
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

