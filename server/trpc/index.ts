import { asset } from './routers/asset';
import { auth } from './routers/auth';
import { greeting } from './routers/greeting';
import { guest } from './routers/guest';

export const appRouter = router({ greeting, guest, auth, asset });

export type AppRouter = typeof appRouter;
