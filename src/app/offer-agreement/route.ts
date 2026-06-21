import { NextResponse } from 'next/server';
import { OFFER_AGREEMENT_URL } from '@/constants/legalLinks';

export function GET(request: Request) {
  return NextResponse.redirect(new URL(OFFER_AGREEMENT_URL, request.url));
}
