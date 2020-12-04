import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Estilos from '../components/Estilo'

export default props => {
  return (
    <View style={Estilos.bloco}>
      <TouchableHighlight
        style={Estilos.btn}
        onPress={props.aoPressionar}
      >
        <Text style={Estilos.txtBtn}>Calcular</Text>
      </TouchableHighlight>
    </View>
  )
}

