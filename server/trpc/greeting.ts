import { publicProcedure, router } from './trpc';

export const greeting = router({
  home: publicProcedure.query(() => {
    return {
      heading: 'Nuxt NFT Marketplace',
      message: 'Built with Nuxt3',
    };
  }),
});
