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

export default function EditarProduto() {
  const navigation = useNavigation();

  const [categoriaAtiva, setCategoriaAtiva] = useState("/mac");
  const [loading, setLoading] = useState(false);
  const [produtoEditado, setProdutoEditado] = useState({
    nome: "",
    modelo: "",
    ano: "",
    preco: "",
    ListaCores: [{ nomeCor: "", valorCor: "" }],
    ListaArmazenamentos: [{ capacidade: "", preco: "" }],
  });
  const [idProduto, setIdProduto] = useState(""); // Estado para armazenar o ID do produto a ser editado

  const categorias = [
    { nome: "Mac", imagem: macImage, url: "/mac" },
    { nome: "Iphone", imagem: iphoneImage, url: "/iphone" },
    { nome: "Ipad", imagem: ipadImage, url: "/ipad" },
    { nome: "Watch", imagem: watchImage, url: "/watch" },
  ];

  // Função para buscar as informações do produto a ser editado
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
      setProdutoEditado(response.data);
    } catch (error) {
      console.error("Erro ao buscar produto", error);
      alert("Erro ao buscar produto para edição.");
    } finally {
      setLoading(false);
    }
  };

  // Função para editar o produto
  const handleSubmitProduto = async () => {
    if (!idProduto) {
      alert("Por favor, insira o ID do produto.");
      return;
    }

    setLoading(true);
    try {
      // A URL depende da categoria ativa e do ID do produto
      await axios.put(
        `http://10.0.2.2:3000${categoriaAtiva}/${idProduto}`,
        produtoEditado
      );
      alert("Produto editado com sucesso!");
      navigation.goBack(); // Volta para a tela anterior após editar
    } catch (err) {
      console.error("Erro ao editar produto", err);
      alert("Erro ao editar produto.");
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar um campo de cor
  const addCor = () => {
    setProdutoEditado((prevState) => ({
      ...prevState,
      ListaCores: [...prevState.ListaCores, { nomeCor: "", valorCor: "" }],
    }));
  };

  // Função para adicionar mais opções de armazenamento
  const addArmazenamento = () => {
    setProdutoEditado((prevState) => ({
      ...prevState,
      ListaArmazenamentos: [
        ...prevState.ListaArmazenamentos,
        { capacidade: "", preco: "" },
      ],
    }));
  };

  // Atualizar os dados do produto nos inputs
  const handleInputChange = (name, value) => {
    setProdutoEditado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

      <Text style={style.title}>Editar Produto:</Text>

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

      {/* Formulário de edição */}
      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Nome"
          value={produtoEditado.nome}
          onChangeText={(text) => handleInputChange("nome", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Modelo"
          value={produtoEditado.modelo}
          onChangeText={(text) => handleInputChange("modelo", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Ano"
          keyboardType="numeric"
          value={produtoEditado.ano}
          onChangeText={(text) => handleInputChange("ano", text)}
        />
        <TextInput
          style={style.input}
          placeholder="Preço"
          keyboardType="numeric"
          value={produtoEditado.preco}
          onChangeText={(text) => handleInputChange("preco", text)}
        />
        <TextInput
          style={style.input}
          placeholder="URL da Imagem"
          value={produtoEditado.imagem}
          onChangeText={(text) => handleInputChange("imagem", text)}
        />

        <Text style={style.subTitle}>Cores:</Text>
        {produtoEditado.ListaCores.map((cor, index) => (
          <View key={index} style={style.inputGroup}>
            <TextInput
              style={style.input}
              placeholder="Nome da cor"
              value={cor.nomeCor}
              onChangeText={(text) => {
                const updatedCores = [...produtoEditado.ListaCores];
                updatedCores[index].nomeCor = text;
                setProdutoEditado({
                  ...produtoEditado,
                  ListaCores: updatedCores,
                });
              }}
            />
            <TextInput
              style={style.input}
              placeholder="Valor da cor"
              value={cor.valorCor}
              onChangeText={(text) => {
                const updatedCores = [...produtoEditado.ListaCores];
                updatedCores[index].valorCor = text;
                setProdutoEditado({
                  ...produtoEditado,
                  ListaCores: updatedCores,
                });
              }}
            />
          </View>
        ))}

        <TouchableOpacity style={style.buttonStyle} onPress={addCor}>
          <Text style={style.buttonText}>Adicionar mais uma cor</Text>
        </TouchableOpacity>

        <Text style={style.subTitle}>Armazenamentos:</Text>
        {produtoEditado.ListaArmazenamentos.map((armazenamento, index) => (
          <View key={index} style={style.inputGroup}>
            <TextInput
              style={style.input}
              placeholder="Capacidade"
              value={armazenamento.capacidade}
              onChangeText={(text) => {
                const updatedArmazenamentos = [
                  ...produtoEditado.ListaArmazenamentos,
                ];
                updatedArmazenamentos[index].capacidade = text;
                setProdutoEditado({
                  ...produtoEditado,
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
                  ...produtoEditado.ListaArmazenamentos,
                ];
                updatedArmazenamentos[index].preco = text;
                setProdutoEditado({
                  ...produtoEditado,
                  ListaArmazenamentos: updatedArmazenamentos,
                });
              }}
            />
          </View>
        ))}

        <TouchableOpacity style={style.buttonStyle} onPress={addArmazenamento}>
          <Text style={style.buttonText}>Nova opção de armazenamento</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.buttonStyleCadastrar, loading && { opacity: 0.7 }]}
          onPress={handleSubmitProduto}
          disabled={loading}
        >
          <Text style={style.buttonText}>
            {loading ? "Carregando..." : "Salvar Alterações"}
          </Text>
        </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  inputGroup: {
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "grey",
    fontSize: 200,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonStyleID: {
    backgroundColor: "grey",
    fontSize: 200,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20 
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  inputID: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  buttonStyleCadastrar: {
    backgroundColor: "#242424",
    fontSize: 200,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 5
  }
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
