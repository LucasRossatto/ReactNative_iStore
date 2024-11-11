import React from "react";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

export default function EditarProduto() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={style.top}>
        {/* navegacao para voltar <- */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/Icons/arrow_left.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
