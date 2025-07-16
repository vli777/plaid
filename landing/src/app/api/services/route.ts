import { NextResponse } from 'next/server'
import { services } from '../../../mocks/mockServicesData'

export async function GET() {
  return NextResponse.json(services)
}
