import React from 'react'
import {StyleSheet, Text} from 'react-native'

const DaysLeft = (props) => {
  const {until} = props

  return (
    <Text style={styles.daysLeft}>
      {`But ${until.fromNow()} it is...`}
    </Text>
  )
}

const styles = StyleSheet.create({
  daysLeft: {
    marginTop: 5,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'American Typewriter',
    textAlign: 'center',
  }
})

export default DaysLeft
