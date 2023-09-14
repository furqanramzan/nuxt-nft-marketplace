import { router as trpcRouter } from '@trpc/server';
import { drizzle } from '~/server/database';

export const router = trpcRouter().query('greeting', {
  async resolve() {
    const users = await drizzle.query.users.findMany();
    return {
      users,
      heading: 'Nuxt NFT Marketplace',
      message: 'Built with Nuxt3',
    };
  },
});
