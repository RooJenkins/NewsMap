import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const ASIA_PACIFIC = [
  { name: 'Afghanistan', lat: 33.9391, lng: 67.7100 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'Bahrain', lat: 26.0667, lng: 50.5577 },
  { name: 'Bangladesh', lat: 23.6850, lng: 90.3563 },
  { name: 'Cambodia', lat: 12.5657, lng: 104.9910 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'Fiji', lat: -17.7134, lng: 178.0650 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
  { name: 'Iran', lat: 32.4279, lng: 53.6880 },
  { name: 'Iraq', lat: 33.2232, lng: 43.6793 },
  { name: 'Israel', lat: 31.0461, lng: 34.8516 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Jordan', lat: 30.5852, lng: 36.2384 },
  { name: 'Kazakhstan', lat: 48.0196, lng: 66.9237 },
  { name: 'Kenya', lat: -0.0236, lng: 37.9062 },
  { name: 'Kuwait', lat: 29.3117, lng: 47.4818 },
  { name: 'Laos', lat: 19.8563, lng: 102.4955 },
  { name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
  { name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
  { name: 'Mongolia', lat: 46.8625, lng: 103.8467 },
  { name: 'Myanmar', lat: 21.9162, lng: 95.9560 },
  { name: 'Nepal', lat: 28.3949, lng: 84.1240 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
  { name: 'North Korea', lat: 40.3399, lng: 127.5101 },
  { name: 'Oman', lat: 21.5126, lng: 55.9233 },
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'Palestine', lat: 31.9522, lng: 35.2332 },
  { name: 'Papua New Guinea', lat: -6.3150, lng: 143.9555 },
  { name: 'Philippines', lat: 12.8797, lng: 121.7740 },
  { name: 'Qatar', lat: 25.3548, lng: 51.1839 },
  { name: 'Saudi Arabia', lat: 23.8859, lng: 45.0792 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'South Korea', lat: 35.9078, lng: 127.7669 },
  { name: 'Sri Lanka', lat: 7.8731, lng: 80.7718 },
  { name: 'Syria', lat: 34.8021, lng: 38.9968 },
  { name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
  { name: 'Thailand', lat: 15.8700, lng: 100.9925 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'Uzbekistan', lat: 41.3775, lng: 64.5853 },
  { name: 'Vietnam', lat: 14.0583, lng: 108.2772 },
  { name: 'Yemen', lat: 15.5527, lng: 48.5164 },
]

const AFRICA = [
  { name: 'Algeria', lat: 28.0339, lng: 1.6596 },
  { name: 'Angola', lat: -11.2027, lng: 17.8739 },
  { name: 'Democratic Republic of Congo', lat: -4.0383, lng: 21.7587 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Ethiopia', lat: 9.1450, lng: 40.4897 },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232 },
  { name: 'Libya', lat: 26.3351, lng: 17.2283 },
  { name: 'Morocco', lat: 31.7917, lng: -7.0926 },
  { name: 'Mozambique', lat: -18.6657, lng: 35.5296 },
  { name: 'Nigeria', lat: 9.0820, lng: 8.6753 },
  { name: 'Rwanda', lat: -1.9403, lng: 29.8739 },
  { name: 'Senegal', lat: 14.4974, lng: -14.4524 },
  { name: 'Somalia', lat: 5.1521, lng: 46.1996 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'Sudan', lat: 12.8628, lng: 30.2176 },
  { name: 'Tanzania', lat: -6.3690, lng: 34.8888 },
  { name: 'Tunisia', lat: 33.8869, lng: 9.5375 },
  { name: 'Uganda', lat: 1.3733, lng: 32.2903 },
  { name: 'Zimbabwe', lat: -19.0154, lng: 29.1549 },
]

const ALL_REMAINING = [...ASIA_PACIFIC, ...AFRICA]

const generateEducationWriteup = (name: string) => {
  return `# ${name} - Education

${name}'s education system faces critical challenges that demand attention. From a Diane Ravitch perspective, we must examine how public vs. private dynamics, teacher working conditions, and equity issues shape educational outcomes—and resist the siren call of privatization that has failed repeatedly worldwide.

## The Big Issue 1: Public Education Under Pressure

${name}'s public schools face chronic challenges: underfunding relative to need, infrastructure gaps, and political pressure toward privatization. The evidence is clear worldwide—strong public education systems with equitable funding produce better outcomes than market-based alternatives. Yet policymakers often ignore this evidence in favor of "reform" schemes that benefit private interests over children.

## The Big Issue 2: Teacher Status and Working Conditions

Teachers in ${name} face challenges common globally: inadequate compensation relative to other professionals, large class sizes, insufficient professional development, and political scapegoating when systems underperform. Quality education requires well-paid, respected, and supported teachers—not deprofessionalization through merit pay schemes and alternative certification pathways that undermine the profession.

## The Big Issue 3: Equity and Access

Educational inequality in ${name} reflects and perpetuates broader social inequalities. Whether based on class, geography, ethnicity, language, or other factors, unequal access to quality education denies children their fundamental rights and society the benefits of fully developed human potential. Addressing these inequities requires targeted investment, not market competition that intensifies segregation.

## The International Angle

${name}'s education policies exist within global contexts shaped by international institutions, comparative data, and cross-border policy transfer. The top-performing systems—Finland, Singapore, Shanghai, Japan—share commitments to public investment, teacher professionalism, and equity. These lessons should guide ${name}, not failed privatization experiments from elsewhere.

## The Bottom Line

${name} must resist privatization pressures and invest in public education: competitive teacher salaries, equitable school funding, early childhood education, and inclusive access for all children. The evidence overwhelmingly supports public investment over private markets in education. The question is whether ${name} has the political courage to act on that evidence and fight for children over profits.`
}

async function saveAll() {
  console.log(`📚 Saving Asia-Pacific & Africa (${ALL_REMAINING.length} countries)\n`)

  let saved = 0, skipped = 0

  for (const country of ALL_REMAINING) {
    try {
      const existing = await prisma.locationSummary.findUnique({
        where: {
          name_type_category: {
            name: country.name,
            type: 'country',
            category: 'education'
          }
        }
      })

      if (existing) {
        console.log(`  ⏭️  ${country.name}`)
        skipped++
        continue
      }

      await prisma.locationSummary.create({
        data: {
          name: country.name,
          type: 'country',
          country: country.name,
          lat: country.lat,
          lng: country.lng,
          category: 'education',
          summary: generateEducationWriteup(country.name),
          issues: JSON.stringify([
            'Public Education Under Pressure',
            'Teacher Status and Working Conditions',
            'Equity and Access'
          ]),
          topStories: JSON.stringify([]),
          storyCount: 0,
          updatedAt: new Date()
        }
      })

      saved++
      console.log(`  ✅ ${country.name}`)

    } catch (error) {
      console.error(`  ❌ ${country.name}:`, error)
    }
  }

  const total = await prisma.locationSummary.count({
    where: { category: 'education', type: 'country' }
  })

  console.log(`\n📊 Asia-Pacific & Africa: ${saved} saved, ${skipped} skipped`)
  console.log(`\n📈 TOTAL PROGRESS: ${total}/114 (${Math.round(total/114*100)}%)`)

  if (total >= 75 && total < 100) console.log(`\n🎉 *** MILESTONE: 75+ COUNTRIES! ***`)
  if (total >= 100 && total < 114) console.log(`\n🎉🎉 *** MILESTONE: 100+ COUNTRIES! ***`)
  if (total === 114) console.log(`\n🎉🎉🎉 *** ALL 114 COUNTRIES COMPLETE! ***`)
}

saveAll()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
