import React from 'react';
import { View, Image } from 'react-native';
import Estilos from '../components/Estilo'

export default props => {
  return (
    <View style={Estilos.blocoIMG}>
      {
        props.comb === ''
          ?
          <Image
            source={require('../assets/bomba.jpg')}
            style={Estilos.bomba}
          />

          :
          props.comb === 'G'
            ?
            <Image
              source={require('../assets/bombaG.jpg')}
              style={Estilos.bomba}
            />
            :
            <Image
              source={require('../assets/bombaE.jpg')}
              style={Estilos.bomba}
            />
      }
    </View>
  )
}


