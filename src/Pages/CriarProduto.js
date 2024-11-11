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

export default function CriarProduto() {
  const navigation = useNavigation();

  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac");
  const [loading, setLoading] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    modelo: "",
    ano: "",
    preco: "",
    ListaCores: [{ nomeCor: "", valorCor: "" }],
    ListaArmazenamentos: [{ capacidade: "", preco: "" }],
  });

  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "Iphone", imagem: iphoneImage, url: "/iphone" },
    { nome: "Ipad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  // Função para buscar os produtos da categoria
  const listarCategorias = async (categoriaUrl) => {
    setLoading(true);
    try {
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      if (error.response) {
        alert(
          `Erro ${error.response.status}: ${
            error.response.data.message || "Erro ao carregar produtos."
          }`
        );
      } else if (error.request) {
        alert("Erro de rede: Não foi possível conectar ao servidor.");
      } else {
        alert(`Erro ao configurar a requisição: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar um novo produto
  const handleSubmitProduto = async () => {
    setLoading(true);
    try {
      await axios.post(`http://10.0.2.2:3000${categoriaAtiva}`, novoProduto);
      alert("Produto cadastrado com sucesso!");
      setNovoProduto({
        nome: "",
        modelo: "",
        ano: "",
        preco: "",
        imagem: "",
        ListaCores: [{ nomeCor: "", valorCor: "" }],
        ListaArmazenamentos: [{ capacidade: "", preco: "" }],
      });
      listarCategorias(categoriaAtiva); // Atualiza a lista de produtos
    } catch (err) {
      console.error("Erro ao cadastrar produto", err);
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar um campo de cor
  const addCor = () => {
    setNovoProduto((prevState) => ({
      ...prevState,
      ListaCores: [...prevState.ListaCores, { nomeCor: "", valorCor: "" }],
    }));
  };

  // Função para adicionar mais opções de armazenamento
  const addArmazenamento = () => {
    setNovoProduto((prevState) => ({
      ...prevState,
      ListaArmazenamentos: [
        ...prevState.ListaArmazenamentos,
        { capacidade: "", preco: "" },
      ],
    }));
  };

  // Atualizar os dados do novo produto nos inputs
  const handleInputChange = (name, value) => {
    setNovoProduto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    listarCategorias(categoriaAtiva);
  }, [categoriaAtiva]);

  // Exibe uma animacao de carregamento
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
        {/* navegacao para voltar <- */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
      </View>
      <Text style={style.title}>
        Selecione a categoria do produto para buscar
      </Text>
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
      <Text style={style.title}>Cadastrar novo Produto</Text>
      {/* Inicio do form */}
      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Nome"
          value={novoProduto.nome}
          onChangeText={(text) => handleInputChange("nome", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Modelo"
          value={novoProduto.modelo}
          onChangeText={(text) => handleInputChange("modelo", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Ano"
          keyboardType="numeric"
          value={novoProduto.ano}
          onChangeText={(text) => handleInputChange("ano", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={novoProduto.preco}
          onChangeText={(text) => handleInputChange("preco", text)}
        />
        <TextInput
          style={style.input}
          placeholder="URL da Imagem"
          value={novoProduto.imagem}
          onChangeText={(text) => handleInputChange("imagem", text)}
        />

        <Text style={style.subTitle}>Cores</Text>
        {novoProduto.ListaCores.map((cor, index) => (
          <View key={index} style={style.inputGroup}>
            <TextInput
              style={style.input}
              placeholder="Nome da cor"
              value={cor.nomeCor}
              onChangeText={(text) => {
                const updatedCores = [...novoProduto.ListaCores];
                updatedCores[index].nomeCor = text;
                setNovoProduto({ ...novoProduto, ListaCores: updatedCores });
              }}
            />
            <TextInput
              style={style.input}
              placeholder="Valor da cor"
              value={cor.valorCor}
              onChangeText={(text) => {
                const updatedCores = [...novoProduto.ListaCores];
                updatedCores[index].valorCor = text;
                setNovoProduto({ ...novoProduto, ListaCores: updatedCores });
              }}
            />
          </View>
        ))}

        {/* Butao cria mais inputs para adição de cores */}
        <Button title="Adicionar mais uma cor" onPress={addCor} />

        <Text style={style.subTitle}>Armazenamentos</Text>
        {novoProduto.ListaArmazenamentos.map((armazenamento, index) => (
          <View key={index} style={style.inputGroup}>
            <TextInput
              style={style.input}
              placeholder="Capacidade"
              value={armazenamento.capacidade}
              onChangeText={(text) => {
                const updatedArmazenamentos = [
                  ...novoProduto.ListaArmazenamentos,
                ];
                updatedArmazenamentos[index].capacidade = text;
                setNovoProduto({
                  ...novoProduto,
                  ListaArmazenamentos: updatedArmazenamentos,
                });
              }}
            />
            <TextInput
              style={style.input}
              placeholder="Preço"
              keyboardType="numeric"
              value={armazenamento.preco}
              onChangeText={(text) => {
                const updatedArmazenamentos = [
                  ...novoProduto.ListaArmazenamentos,
                ];
                updatedArmazenamentos[index].preco = text;
                setNovoProduto({
                  ...novoProduto,
                  ListaArmazenamentos: updatedArmazenamentos,
                });
              }}
            />
          </View>
        ))}
        {/* Botao cria mais inputs para adição de opções de armazenamento*/}
        <Button title="Adicionar mais uma opçao de armazenamento" onPress={addArmazenamento} />

        {/* Botão que envia o produto cadastrado */}
        <Button
          title={loading ? "Carregando..." : "Cadastrar Produto"}
          onPress={handleSubmitProduto}
          disabled={loading}
        />
      </View>
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
  },
  subTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputGroup: {
    marginBottom: 10,
  },
});

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