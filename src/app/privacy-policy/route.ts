import { NextResponse } from 'next/server';
import { PRIVACY_POLICY_URL } from '@/constants/legalLinks';

export function GET(request: Request) {
  return NextResponse.redirect(new URL(PRIVACY_POLICY_URL, request.url));
}
