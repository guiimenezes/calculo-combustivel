import React, { useState } from 'react';
import { SafeAreaView, View, Text, } from 'react-native';
import BtnCalcular from './components/BtnCalcular';
import Estilos from './components/Estilo'
import Etanol from './components/Etanol';
import Gasolina from './components/Gasolina';
import ImgResultado from './components/ImgResultado';
import Resultado from './components/Resultado';



export default function App() {

  const [gasolina, setGasolina] = useState(0)
  const [etanol, setEtanol] = useState(0)
  const [resultado, setResultado] = useState('')

  const calcular = () => {
    if (!gasolina) {
      alert('Informe o preço da Gasolina')
      return
    }
    if (!etanol) {
      alert('Informe o preço do Etanol')
      return
    }
    let res
    let calculo = ((etanol / gasolina) * 100).toFixed(2)
    if (calculo > 70) {
      res = 'Gasolina'
    } else {
      res = 'Etanol'
    }
    alert('O etanol está custando ' + calculo + '% da gasolina. Portanto é melhor abastecer com ' + res)
    setResultado(res)
  }

  const limpar = () => {
    setResultado('')
  }

  const setarGasolina = (v) => {
    limpar()
    setGasolina(v)
  }
  const setarEtanol = (v) => {
    limpar()
    setEtanol(v)
  }

  return (
    <SafeAreaView style={Estilos.principal}>
      <Gasolina aoModificar={setarGasolina} />
      <Etanol aoModificar={setarEtanol} />
      <BtnCalcular aoPressionar={calcular} />
      <Resultado resultado={resultado} />
      <ImgResultado comb={resultado.charAt(0)} />
    </SafeAreaView>
  )
}


