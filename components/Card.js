import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Content from './Content'

export default class Card extends Component {
  render() {
    return (
        <ScrollView>
        <View>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
            <Content/>
        </View>
      </ScrollView>
    )
  }
}