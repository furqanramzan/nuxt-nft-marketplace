import { z } from 'zod';
import { getRepository } from '../repositories';
import { throwIfNotFound } from '../utils/error';
import { publicProcedure, router } from './trpc';

const repository = getRepository('user');

export const user = router({
  login: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    let user = await getLoginData(input);
    if (!user) {
      const { id } = await repository.create({ address: input });
      const { address } = throwIfNotFound(await repository.getOne(id));
      user = await getLoginData(address);
    }
    return user;
  }),
});

function getLoginData(address: string) {
  return repository.getLoginData(address);
}
