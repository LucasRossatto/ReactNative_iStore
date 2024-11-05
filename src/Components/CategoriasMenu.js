import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import macImage from '../assets/Icons/mac.png';
import iphoneImage from '../assets/Icons/PhoneLandscape.png';
import ipadImage from '../assets/Icons/Tablet.png';
import watchImage from '../assets/Icons/Smartwatch.png';

const CategoriasMenu = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  const categorias = [
    { nome: 'Mac', imagem: macImage },
    { nome: 'Iphone', imagem: iphoneImage },
    { nome: 'Ipad', imagem: ipadImage },
    { nome: 'Watch', imagem: watchImage },
  ];

  return (
    <View style={styles.container}>
      {categorias.map((categoria, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.item,
            categoriaAtiva === categoria.nome && styles.itemAtivo,
          ]}
          onPress={() => setCategoriaAtiva(categoria.nome)}
        >
          <Image
            source={categoria.imagem} 
            style={[
              styles.imagem,
              categoriaAtiva === categoria.nome && styles.imagemAtiva,
            ]}
          />
          <Text
            style={[
              styles.texto,
              categoriaAtiva === categoria.nome && styles.textoAtivo,
            ]}
          >
            {categoria.nome}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 8,
    marginLeft: 8,
    justifyContent: 'space-between',
  },
  item: {
    height: 88,
    width: 88,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    padding: 10,
  },
  itemAtivo: {
    backgroundColor: '#242424', 
  },
  imagem: {
    width: 37, 
    height: 35,
    tintColor:'black'
  },
  imagemAtiva: {
    tintColor: '#fff', 
  },
  texto: {
    marginTop:3,
    fontSize: 13,
    color: '#333',
  },
  textoAtivo: {
    color: '#fff',
    fontWeight:"bold",
  },
});

export default CategoriasMenu;
