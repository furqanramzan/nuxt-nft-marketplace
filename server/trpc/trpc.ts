import { TRPCError, initTRPC } from '@trpc/server';
import type { Context } from '~/server/trpc/context';

const t = initTRPC.context<Context>().create();
export const publicProcedure = t.procedure;
export const router = t.router;
export const middleware = t.middleware;

const isGuest = middleware(({ next, ctx }) => {
  if (ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const guestProcedure = publicProcedure.use(isGuest);

const isAuthenticated = middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});
export const protectedProcedure = publicProcedure.use(isAuthenticated);
