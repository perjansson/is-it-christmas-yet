import moment from 'moment'
import {startOfDay, endOfDay} from './helper'

const today = moment()
const start = startOfDay(moment().month('Dec').date('31'))
const end = endOfDay(moment().month('Dec').date('31'))

const getDates = () => {
  return {
    start: end.isBefore(today) ? start.add(1, 'year') : start,
    end: end.isBefore(today) ? end.add(1, 'year') : end
  }
}

const isItTime = () => today.isBetween(getDates().start, getDates().end)

const getQuestion = () => {
  return 'Is it New Years yet?'
}

const getBackgroundColor = () => {
  return '#BDC100'
}

export default {
  getDates,
  isItTime,
  getQuestion,
  getBackgroundColor
}
