import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Content() {
  return (
    <View style={styles.content}>
      { Data.map((item,index)=>(
        <Text key={index}>{item.nombre}</Text>
      ))}

    </View>
  )
}

const styles = StyleSheet.create({
  //contenido de la card
  content: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    padding:10,
    borderRadius:10
  },
});
