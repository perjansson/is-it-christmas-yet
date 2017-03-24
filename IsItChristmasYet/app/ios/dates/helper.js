export function startOfDay (time) {
  return time.hour(0).minutes(0).seconds(0).millisecond(0)
}

export function endOfDay (time) {
  return time.hour(23).minutes(59).seconds(59).millisecond(999)
}
