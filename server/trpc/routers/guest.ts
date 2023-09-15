const repository = getRepository('user');

export const guest = router({
  authenticate: guestProcedure.query(() => ({ success: true })),

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
