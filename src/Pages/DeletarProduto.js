import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// Icons das categorias
import macImage from "../assets/Icons/mac.png";
import iphoneImage from "../assets/Icons/PhoneLandscape.png";
import ipadImage from "../assets/Icons/Tablet.png";
import watchImage from "../assets/Icons/Smartwatch.png";

export default function DeletarProduto() {
  const navigation = useNavigation();

  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac");
  const [loading, setLoading] = useState(false);
  const [produto, setProduto] = useState(null);  // Alterado de produtoEditado para produto
  const [idProduto, setIdProduto] = useState(""); // Estado para armazenar o ID do produto

  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "iPhone", imagem: iphoneImage, url: "/iphone" },
    { nome: "iPad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  // Função para buscar o produto a ser deletado
  const buscarProduto = async (id) => {
    if (!id) {
      alert("Por favor, insira o ID do produto.");
      return;
    }

    setLoading(true);
    try {
      // A URL depende da categoria ativa e do ID do produto
      const response = await axios.get(
        `http://10.0.2.2:3000${categoriaAtiva}/${id}`
      );
      setProduto(response.data); // Armazena o produto encontrado
    } catch (error) {
      console.error("Erro ao buscar produto", error);
      alert("Erro ao buscar produto para deleção.");
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar o produto
  const handleDeleteProduto = async () => {
    if (!idProduto) {
      alert("Por favor, insira o ID do produto.");
      return;
    }

    setLoading(true);
    try {
      // A URL depende da categoria ativa e do ID do produto
      await axios.delete(
        `http://10.0.2.2:3000${categoriaAtiva}/${idProduto}`
      );
      alert("Produto deletado com sucesso!");
      navigation.goBack(); // Volta para a tela anterior após deletar
    } catch (err) {
      console.error("Erro ao deletar produto", err);
      alert("Erro ao deletar produto.");
    } finally {
      setLoading(false);
    }
  };

  // Exibe uma animação de carregamento enquanto carrega o produto
  if (loading) {
    return (
      <View style={style.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={style.top}>
        {/* Navegação para voltar <- */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
      </View>

      {/* View que busca todas as categorias listadas e cria cards correspondentes a elas */}
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

      <Text style={style.title}>Deletar Produto:</Text>

      {/* Campo de entrada para o ID do produto */}
      <TextInput
        style={style.inputID}
        placeholder="ID do Produto"
        value={idProduto}
        keyboardType="numeric"
        onChangeText={setIdProduto}
      />

      {/* Buscar produto ao clicar no botão */}
      <TouchableOpacity
        style={[style.buttonStyleID, (loading || !idProduto) && { opacity: 0.7 }]}
        onPress={() => buscarProduto(idProduto)}
        disabled={loading || !idProduto}
      >
        <Text style={style.buttonText}>Buscar Produto</Text>
      </TouchableOpacity>

      {/* Exibe os detalhes do produto para confirmação de deleção */}
      {produto && (
        <View style={style.form}>
          <Text style={style.subTitle}>Produto encontrado:</Text>
          <Text>Nome: {produto.nome}</Text>
          <Text>Modelo: {produto.modelo}</Text>
          <Text>Ano: {produto.ano}</Text>
          <Text>Preço: R$ {produto.preco}</Text>

          <TouchableOpacity
            style={[style.buttonStyleCadastrar, loading && { opacity: 0.7 }]}
            onPress={handleDeleteProduto}
            disabled={loading}
          >
            <Text style={style.buttonText}>
              {loading ? "Deletando..." : "Confirmar Deleção"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
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
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
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
});

const CategoriaStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 0,
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
