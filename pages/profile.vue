<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <ClientOnly>
      <ConnectWeb3 />
    </ClientOnly>
  </div>
</template>
