import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styles from './styles/styles'
import { View } from 'react-native'
import Cards from './components/Cards'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cards></Cards>
    </View>
  )
}
