import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

import DaysLeft from './DaysLeft'

const Answer = (props) => {
  const {getDates, isItTime} = props.data
  const {start} = getDates()
  const today = moment()
  const fontSize = isItTime() ? 150 : 75

  return (
    <View>
      <Text style={getStyle(fontSize)}>
        {
          isItTime() ? 'Yes' : 'No'
        }
      </Text>
      {
        !isItTime() && <DaysLeft now={today} until={start} />
      }
    </View>
  )
}

const getStyle = (fontSize) => {
  return {
    color: '#FFF',
    fontSize,
    fontFamily: 'American Typewriter',
    textAlign: 'center',
    marginBottom: 5,
   }
}

export default Answer
