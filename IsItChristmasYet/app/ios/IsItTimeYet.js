import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'

import Question from './Question'
import Answer from './Answer'

import data from './dates/christmas'

class IsItTimeYet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ...data
    }
  }

  forceUpdate () {
    this.setState(state => {
      return {
        ...state,
        lastUpdated: moment().toISOString()
      }
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Question data={this.state} />
        <Answer data={this.state} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: data.getBackgroundColor()
  }
})

export default IsItTimeYet
