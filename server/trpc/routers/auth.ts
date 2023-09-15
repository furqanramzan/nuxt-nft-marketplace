export const auth = router({
  authenticate: protectedProcedure.query(() => ({ success: true })),
});
