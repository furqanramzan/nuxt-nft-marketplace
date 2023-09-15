<script lang="ts" setup>
const { $trpc } = useNuxtApp();
const { signer, connect, isConnectable, isConnected } = useWeb3();

const connectable = ref(false);

onMounted(() => {
  connectable.value = isConnectable();
  if (connectable.value) {
    isConnected();
  }
});

async function login() {
  const connectPromise = await promise(() => connect());
  if (connectPromise.success) {
    const { address } = connectPromise.data;
    await $trpc.guest.login.mutate(address);
  }
}
</script>

<template>
  <div v-if="connectable">
    <span v-if="signer">{{ signer.address }}</span>
    <button
      v-else
      type="button"
      class="inline-flex items-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      @click="login"
    >
      Connect Wallet
    </button>
  </div>
  <a v-else href="https://metamask.io" target="_blank">Install MetaMask</a>
</template>
