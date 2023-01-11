import { View, ScrollView } from 'react-native'
import React from 'react'
import Data from '../casasInfo.json'
import styles from '../styles/styles.js'
import Card from './Card'
export default function Cards() {
  return (
    <ScrollView style={styles.scroll}>
      <View>
        {Data.map((item, index) => {
          return <Card item={item} key={index} />
        })}
      </View>
    </ScrollView>
  )
}
