import { auth } from './routers/auth';
import { greeting } from './routers/greeting';
import { guest } from './routers/guest';

export const appRouter = router({ greeting, guest, auth });

export type AppRouter = typeof appRouter;
