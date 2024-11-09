import React, { useState } from "react";
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
  const { item } = route.params;
  const navigation = useNavigation();
  const [corSelecionada, setCorSelecionada] = useState(null);
  const [armazenamentoSelecionada, setArmazenamentoSelecionada] = useState(null);
  const [curtido, setCurtido] = useState(false); 
  const handleLikePress = () => {
    setCurtido(!curtido);
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.IconsContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../assets/Icons/arrow_left.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLikePress}>
            <View style={styles.oval}>
              <Image
                style={styles.like}
                source={
                  curtido
                    ? require("../assets/Icons/hearth_red.png") // Ícone do coração vermelho quando curtido
                    : require("../assets/Icons/hearth.png") // Ícone do coração padrão
                }
              />
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.circle}>
          <Image style={styles.image} source={{ uri: item.imagem }} />
        </View>
        <View style={styles.detalhes}>
          <View style={styles.detalhesAlign}>
            <View style={styles.detalhesTitulo}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.ano}>{item.ano}</Text>
            </View>
            <Text style={styles.modelo}>Modelo: {item.modelo}</Text>
            <Text style={styles.preco}>R$ {item.preco}</Text>

            <View>
              <Text style={styles.titleOption}>CORES:</Text>

              <View style={[styles.optionsContainer, { flexDirection: "row" }]}>
                {item.ListaCores.map((cor, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setCorSelecionada(cor.nomeCor)}
                    style={[
                      styles.option,
                      styles.optionAlign,
                      corSelecionada === cor.nomeCor && {
                        borderColor: "black",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.circleColor,
                        { backgroundColor: cor.valorCor },
                      ]}
                    />
                    <Text style={styles.nomeCor}>{cor.nomeCor}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View>
              <Text style={styles.titleOption}>ARMAZENAMENTO:</Text>

              <View style={[styles.optionsContainer, { flexDirection: "row" }]}>
                {item.ListaArmazenamentos.map((armazenamento, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      setArmazenamentoSelecionada(armazenamento.capacidade)
                    }
                    style={[
                      styles.option,
                      styles.optionAlign,
                      armazenamentoSelecionada === armazenamento.capacidade && {
                        borderColor: "black",
                        borderWidth: 1,
                      },
                    ]}
                  >
                    <Text>{armazenamento.capacidade}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
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
  modelo: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
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
  circle: {
    backgroundColor: "#E5E5E5",
    width: 285,
    height: 285,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 1000,
    marginVertical: 40,
  },
  options: {
    marginTop: 30,
  },
  titleOption: {
    fontWeight: "bold",
    marginTop: 30,
    color: "#363431",
  },
  circleColor: {
    backgroundColor: "#D4A490",
    borderRadius: 50,
    width: 25,
    height: 25,
  },
  optionAlign: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  optionsContainer: {
    marginTop: 5,
    flexWrap: "wrap",
  },
  option: {
    backgroundColor: "#F0F0F0",
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginVertical: 6,
    paddingHorizontal: 15,
    paddingVertical: 1,
  },
  nomeCor: {
    fontSize: 14,
  },
});
