import React from "react";
import { Text } from "react-native";
import Topo from "./componentes/Topo.js";
import Produtores from "./componentes/Produtores.js";

export default function Home() {
  /*return <> 
    <Topo />
    <Produtores/>
  </>*/
  return <Produtores topo={Topo}/>
}