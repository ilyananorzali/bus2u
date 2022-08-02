const moment = require('moment')

const GOOGLE_MAP_APIKEY = 'AIzaSyCSKEBmUF8RszMPZbyDiUu61JWftRusM-E'

const time = moment().add('7', 'minutes').format('hh:mm')
console.log(time)
let newTime = moment(time, 'hh:mm').add('4', 'minutes').format('hh:mm')
console.log(newTime)
let newTime2 = moment(newTime, 'hh:mm').add('9', 'minutes').format('hh:mm')
console.log(newTime2)

