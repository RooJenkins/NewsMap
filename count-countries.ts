import { countryData } from './lib/countryData'

const countries = Object.keys(countryData)
console.log(`Total countries in countryData: ${countries.length}`)
console.log('\nCountries:')
countries.forEach((c, i) => console.log(`${i + 1}. ${c}`))
