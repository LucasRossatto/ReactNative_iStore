import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// Icons das categorias
import macImage from "../assets/Icons/mac.png";
import iphoneImage from "../assets/Icons/PhoneLandscape.png";
import ipadImage from "../assets/Icons/Tablet.png";
import watchImage from "../assets/Icons/Smartwatch.png";

export default function Estoque() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "iPhone", imagem: iphoneImage, url: "/iphone" },
    { nome: "iPad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  const listarProdutos = (categoriaUrl) => {
    setLoading(true);
  
    axios
      .get(`http://10.0.2.2:3000${categoriaUrl}`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          // Verifica se a resposta contém dados e se é um array válido
          const produtosValidos = response.data.map((produto) => {
            // Valida cada produto antes de usá-lo
            if (produto) {
              return produto;
            } else {
              // Caso algum item tenha propriedades nulas ou indefinidas
              console.warn('Produto com dados inválidos encontrado:', produto);
              return null; 
            }
          }).filter(Boolean); 
          // Se a categoria for encontrado  e não haver produto retorna um alerta
          if (produtosValidos.length > 0) {
            setProdutos(produtosValidos);
          } else {
            Alert.alert("Nenhum produto encontrado"),
            console.warn("Nenhum produto encontrado"),
            setProdutos([]);
          }
        } 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos', error);
        setProdutos([]); 
        setLoading(false);
      });
  };

  useEffect(() => {
    listarProdutos(categoriaAtiva);
  }, [categoriaAtiva]);

  const navigation = useNavigation();

  const CardProdutos = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DetalhesProduto", { item: item });
        }}
      >
        <View style={ProductStyle.item}>
          {!item.imagem ? (
            <View style={noImage.container}>
              <Image
                source={require("../assets/Icons/NoImage.png")}
                style={noImage.image}
              />
              <View>
                <Text style={noImage.title}>
                  Este produto não possui imagem cadastrada
                </Text>
              </View>
            </View>
          ) : (
            <Image source={{ uri: item.imagem }} style={style.image} />
          )}

          <View style={style.viewDetalhes}>
            <Text style={style.titleText}>{item.nome}</Text>
            <Text style={style.subTitleText}>{item.modelo}</Text>
            <Text>id: {item.id}</Text>
            <Text>R$ {item.preco}</Text>

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
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={style.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
      </View>
      <Text style={style.title}>
        Escolha a categoria do produto para vizualizar seu estoque
      </Text>

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
    marginRight: 20,
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
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 13,
    flexDirection: "row",
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
    justifyContent: "flex-start",
    marginVertical: 6,
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

const style = StyleSheet.create({
  top: {
    paddingHorizontal: 10,
    gap: 16,
    marginHorizontal: 10,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  body: {
    backgroundColor: "#F0F0F0",
    flex: 1,
    display: "flex",
  },
  top: {
    paddingHorizontal: 10,
    gap: 16,
    marginHorizontal: 10,
    paddingBottom: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
    backgroundColor: "#FFFD",
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  inputID: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  buttonStyleID: {
    backgroundColor: "grey",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  buttonStyleCadastrar: {
    backgroundColor: "#242424",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardDelete: {
    paddingVertical: 12,
    flexDirection: "row",
  },
  viewDetalhes: {
    marginLeft: 20,
  },
});

const noImage = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal:8,
    maxWidth:112,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  title: {
    fontSize:12,
    fontWeight:"bold",
    textAlign:"center"
  },
  
});
