import React from 'react';
import { View, Text } from 'react-native';
import Estilos from '../components/Estilo'

export default props => {
  return (
    <View style={Estilos.bloco}>
      <Text>Melhor combustível: {props.resultado}</Text>
    </View>
  )
}

