import type { H3Event } from 'h3';
import type { inferAsyncReturnType } from '@trpc/server';

function getUser(token?: string) {
  if (token) {
    return jwt.verify(token);
  }
}

export async function createContext(event: H3Event) {
  const token = getToken(event);
  const user = await getUser(token);
  return { event, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;
