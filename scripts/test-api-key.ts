import 'dotenv/config'

console.log('Checking API key configuration...\n')

if (!process.env.ANTHROPIC_API_KEY) {
  console.log('❌ ANTHROPIC_API_KEY is not set')
  process.exit(1)
}

if (process.env.ANTHROPIC_API_KEY === 'your-api-key-here') {
  console.log('❌ ANTHROPIC_API_KEY is set to placeholder value')
  console.log('   Please update .env with your actual API key')
  process.exit(1)
}

const keyPreview = process.env.ANTHROPIC_API_KEY.substring(0, 10) + '...'
console.log(`✅ API key is configured: ${keyPreview}`)
console.log('\nReady to run infrastructure summary generation!')
