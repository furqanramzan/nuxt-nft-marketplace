export const asset = router({
  create: protectedProcedure.input(upsertAssetSchema).mutation(
    ({
      input,
      ctx: {
        user: { id: userId },
      },
    }) => {
      return getRepository('asset').create({ ...input, userId });
    },
  ),
});
