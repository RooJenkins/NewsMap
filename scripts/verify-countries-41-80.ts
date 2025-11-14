import { countryData } from '../lib/countryData'

const countryList = Object.keys(countryData)
const countries41_80 = countryList.slice(40, 80)

console.log('Countries 41-80 from countryData:')
console.log('==================================')
countries41_80.forEach((country, idx) => {
  console.log(`${41 + idx}. ${country}`)
})
console.log('\nTotal countries: ' + countries41_80.length)
