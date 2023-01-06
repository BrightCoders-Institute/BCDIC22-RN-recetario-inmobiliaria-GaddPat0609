import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Content() {
  return (
    <View style={styles.content}>
      <Text>Content1</Text>
      <Text>Content1</Text>
      <Text>Content1</Text>
      <Text>Content4</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
