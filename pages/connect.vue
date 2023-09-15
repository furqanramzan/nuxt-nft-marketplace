<script lang="ts" setup>
import WalletList from '~/components/WalletList.vue';

definePageMeta({
  middleware: ['guest'],
});
</script>

<template>
  <div class="mx-auto flex max-w-xl flex-col gap-5">
    <div>
      <h1 class="text-2xl font-semibold">Connect your wallet</h1>
      <p>
        If you don't have a wallet yet, you can select a provider and create one
        now.
      </p>
    </div>
    <WalletList />
  </div>
</template>
