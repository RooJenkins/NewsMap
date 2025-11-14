import { readFileSync, writeFileSync } from 'fs'

// Extract all countries from the geojson with their coordinates
const geojsonPath = '/home/user/NewsMap/public/data/countries.geojson'
const geojson = JSON.parse(readFileSync(geojsonPath, 'utf-8'))

interface Country {
  name: string
  lat: number
  lng: number
}

const countries: Country[] = []

// Extract from each feature
for (const feature of geojson.features) {
  const name = feature.properties.ADMIN

  // Skip territories and special cases
  if (name === 'Antarctica' || name === 'Greenland' || !name) continue

  // Get centroid coordinates - calculate from geometry bounds
  let lat = 0
  let lng = 0

  if (feature.properties.LABEL_Y && feature.properties.LABEL_X) {
    lat = parseFloat(feature.properties.LABEL_Y)
    lng = parseFloat(feature.properties.LABEL_X)
  } else if (feature.geometry && feature.geometry.type === 'Polygon') {
    // Calculate centroid from first polygon
    const coords = feature.geometry.coordinates[0]
    lat = coords.reduce((sum: number, c: number[]) => sum + c[1], 0) / coords.length
    lng = coords.reduce((sum: number, c: number[]) => sum + c[0], 0) / coords.length
  } else if (feature.geometry && feature.geometry.type === 'MultiPolygon') {
    // Use first polygon of multipolygon
    const coords = feature.geometry.coordinates[0][0]
    lat = coords.reduce((sum: number, c: number[]) => sum + c[1], 0) / coords.length
    lng = coords.reduce((sum: number, c: number[]) => sum + c[0], 0) / coords.length
  }

  countries.push({ name, lat, lng })
}

// Sort alphabetically
countries.sort((a, b) => a.name.localeCompare(b.name))

// Remove duplicates
const uniqueCountries = countries.filter((country, index, self) =>
  index === self.findIndex((c) => c.name === country.name)
)

console.log(`Found ${uniqueCountries.length} unique countries`)

// Output as JSON
writeFileSync(
  '/home/user/NewsMap/ALL_COUNTRIES.json',
  JSON.stringify(uniqueCountries, null, 2)
)

// Output as text list
writeFileSync(
  '/home/user/NewsMap/ALL_COUNTRIES.txt',
  uniqueCountries.map(c => c.name).join('\n')
)

console.log('Written to ALL_COUNTRIES.json and ALL_COUNTRIES.txt')
console.log('First 10 countries:')
uniqueCountries.slice(0, 10).forEach(c => console.log(`  ${c.name} (${c.lat.toFixed(2)}, ${c.lng.toFixed(2)})`))
