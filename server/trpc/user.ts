import { z } from 'zod';
import { publicProcedure, router } from './trpc';

const repository = getRepository('user');

export const user = router({
  login: publicProcedure
    .input(z.string())
    .mutation(async ({ input, ctx: { event } }) => {
      let jwtData: JwtData;
      const oldUser = await getLoginData(input);

      if (oldUser) {
        jwtData = oldUser;
      } else {
        const { id } = await repository.create({ address: input });
        const { address } = throwIfNotFound(await repository.getOne(id));
        jwtData = throwIfNotFound(await getLoginData(address));
      }

      const token = await jwt.encode(jwtData);
      setToken(event, token);

      return jwtData;
    }),
});

function getLoginData(address: string) {
  return repository.getLoginData(address);
}
