import type { H3Event } from 'h3';

export function setToken(event: H3Event, token: string) {
  setCookie(event, 'authorization', token, {
    // send cookie for every page
    path: '/',
    // server side only cookie so you can't use `document.cookie`
    httpOnly: true,
    // only requests from same site can send cookies
    // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
    sameSite: 'strict',
    // only sent over HTTPS in production
    secure: true,
    // set cookie to expire after a month
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function getToken(event: H3Event) {
  return getCookie(event, 'authorization');
}

export function removeToken(event: H3Event) {
  setCookie(event, 'authorization', '', {
    path: '/',
    expires: new Date(0),
  });
}
