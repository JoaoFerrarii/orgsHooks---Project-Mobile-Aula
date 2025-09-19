import React from "react";
import {Image, View, Text,StyleSheet} from "react-native";
import logo from "../../../assets/logo.png";
import { ImageBackground } from "react-native-web";

import { carregaTopo } from "../../../services/carregaDados";
//import { topo } from"../../../mocks/topo";

class Topo extends React.Component{
  state = {
    topo: {
      boasVindas: "",
      legenda: "",
    },
  };

  atualizaTopo(){
    const retorno  = carregaTopo();
    this.setState({topo: retorno});
  }

  componentDidMount(){
    this.atualizaTopo();
  }

  render(){
    return (
      <View sytle={estilos.topo}>
          <Image source={logo} style={estilos.imagem}/>
          <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
          <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}




const estilos = StyleSheet.create({
  topo: {
    backgroundcolor:"#F6F6F6",
    padding: 16,
  },
  imagem: {
    widht: 70,
    height: 28,
  },
  boasVindas:{
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight:'bold'
  },
  legenda:{
    fontSize: 16,
    lineHeight: 16,
    
  },


});

export default Topo;