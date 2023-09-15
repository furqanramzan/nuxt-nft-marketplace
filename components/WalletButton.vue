<script lang="ts" setup>
const { $trpc } = useNuxtApp();
const { connect } = useWeb3();

async function login() {
  const connectPromise = await promise(() => connect());
  if (connectPromise.success) {
    const { address } = connectPromise.data;
    await $trpc.guest.login.mutate(address);
    navigateTo('/');
  }
}
</script>

<template>
  <button class="flex" @click="login">
    <slot />
  </button>
</template>
