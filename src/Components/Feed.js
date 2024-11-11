import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
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

  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "Iphone", imagem: iphoneImage, url: "/iphone" },
    { nome: "Ipad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

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

  useEffect(() => {
    listarProdutos(categoriaAtiva);
  }, [categoriaAtiva]);

  const navigation = useNavigation();

const CardProdutos = ({ item }) => {
  return (
    <View style={ProductStyle.item}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetalhesProduto", { item: item });
        }}
      >
        <View style={ProductStyle.coresView}>
          {item.ListaCores && item.ListaCores.length > 0 ? (
            item.ListaCores.map((cor, index) => (
              <View key={index} style={ProductStyle.optionAlign}>
                <View
                  style={[
                    ProductStyle.circuloCor,
                    { backgroundColor: cor.valorCor },
                  ]}
                />
              </View>
            ))
          ) : (
            <Text style={ProductStyle.noColors}>Sem cores disponíveis</Text>
          )}
        </View>

        <Image style={ProductStyle.itemImage} source={{ uri: item.imagem }} />
        <Text style={ProductStyle.itemAno}>{item.ano}</Text>
        <Text style={ProductStyle.itemNome}>{item.nome}</Text>
        <View style={ProductStyle.DetailBtn}>
          <Text style={ProductStyle.BtnText}>Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
          keyExtractor={(item) => item.id.toString()}
          renderItem={CardProdutos}
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
  
  DetailBtn: {
    backgroundColor: "#242424",
    borderRadius: 50,
    paddingVertical: 10,
    marginTop: 8,
  },
  BtnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
  item: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    maxWidth: 167,
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
  coresView: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  circuloCor: {
    width: 10,
    height: 10,
    borderRadius: 50,
  },
  optionAlign: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  noColors: {
    color: "#999",
    fontSize: 12,
    textAlign: "center",
  },
});