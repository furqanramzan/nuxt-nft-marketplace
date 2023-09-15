<script lang="ts" setup>
import type { Wallet } from './wallets';

defineProps<{ wallet: Wallet }>();
</script>

<template>
  <div
    class="flex w-full flex-col items-center gap-5 rounded-lg border border-gray-200 bg-white py-10 shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <NuxtImg
      placeholder
      format="webp"
      :src="wallet.image"
      height="100"
      width="100"
    />
    <h3>{{ wallet.title }}</h3>
  </div>
</template>
