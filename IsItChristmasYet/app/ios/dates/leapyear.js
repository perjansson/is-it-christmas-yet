import moment from 'moment'
import {startOfDay, endOfDay} from './helper'

const getNextLeapYear = (year) => {
  return year.isLeapYear() ? year : getNextLeapYear(year.add(1, 'year'))
}

const nextLeapYear = getNextLeapYear(moment().month('Jan').date('1'))

const getDates = () => {
  return {
    start: startOfDay(nextLeapYear),
    end: endOfDay(nextLeapYear)
  }
}

const isItTime = () => moment().isLeapYear()

const getQuestion = () => {
  return 'Is it a leap year yet?'
}

const getBackgroundColor = () => {
  return '#00CC7D'
}

export default {
  getDates,
  isItTime,
  getQuestion,
  getBackgroundColor
}
