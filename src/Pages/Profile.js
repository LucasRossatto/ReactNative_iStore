import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View style={style.body}>
      <View style={style.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
        <Text style={style.profile}>Profile</Text>
      </View>

      <View style={style.ovalAlign}>
        <View style={style.oval}></View>

        <TouchableOpacity style={style.editBtn}>
          <Image source={require("../assets/Icons/edit.png")} />
        </TouchableOpacity>
      </View>

      <Text style={style.Username}>Admin</Text>
      <Text style={style.UserEmail}>Admin@gmail.com</Text>

      <View style={style.containerSettings}>
        <Text style={style.OptionsTitle}>Opções do administrador</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CriarProduto");
          }}
        >
          <View style={style.OptionsAlign}>
            <View style={style.SubOptionsAlign}>
              <Image
                style={style.OptionsIcon}
                source={require("../assets/Icons/estoque.png")}
              />
              <Text style={style.Options}>Adicionar produtos ao estoque</Text>
            </View>

            <Image source={require("../assets/Icons/arrow_rigth.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditarProduto");
          }}
        >
          <View style={style.OptionsAlign}>
            <View style={style.SubOptionsAlign}>
              <Image
                style={style.OptionsIcon}
                tintColor={"#AEAEAE"}
                source={require("../assets/Icons/edit2.png")}
              />
              <Text style={style.Options}>Editar produtos do estoque</Text>
            </View>

            <Image source={require("../assets/Icons/arrow_rigth.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DeletarProduto");
          }}
        >
          <View style={style.OptionsAlign}>
            <View style={style.SubOptionsAlign}>
              <Image
                style={style.OptionsIcon}
                tintColor={"#AEAEAE"}
                source={require("../assets/Icons/trash.png")}
              />
              <Text style={style.Options}>Deletar produtos do estoque</Text>
            </View>

            <Image source={require("../assets/Icons/arrow_rigth.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FeedEstoque");
          }}
        >
          <View style={style.OptionsAlign}>
            <View style={style.SubOptionsAlign}>
              <Image
                style={style.OptionsIcon}
                tintColor={"#AEAEAE"}
                source={require("../assets/Icons/search.png")}
              />
              <Text style={style.Options}>Vizualizar produtos do estoque</Text>
            </View>

            <Image source={require("../assets/Icons/arrow_rigth.png")} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingTop: 66,
    gap: 16,
    marginHorizontal: 10,
    paddingBottom: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  containerSettings: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    marginTop: 20,
    padding: 20,
  },
  profile: {
    fontSize: 16,
    fontWeight: "bold",
  },
  oval: {
    backgroundColor: "#000",
    borderRadius: 50,
    width: 68,
    height: 68,
  },
  ovalAlign: {
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
  OptionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  OptionsIcon: {
    width: 22,
    height: 19,
  },
  OptionsAlign: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SubOptionsAlign: {
    marginHorizontal: 8,
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  Options: {
    color: "#AEAEAE",
    fontSize: 16,
    margin: 10,
  },
  editBtn: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 34,
    height: 34,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 46,
    top: 36,
  },
  Username: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  UserEmail: {
    alignSelf: "center",
    backgroundColor: "#E2E2E2",
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 20,
  },
});
