import React, { useEffect, useState } from "react";
import {FlatList,Image, View, Text,StyleSheet} from "react-native";
import { ImageBackground } from "react-native-web";

import { carregaProdutores } from "../../../services/carregaDados";
import Produtor from "./Produtor";
//import { topo } from"../../../mocks/topo";
//import logo from "../../../assets/logo.png";

export default function Produtores({topo:Topo}){
   const [titulo, setTitulo] =useState('');
   const [lista, setLista] =useState([]);
   
    useEffect(()=>{
        const retorno =carregaProdutores();
        //console.log(retorno);
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
   },[]);
   
   const TopoLista =()=>{
     return <>
        <Topo/>
        <Text style={estilos.titulo}>{titulo}</Text>
     
     </>
   }

   return <FlatList
        data={lista}
        //renderItem={({item: {nome}}) => <Text>{nome}</Text>}
        renderItem={({item }) => <Produtor {...item}/>}
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={TopoLista}
    />
}
const estilos = StyleSheet.create({
 titulo:{
    fontSize:20,
    lineHeight: 32,
    marginHorizontal:16,
    marginTop:16,
    fontWeight:'bold',
    color:'#464646',

 }


});
