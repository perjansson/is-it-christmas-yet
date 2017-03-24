import React from 'react'
import {StyleSheet, Text} from 'react-native'

const Question = (props) => {
  const {getQuestion} = props.data
  return (
    <Text style={styles.question}>
      {getQuestion()}
    </Text>
  )
}

const styles = StyleSheet.create({
  question: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'American Typewriter',
    textAlign: 'center',
    margin: 10,
  }
})

export default Question
