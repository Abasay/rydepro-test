import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const userIP = req.headers.get('x-forwarded-for') || (req as any).ip || '0.0.0.0';
  console.log('User IP:', userIP);
  try {
    const geoResponse = await fetch(`https://ipapi.co/${userIP}/json/`);
    console.log('Geo response:', geoResponse);
    const geoData = await geoResponse.json();
    return NextResponse.json({ country: geoData.country_code || 'UNKNOWN' });
  } catch (error) {
    console.error('Error fetching geo data:', error);
    return NextResponse.json({ country: 'UNKNOWN' });
  }
}
