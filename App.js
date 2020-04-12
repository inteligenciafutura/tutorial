import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Instrucciones } from "./Instrucciones";

const images = [
  "http://inteligenciafutura.com/imagenes/A1.png",
  "http://inteligenciafutura.com/imagenes/A2.png",
  "http://inteligenciafutura.com/imagenes/A3.png",
  "http://inteligenciafutura.com/imagenes/A4.png",
];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Instrucciones images={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});