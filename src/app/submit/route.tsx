import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export let GET = async (req: NextRequest) => {
  let authUrl = new URL('https://auth.metorial.com/oauth/authorize');
  authUrl.searchParams.set('client_id', process.env.OAUTH_CLIENT_ID!);
  authUrl.searchParams.set('redirect_uri', `${req.nextUrl.origin}/submit/callback`);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('state', Math.random().toString(36).substring(2, 15));

  return NextResponse.redirect(authUrl);
};
