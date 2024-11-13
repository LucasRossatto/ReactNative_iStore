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
    marginBottom: 8,
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
  buttonStyleDeletar: {
    backgroundColor: "#FF2C2C",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 0,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  cardDelete: {
    paddingVertical: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  viewDetalhes: {
    marginLeft: 20,
  },
  alert: {
    backgroundColor: "#242424",
    borderTopEndRadius: 12,
    borderTopLeftRadius: 12
  },
  textAlert: {
    color: "#f2f2f2",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    padding: 8
  }
});

const ProductStyle = StyleSheet.create({
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
  coresView: {
    flexDirection: "row",

    marginBottom: 15,
  },
  circuloCor: {
    width: 15,
    height: 15,
    borderRadius: 50,
  },
  optionAlign: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 3,
  },
  noColors: {
    color: "#999",
    fontSize: 12,
    textAlign: "center",
  },
});

export default style;