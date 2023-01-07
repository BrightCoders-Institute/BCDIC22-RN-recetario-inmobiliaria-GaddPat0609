import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import React, { Component } from 'react'
import Data from '../casasInfo.json'

export default class Card extends Component {
  render() {
    return (
        <ScrollView style={styles.scroll}>
        <View>
            {Data.map((item,index)=>(
              <View  style={styles.card}>
                <Text key={index}>{item.nombre}</Text>
                <Text>{item.ubicacion}</Text>
                <Text>{item.caracteristicas.habitaciones}</Text>
                <Text>{item.caracteristicas.baños}</Text>
                <Text>{item.caracteristicas.ft}</Text>
                <Text>{item.renta}</Text>
                <Image style={styles.foto} source={{uri:item.foto}}/>
              </View>
            ))}
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  //contenido de la card
  scroll: {
    backgroundColor:'red',
    width:5
  },
  card:{
    flex:1,
    flexDirection:'row-reverse',
    margin:10,
    backgroundColor:'purple',
    borderRadius:10,
    alignContent:'space-between'
  },
  foto:{
  
    width:100,
    height:100
  }
});
