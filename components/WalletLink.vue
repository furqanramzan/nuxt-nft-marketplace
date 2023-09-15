<script lang="ts" setup>
import type { Wallet } from './wallets';

defineProps<{ wallet: Wallet }>();
</script>

<template>
  <a :href="wallet.href" target="_blank" class="flex">
    <slot />
  </a>
</template>
