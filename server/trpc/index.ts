import { router } from './trpc';
import { greeting } from './routers/greeting';
import { user } from './routers/user';

export const appRouter = router({ greeting, user });

export type AppRouter = typeof appRouter;
