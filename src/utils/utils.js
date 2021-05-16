export const  formatUnixTime = (unixTimestamp) => {
  return unixTimestamp ? new Date(unixTimestamp * 1e3).toISOString() : "Invalid Time"
}

export const formatter = (value, unit) => {
  if (value <= 15 && unit === 'second') {
    return 'Just Now'
  }
  return `${value} ${unit === 'minute' ? 'min' : unit === 'second' ? 'sec' : (value > 1) ? unit + 's' : unit} ago`
}
