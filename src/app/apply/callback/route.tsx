import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export let GET = async (req: NextRequest) => {
  let url = new URL(req.url);
  let code = url.searchParams.get('code');
  if (!code) {
    console.error('No code in callback');
    return NextResponse.redirect(`${req.nextUrl.origin}/apply`);
  }

  let tokenRes = await fetch('https://auth-api.metorial.com/handoff/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: process.env.OAUTH_CLIENT_ID!,
      client_secret: process.env.OAUTH_CLIENT_SECRET!,
      code,
      redirect_uri: `${req.nextUrl.origin}/apply/callback`,
      grant_type: 'authorization_code'
    })
  });
  if (!tokenRes.ok) {
    console.error('Failed to fetch token', await tokenRes.text());
    return NextResponse.redirect(`${req.nextUrl.origin}/apply`);
  }

  let tokenData = await tokenRes.json();
  let accessToken = tokenData.access_token;
  if (!accessToken) {
    console.error('No access token in response', tokenData);
    return NextResponse.redirect(`${req.nextUrl.origin}/apply`);
  }

  let userRes = await fetch('https://auth-api.metorial.com/handoff/userinfo', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (!userRes.ok) {
    console.error('Failed to fetch user info', await userRes.text());
    return NextResponse.redirect(`${req.nextUrl.origin}/apply`);
  }

  let userData = await userRes.json();

  return NextResponse.json({
    user: userData
  });
};
