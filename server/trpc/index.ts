import { router as trpcRouter } from '@trpc/server';

export const router = trpcRouter().query('greeting', {
  resolve() {
    return { heading: 'Nuxt NFT Marketplace', message: 'Built with Nuxt3' };
  },
});
