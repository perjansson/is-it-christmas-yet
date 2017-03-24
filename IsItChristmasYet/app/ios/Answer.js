import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

import DaysLeft from './DaysLeft'

const Answer = (props) => {
  const {getDates, isItTime} = props.data
  const {start} = getDates()
  const today = moment()

  return (
    <View>
      <Text style={styles.answer}>
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

const styles = StyleSheet.create({
  answer: {
    color: '#FFF',
    fontSize: 120,
    fontFamily: 'American Typewriter',
    textAlign: 'center',
    marginBottom: 5,
  }
})

export default Answer
