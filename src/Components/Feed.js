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
import { useNavigation } from "@react-navigation/native"; 

import axios from "axios"; 

// Icons das categorias
import macImage from "../assets/Icons/mac.png"; 
import iphoneImage from "../assets/Icons/PhoneLandscape.png";
import ipadImage from "../assets/Icons/Tablet.png";
import watchImage from "../assets/Icons/Smartwatch.png";

export default function Feed() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac"); 
  const [produtos, setProdutos] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // array categorias
  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "Iphone", imagem: iphoneImage, url: "/iphone" },
    { nome: "Ipad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  // Função para buscar os produtos da categoria
  const listarProdutos = (categoriaUrl) => {
    setLoading(true); // Ativa loading
    axios
      .get(`http://10.0.2.2:3000${categoriaUrl}`) // Fazendo a requisição com a URL da categoria
      .then((response) => {
        setProdutos(response.data); // Armazena os produtos no estado
        setLoading(false); // Desativa o loading
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos", error);
        setLoading(false); // Desativa o loading em caso de erro
      });
  };

  useEffect(() => {
    listarProdutos(categoriaAtiva); // Chama a função para listar produtos da categoria
  }, [categoriaAtiva]);

  const navigation = useNavigation(); // Hook para navegação

  // Função para renderizar cada item da lista
  const CardProdutos = ({ item }) => (
    <View style={ProductStyle.item}>
      <TouchableOpacity
        onPress={() => {
          // Navega para a tela de detalhes do produto, passando os dados do produto
          navigation.navigate("DetalhesProduto", { item: item });
        }}
      >
        <Image style={ProductStyle.itemImage} source={{ uri: item.imagem }} />
        <Text style={ProductStyle.itemAno}>{item.ano}</Text>
        <Text style={ProductStyle.itemNome}>{item.nome}</Text>
        <View style={ProductStyle.DetailBtn}><Text style={ProductStyle.BtnText}>Detail</Text></View>
      </TouchableOpacity>
    </View>
  );

  // Exibe um carregamento enquanto os dados estão sendo buscados
  if (loading) {
    return (
      <View style={ProductStyle.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      {/* Categoria de navegação */}
      <View style={CategoriaStyle.container}>
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={[
              CategoriaStyle.item,
              categoriaAtiva === categoria.url && CategoriaStyle.itemAtivo,
            ]}
            onPress={() => setCategoriaAtiva(categoria.url)} // Atualiza a categoria ativa
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

      {/* Lista de produtos */}
      <View style={ProductStyle.container}>
        <FlatList
          data={produtos} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={CardProdutos} // Cria os cards
          numColumns={2} // Exibindo dois produtos por linha
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
  DetailBtn:{
    backgroundColor:"#242424",
    borderRadius:50,
    paddingVertical:10,
    marginTop:8
  },
  BtnText:{
    color:"#fff",
    textAlign:"center",
    fontSize:12,
  },
  item: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width: 207,
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
