import { countryData } from '../lib/countryData'

const countries = Object.keys(countryData)
console.log(`Total countries: ${countries.length}\n`)

console.log('Countries 81-120:')
for (let i = 80; i < 120 && i < countries.length; i++) {
  console.log(`${i + 1}. ${countries[i]}`)
}
