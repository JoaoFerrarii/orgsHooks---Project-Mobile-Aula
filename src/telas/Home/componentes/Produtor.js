import React from "react";
import {FlatList,Image, View, Text, StyleSheet} from "react-native";
import { ImageBackground } from "react-native-web";


//import { topo } from"../../../mocks/topo";
//import logo from "../../../assets/logo.png";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    
    return <View style={estilos.cartao}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Text>*****</Text>
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>
}
const estilos = StyleSheet.create({
    cartao:{
        backgroundColor:"#F6F6F6",
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:6,
        flexDirection:"row",
        

    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16

    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,

    },
    nome: {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 22
    },
    distancia: {
        fontSize:12,
        lineHeight:19,

    },


});
