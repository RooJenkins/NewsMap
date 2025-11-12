import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function GET(request: NextRequest) {
  // Optional: Add authentication to prevent unauthorized access
  const authHeader = request.headers.get('authorization')
  const expectedToken = process.env.CRON_SECRET || 'your-secret-token'

  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    console.log('🔄 Starting scheduled news update...')

    // Run the fetch-news script
    const { stdout, stderr } = await execAsync('npm run fetch-news')

    console.log('✅ News update completed')
    console.log(stdout)

    if (stderr) {
      console.error('Warnings/Errors:', stderr)
    }

    return NextResponse.json({
      success: true,
      message: 'News updated successfully',
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error('❌ Error updating news:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  return GET(request)
}
