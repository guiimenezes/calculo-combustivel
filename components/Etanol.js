import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Estilos from '../components/Estilo'

export default props => {
  return (
    <View style={Estilos.bloco}>
      <Text>Digite o preço do Etanol</Text>
      <TextInput
        style={Estilos.txt}
        keyboardType='numeric'
        onChangeText={text => props.aoModificar(text)}
      />
    </View>
  )
}

