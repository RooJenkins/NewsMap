import 'dotenv/config'

console.log('Checking Anthropic API key...')
console.log('ANTHROPIC_API_KEY exists:', !!process.env.ANTHROPIC_API_KEY)
console.log('Key starts with:', process.env.ANTHROPIC_API_KEY?.substring(0, 10) + '...')
console.log('Key length:', process.env.ANTHROPIC_API_KEY?.length)

if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your-api-key-here') {
  console.log('\n❌ ERROR: ANTHROPIC_API_KEY is not set or is a placeholder')
  console.log('\nTo fix this:')
  console.log('1. Get your API key from https://console.anthropic.com/')
  console.log('2. Update .env file with: ANTHROPIC_API_KEY="sk-ant-..."')
  console.log('   OR')
  console.log('3. Export it: export ANTHROPIC_API_KEY="sk-ant-..."')
  process.exit(1)
} else {
  console.log('\n✅ API key is configured!')
}
