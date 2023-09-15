export default defineNuxtRouteMiddleware(async () => {
  const { $trpc } = useNuxtApp();
  const authenticate = await promise(() => $trpc.guest.authenticate.query());

  if (!authenticate.success) {
    return navigateTo('/');
  }
});
