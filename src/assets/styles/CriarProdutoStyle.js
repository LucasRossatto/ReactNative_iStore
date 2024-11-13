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
    marginTop: 5,
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
    marginVertical: 5
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
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

export default style;