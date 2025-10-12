import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

let resend = new Resend(process.env.RESEND_API_KEY!);

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

  try {
    await resend.contacts.create({
      email: userData.email!,
      firstName: userData.first_name,
      lastName: userData.last_name,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID!
    });
  } catch (e) {
    console.error('Failed to add user to contacts', e);
  }

  // return NextResponse.json({
  //   user: userData
  // });

  let formUrl = new URL(`https://forms.metorial.com/yc-agents-25`);
  formUrl.searchParams.set('firstName', userData.first_name || '');
  formUrl.searchParams.set('lastName', userData.last_name || '');
  formUrl.searchParams.set('email', userData.email || '');
  formUrl.searchParams.set('metorialUserId', userData.id || '');

  return NextResponse.redirect(formUrl.toString());
};
