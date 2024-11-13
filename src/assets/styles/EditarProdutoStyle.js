import { StyleSheet } from "react-native";

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
    borderColor: "#333",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
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
    borderColor: "#333",
    padding: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  buttonStyleCadastrar: {
    backgroundColor: "#242424",
    fontSize: 200,
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 5,
    marginBottom: 16
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

export default style;