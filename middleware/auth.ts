export default defineNuxtRouteMiddleware(async () => {
  const { $trpc } = useNuxtApp();
  const authenticate = await promise(() => $trpc.auth.authenticate.query());

  if (!authenticate.success) {
    return navigateTo('/connect');
  }
});
