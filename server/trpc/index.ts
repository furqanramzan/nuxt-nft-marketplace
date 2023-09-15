import { router } from './trpc';
import { greeting } from './greeting';
import { user } from './user';

export const appRouter = router({ greeting, user });

export type AppRouter = typeof appRouter;
